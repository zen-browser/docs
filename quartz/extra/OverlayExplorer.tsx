// Nothing yet
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../components/types"
import overlayexplorerStyle from "./styles/overlayexplorer.scss"

// @ts-ignore
import script from "./scripts/overlayexplorer.inline"
import { FileNode, Options } from "../components/ExplorerNode"
import { QuartzPluginData } from "../plugins/vfile"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { joinSegments, resolveRelative } from "../util/path"

interface OlOptions extends Omit<Options, "folderClickBehavior"> {
  folderClickBehavior: "collapse" | "link" | "mixed"
}

const defaultOptions = {
  folderClickBehavior: "mixed",
  folderDefaultState: "collapsed",
  useSavedState: true,
  mapFn: (node) => {
    return node
  },
  sortFn: (a, b) => {
    // Sort order: folders first, then files. Sort folders and files alphabetically
    if ((!a.file && !b.file) || (a.file && b.file)) {
      // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
      // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }

    if (a.file && !b.file) {
      return 1
    } else {
      return -1
    }
  },
  filterFn: (node) => node.name !== "tags",
  order: ["filter", "map", "sort"],
} satisfies OlOptions

type OlExplorerNodeProps = {
  node: FileNode
  opts: OlOptions
  fileData: QuartzPluginData
  fullPath?: string
}

function OverlayExplorerNode({node, opts, fullPath, fileData}: OlExplorerNodeProps) {

  // Calculate current folderPath
  const folderPath = node.name !== "" ? joinSegments(fullPath ?? "", node.name) : ""
  const href = resolveRelative(fileData.slug!, folderPath as SimpleSlug) + "/"

  return (
    <>
      {node.file ? (
        <li key={node.file.slug}>
          <a href={resolveRelative(fileData.slug!, node.file.slug!)}>
            {node.displayName}
          </a>
        </li>
      ) : (
        <li>
          {node.name !== "" && (
            <div data-ol-selector-for={folderPath} class="ol-folder-entry">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="5 8 14 8"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class={`ol-folder-icon ${opts.folderDefaultState === "open" && "open"}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              {opts.folderClickBehavior === "link" ? (
                <a href={href} class="ol-folder-title">
                  {node.displayName}
                </a>
              ) : (
                <>
                <button class="ol-folder-button">
                  <span class="ol-folder-title">{node.displayName}</span>
                </button>
                {opts.folderClickBehavior === "mixed" && (
                  <a href={href}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="12"
                      viewBox="0 4 21 15"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="0 9 18 9"></polyline>
                      <polyline points="0 15 18 15"></polyline>
                      <polyline points="15 6 21 12 15 18"></polyline>
                    </svg>
                  </a>
                )}
                </>
              )}
            </div>
          )}
          <div data-ol-children-for={folderPath} class={`ol-folder-outer ${(node.depth === 0 || opts.folderDefaultState === "open") && "open"}`}>
            <ul
              style={{
                paddingLeft: node.name !== "" ? "1.4rem" : "0",
              }}
            >
              {node.children.map((childNode, i) => (
                <OverlayExplorerNode
                  node={childNode}
                  key={i}
                  opts={opts}
                  fullPath={folderPath}
                  fileData={fileData}
                />
              ))}
            </ul>
          </div>
        </li>
      )}
    </>
  )
}

export default ((userOpts?: Partial<OlOptions>) => {
  // Parse config
  const opts: OlOptions = { ...defaultOptions, ...userOpts }

  // memoized
  let fileTree: FileNode
  let lastBuildId: string = ""

  function constructFileTree(allFiles: QuartzPluginData[]) {
    // Construct tree from allFiles
    fileTree = new FileNode("")
    allFiles.forEach((file) => fileTree.add(file))

    // Execute all functions (sort, filter, map) that were provided (if none were provided, only default "sort" is applied)
    if (opts.order) {
      // Order is important, use loop with index instead of order.map()
      for (let i = 0; i < opts.order.length; i++) {
        const functionName = opts.order[i]
        if (functionName === "map") {
          fileTree.map(opts.mapFn)
        } else if (functionName === "sort") {
          fileTree.sort(opts.sortFn)
        } else if (functionName === "filter") {
          fileTree.filter(opts.filterFn)
        }
      }
    }
  }

  const OverlayExplorer: QuartzComponent = ({
    ctx,
    cfg,
    allFiles,
    displayClass,
    fileData,
  }: QuartzComponentProps) => {
    if (ctx.buildId !== lastBuildId) {
      lastBuildId = ctx.buildId
      constructFileTree(allFiles)
    }

    return (
      <div class={classNames(displayClass, "overlay-explorer")}>
        <button
          type="button"
          id="overlay-explorer-button"
          aria-controls="overlay-explorer-content"
          data-olsavestate={opts.useSavedState}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 8 14 8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 6 18 6"></polyline>
            <polyline points="6 12 18 12"></polyline>
            <polyline points="6 18 18 18"></polyline>
          </svg>
        </button>
        <div id="overlay-explorer-container">
          <div id="overlay-explorer-space">
            <div id="overlay-explorer-content">
              <ul id="overlay-explorer-ul">
                <OverlayExplorerNode node={fileTree} opts={opts} fileData={fileData} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  OverlayExplorer.css = overlayexplorerStyle
  OverlayExplorer.afterDOMLoaded = script
  return OverlayExplorer
}) satisfies QuartzComponentConstructor
