"use client";

import React, { useEffect, useState } from "react";

interface KeyboardShortcutProps {
  shortcut: string;
  macosShortcut?: string;
  className?: string;
}

const KeyboardShortcut: React.FC<KeyboardShortcutProps> = ({
  shortcut,
  macosShortcut,
  className,
}) => {
  const [displayShortcut, setDisplayShortcut] = useState(shortcut);

  useEffect(() => {
    // OS detection should run only on the client-side
    const isMacUser = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

    if (isMacUser) {
      if (macosShortcut) {
        setDisplayShortcut(macosShortcut);
      } else {
        // Convert common Windows/Linux keys to macOS equivalents
        let convertedShortcut = shortcut;
        convertedShortcut = convertedShortcut.replace(/Ctrl\s*\+\s*/gi, "⌘ + ");
        convertedShortcut = convertedShortcut.replace(/Alt\s*\+\s*/gi, "⌥ + ");
        convertedShortcut = convertedShortcut.replace(/Cmd\s*\+\s*/gi, "⌘ + "); // In case Cmd was used in the base shortcut
        convertedShortcut = convertedShortcut.replace(
          /Option\s*\+\s*/gi,
          "⌥ + "
        ); // In case Option was used
        // Replace individual keys if not part of a combo already handled
        convertedShortcut = convertedShortcut.replace(/(?<!⌘ )Ctrl/gi, "⌘");
        convertedShortcut = convertedShortcut.replace(/(?<!⌥ )Alt/gi, "⌥");
        setDisplayShortcut(convertedShortcut);
      }
    } else {
      // For non-Mac users, display the original shortcut or Windows/Linux specific if ever needed
      setDisplayShortcut(shortcut);
    }
  }, [shortcut, macosShortcut]);

  const keys = displayShortcut.split(/\s*\+\s*/);

  return (
    <span className={`inline-flex items-center ${className || ""}`}>
      {keys.map((key, index) => (
        <React.Fragment key={index}>
          <kbd className="px-1 py-0.5 text-xs font-semibold text-fd-foreground bg-fd-card border border-fd-border rounded-sm">
            {key.toLowerCase() === "shift" ? "⇧" : key}
          </kbd>
          {index < keys.length - 1 && <span className="mx-1">+</span>}
        </React.Fragment>
      ))}
    </span>
  );
};

export default KeyboardShortcut;
