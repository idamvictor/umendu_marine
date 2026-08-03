"use client";

import * as React from "react";

/**
 * Reveals a grid/list of items one after another as the group scrolls
 * into view. Renders no wrapper of its own -- it clones each item you
 * pass in and injects the transition directly, so it drops straight
 * into an existing grid without disturbing layout tricks that depend on
 * direct-child selectors (`divide-x`, `first:`, `last:`).
 *
 * The first item carries the IntersectionObserver ref, so items must be
 * plain elements that accept a `ref` (a `div`, not a custom component
 * without `forwardRef`). If an item already owns its own hover/press
 * transform (e.g. a card that scales on `:active`), wrap it in a plain
 * `<div>` first and pass that div to StaggerReveal instead -- otherwise
 * the injected reveal `transform` will fight the item's own.
 *
 * Usage:
 *   <div className="grid grid-cols-4 gap-6">
 *     <StaggerReveal>
 *       {items.map((item) => <div key={item.id}>...</div>)}
 *     </StaggerReveal>
 *   </div>
 */
export function StaggerReveal({
  children,
  staggerMs = 80,
  distance = 16,
  duration = 500,
  scaleFrom = 1,
}: {
  children: React.ReactNode;
  staggerMs?: number;
  distance?: number;
  duration?: number;
  scaleFrom?: number;
}) {
  const observerRef = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = observerRef.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const items = React.Children.toArray(children);

  return (
    <>
      {items.map((child, index) => {
        if (!React.isValidElement<{ style?: React.CSSProperties }>(child)) {
          return child;
        }

        const transform = visible
          ? "translateY(0) scale(1)"
          : `translateY(${distance}px) scale(${scaleFrom})`;

        // Cloning onto host elements (a plain `<div>`) to inject `ref` --
        // TS can't verify `ref` is valid for a loosely-typed ReactElement,
        // but it is for the host elements this component is documented to take.
        return React.cloneElement(child, {
          key: child.key ?? index,
          ref: index === 0 ? observerRef : undefined,
          style: {
            ...child.props.style,
            transitionProperty: "opacity, transform",
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: visible ? `${index * staggerMs}ms` : "0ms",
            opacity: visible ? 1 : 0,
            transform,
          },
        } as React.Attributes & { style: React.CSSProperties; ref?: React.Ref<HTMLElement> });
      })}
    </>
  );
}
