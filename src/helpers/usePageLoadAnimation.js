// usePageLoadAnimation.js
import { useEffect, useState } from 'react';

const usePageLoadAnimation = () => {
  const [shouldAnimatePreScroll, setShouldAnimatePreScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimatePreScroll(true);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  return shouldAnimatePreScroll;
};

export default usePageLoadAnimation;
