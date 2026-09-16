import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    // POP = retour/avance navigateur — on laisse le navigateur restaurer la position
    if (navType === 'POP') return;
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash, navType]);
  return null;
}
