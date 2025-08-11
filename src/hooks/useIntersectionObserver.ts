import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Hook pour détecter quand un élément entre dans le viewport
 */
export const useIntersectionObserver = ({
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
}: UseIntersectionObserverOptions) => {
  const ref = useRef<HTMLElement>(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasIntersected)) {
            onIntersect();
            if (once) {
              setHasIntersected(true);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [onIntersect, threshold, rootMargin, once, hasIntersected]);

  return { ref };
};
