import { createContext, useContext, useState } from 'react';

const STORAGE_KEY = 'nexustrailer_wishlist';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggle = (product) => {
    setItems(prev => {
      const next = prev.find(i => i.id === product.id)
        ? prev.filter(i => i.id !== product.id)
        : [...prev, product];
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const has = (id) => items.some(i => i.id === id);
  const count = items.length;

  return (
    <WishlistContext.Provider value={{ items, toggle, has, count }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
