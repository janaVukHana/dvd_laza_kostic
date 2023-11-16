import { useEffect } from 'react';

const useIntersectionObserver = (ref, id, setActive) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting && setActive(id);
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, id, setActive]);
};

export default useIntersectionObserver;
