// Nothing yet 

import { registerEscapeHandler } from "../../components/scripts/util"

type MaybeHTMLElement = HTMLElement | undefined

function setFolder(folderPath: string, open: boolean) {
  const childrenList = document.querySelector(
    `[data-ol-children-for='${folderPath}']`
  ) as MaybeHTMLElement
  if (!childrenList) return

  const folderEntry = document.querySelector(
    `[data-ol-selector-for='${folderPath}']`
  ) as MaybeHTMLElement
  if (!folderEntry) return

  const collapseIcon = folderEntry.getElementsByTagName(
    "svg"
  )[0] as MaybeHTMLElement
  if (!collapseIcon) return

  if (open) {
    childrenList.classList.add("open")
    collapseIcon.classList.add("open")
  } else {
    childrenList.classList.remove("open")
    collapseIcon.classList.remove("open")
  }
}

function setupOverlayExplorer() {
  const openButton = document.getElementById("overlay-explorer-button")
  const container = document.getElementById("overlay-explorer-container")

  const useSaveState = openButton?.dataset.olsavestate === "true"

  let folderOpenMap: Map<string, boolean>

  if (useSaveState) {
    const fromStorage = localStorage.getItem("olFileTree")
    folderOpenMap = new Map<string, boolean>(fromStorage ? JSON.parse(fromStorage) : [])

    for (let [key, value] of folderOpenMap) {
      setFolder(key, value)
    }
  }

  function showExplorer() {
    container?.classList.add("active")
  }

  function hideExplorer() {
    container?.classList.remove("active")
  }

  function toggleFolder(evt: MouseEvent) {
    evt.stopPropagation()
    const target = evt.target as MaybeHTMLElement
    if (!target) return

    const folderPath = target.parentNode.getAttribute("data-ol-selector-for")
    const childrenList = document.querySelector(
      `[data-ol-children-for='${folderPath}']`
    ) as MaybeHTMLElement
    if (!childrenList) return

    const collapseIcon = target.parentNode.getElementsByTagName(
      "svg"
    )[0] as MaybeHTMLElement
    if (!collapseIcon) return

    childrenList.classList.toggle("open")
    collapseIcon.classList.toggle("open")

    if (useSaveState) {
      folderOpenMap.set(folderPath, collapseIcon.classList.contains("open"))
      localStorage.setItem(
        "olFileTree",
        JSON.stringify(Array.from(folderOpenMap.entries()))
      )
    }
  }

  openButton.addEventListener("click", showExplorer)
  window.addCleanup(() => openButton.removeEventListener("click", showExplorer))

  // Set up click handlers for each folder (click handler on folder "icon")
  for (const item of document.getElementsByClassName(
    "ol-folder-icon",
  ) as HTMLCollectionOf<HTMLElement>) {
    item.addEventListener("click", toggleFolder)
    window.addCleanup(() => item.removeEventListener("click", toggleFolder))
  }

  for (const item of document.getElementsByClassName(
    "ol-folder-button",
  ) as HTMLCollectionOf<HTMLElement>) {
    item.addEventListener("click", toggleFolder)
    window.addCleanup(() => item.removeEventListener("click", toggleFolder))
  }

  registerEscapeHandler(container, hideExplorer)
}

document.addEventListener("nav", () => {
  setupOverlayExplorer()
})
