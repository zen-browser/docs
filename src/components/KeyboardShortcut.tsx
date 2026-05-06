"use client";

import React, { useEffect, useState } from "react";

interface KeyboardShortcutProps {
  shortcut: string;
  macosShortcut?: string;
  className?: string;
  rewriteCtrlToCmd?: boolean;
}

// OS detection should run only on the client-side
const isMacUser = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

const toCharacter = (shortcut: string): string =>
  shortcut
    .replace(/Ctrl\s*\+\s*/gi, "⌃ + ")
    .replace(/Alt\s*\+\s*/gi, "⌥ + ")
    // In case Cmd was used in the base shortcut
    .replace(/Cmd\s*\+\s*/gi, "⌘ + ")
    // In case Option was used
    .replace(/Option\s*\+\s*/gi, "⌥ + ")
    // Replace individual keys if not part of a combo already handled
    .replace(/(?<!⌘ )Cmd/gi, "⌘")
    .replace(/(?<!⌃ )Ctrl/gi, "⌃")
    .replace(/(?<!⌥ )Alt/gi, "⌥");

const KeyboardShortcut: React.FC<KeyboardShortcutProps> = ({
  shortcut,
  macosShortcut,
  className,
  rewriteCtrlToCmd = true,
}) => {
  const [displayShortcut, setDisplayShortcut] = useState(shortcut);

  useEffect(() => {
    if (isMacUser) {
      if (macosShortcut) {
        setDisplayShortcut(toCharacter(macosShortcut));
      } else {
        // Convert common Windows/Linux keys to macOS equivalents
        setDisplayShortcut(
          toCharacter(
            shortcut.replace(
              /Ctrl\s*\+\s*/gi,
              `${rewriteCtrlToCmd ? "Cmd" : "Ctrl"} + `,
            ),
          ),
        );
      }
    } else {
      // For non-Mac users, display the original shortcut or Windows/Linux specific if ever needed
      setDisplayShortcut(shortcut);
    }
  }, [shortcut, macosShortcut, rewriteCtrlToCmd]);

  const keys = displayShortcut.split(/\s*\+\s*/);

  return (
    <span className={`inline-flex items-center ${className || ""}`}>
      {keys.map((key, index) => (
        <React.Fragment key={index}>
          <kbd className="px-1 py-0.5 text-xs font-semibold text-fd-foreground bg-fd-card border border-fd-border rounded-sm">
            {key.toLowerCase() === "shift"
              ? "⇧"
              : key.toLowerCase() === "plus"
                ? "+"
                : key}
          </kbd>
          {index < keys.length - 1 && <span className="mx-1">+</span>}
        </React.Fragment>
      ))}
    </span>
  );
};

export default KeyboardShortcut;
