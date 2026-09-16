import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const positions = new Map();

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType();
  const prevKey = useRef(key);

  useEffect(() => {
    if (navType === 'POP') {
      const saved = positions.get(key);
      if (saved != null) {
        requestAnimationFrame(() => window.scrollTo(0, saved));
      }
    } else {
      if (prevKey.current !== key) {
        positions.set(prevKey.current, window.scrollY);
      }
      if (!hash) window.scrollTo(0, 0);
    }
    prevKey.current = key;
  }, [pathname, hash, key, navType]);

  useEffect(() => {
    const save = () => positions.set(key, window.scrollY);
    window.addEventListener('scroll', save, { passive: true });
    return () => window.removeEventListener('scroll', save);
  }, [key]);

  return null;
}
