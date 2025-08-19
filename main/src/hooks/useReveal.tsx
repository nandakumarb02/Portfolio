import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Custom hook to reveal elements on scroll.
 *
 * How to use:
 * 1. Add the `.reveal` class to any element you want to animate.
 *    e.g., <h1 className="reveal">Hello World</h1>
 *
 * 2. For a staggered (cinematic) effect on multiple elements, ensure they share the same parent container.
 *    All `.reveal` elements within the same parent will animate in sequence.
 *    e.g.,
 *    <section>
 *      <h2 className="reveal">Title</h2>
 *      <p className="reveal">A paragraph of text.</p>
 *      <div className="reveal">Another element.</div>
 *    </section>
 *
 * 3. The hook is called once in a layout component (e.g., App.tsx) to apply the effect globally.
 *    useReveal();
 *
 * @param selector - The CSS selector for elements to reveal. Defaults to '.reveal'.
 */
const useReveal = (selector: string = '.reveal') => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      return;
    }

    // Group elements by their parent
    const elementsByParent = new Map<Element, Element[]>();
    const revealElements = gsap.utils.toArray<Element>(selector);

    revealElements.forEach((element) => {
      const parent = element.parentElement;
      if (parent) {
        if (!elementsByParent.has(parent)) {
          elementsByParent.set(parent, []);
        }
        elementsByParent.get(parent)!.push(element);
      }
    });

    elementsByParent.forEach((elements, parent) => {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 50, // Start 50px below the final position
        },
        {
          opacity: 1,
          y: 0, // Animate to the final position
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2, // Stagger the animation for elements in the same container
          clearProps: 'all', // Clear GSAP's inline styles after animation
          scrollTrigger: {
            trigger: parent,
            start: 'top 80%', // Trigger when the top of the parent is 80% from the top of the viewport
            toggleActions: 'play none none none', // Play the animation once and don't replay
            once: true, // Ensures the trigger only fires once
          },
        }
      );
    });
  }, [selector]);
};

export default useReveal;
