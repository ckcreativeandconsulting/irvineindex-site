"use client";

import { useEffect } from "react";

export function ClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-track-outbound]");

      if (!target) {
        return;
      }

      const payload = {
        event: "outbound_click",
        label: target.dataset.trackOutbound,
        href: target instanceof HTMLAnchorElement ? target.href : undefined
      };

      console.info("[Irvine Index analytics stub]", payload);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
