"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WebflowInit({ pageId, siteId }: { pageId?: string, siteId?: string }) {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    // 1. Initial State: Hide the page content immediately during route change
    root.classList.add("wf-pending");
    root.classList.remove("wf-ready");
    
    // Update Webflow Page and Site IDs
    if (pageId) root.setAttribute("data-wf-page", pageId);
    if (siteId) root.setAttribute("data-wf-site", siteId);

    let isDestroyed = false;

    const revealPage = ({ forceHero = false } = {}) => {
      root.classList.remove("wf-pending");
      root.classList.add("w-mod-ix3");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!isDestroyed) {
            root.classList.add("wf-ready");
          }
        });
      });

      if (!forceHero) {
        return;
      }

      const heroElements = document.querySelectorAll<HTMLElement>(
        ".section-hero, .hero-content-wrap, .hero-heading, .hero-desc, .img-hero, .hero-info-img.first, .hero-info-img.is-secondary"
      );

      heroElements.forEach((el) => {
        el.style.setProperty("visibility", "visible", "important");
        el.style.removeProperty("opacity");
      });
    };

    const init = async () => {
      // Failsafe: Ensure the page is ALWAYS revealed after 800ms, even if everything crashes
      const failsafeTimer = setTimeout(() => {
        if (!isDestroyed) {
          revealPage({ forceHero: true });
        }
      }, 800);

      const waitForWebflow = () => {
        return new Promise<void>((resolve) => {
          const timeout = setTimeout(() => resolve(), 3000); // 3s timeout for the promise itself
          const check = () => {
            const wf = (window as any).Webflow;
            if (wf && wf.destroy && wf.ready) {
              clearTimeout(timeout);
              resolve();
            } else {
              requestAnimationFrame(check);
            }
          };
          check();
        });
      };

      await waitForWebflow();
      if (isDestroyed) {
        clearTimeout(failsafeTimer);
        return;
      }

      const wf = (window as any).Webflow;

      requestAnimationFrame(() => {
        if (isDestroyed) {
          clearTimeout(failsafeTimer);
          return;
        }

        try {
          if (wf.destroy) wf.destroy();

          // Clear stuck styles on known fragile elements
          const anims = document.querySelectorAll<HTMLElement>("[data-w-id]");
          anims.forEach(el => el.removeAttribute("style"));

          wf.ready();

          // Safe IX2 Initialization
          const ix2 = wf.require("ix2");
          if (ix2 && ix2.init) {
            try {
              // Suppress the specifically annoying 'timeline' error that happens inside IX2
              const originalError = console.error;
              console.error = (...args) => {
                if (args[0]?.includes?.('timeline') || args[0]?.message?.includes?.('timeline')) {
                  console.warn("Suppressed Webflow timeline error:", ...args);
                  return;
                }
                originalError.apply(console, args);
              };

              ix2.init();
              
              // Restore console after a short delay
              setTimeout(() => { console.error = originalError; }, 1000);
            } catch (ixError) {
              console.warn("Webflow IX2 sync init error:", ixError);
            }
          }

          // Successful path: Reveal shortly after init
          setTimeout(() => {
            if (isDestroyed) return;
            revealPage();
            clearTimeout(failsafeTimer);
            
            window.dispatchEvent(new Event("scroll"));
            window.dispatchEvent(new Event("resize"));
          }, 100);

        } catch (error) {
          console.error("Webflow re-initialization failure:", error);
          revealPage({ forceHero: true });
          clearTimeout(failsafeTimer);
        }
      });
    };

    init();

    return () => {
      isDestroyed = true;
    };
  }, [pathname, pageId, siteId]);

  return null;
}
