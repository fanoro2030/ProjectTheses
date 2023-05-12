import { useState, useEffect } from 'react';

const useCollapse = (item, pathname, onClose) => {
  const [open, setOpen] = useState(false);
  const nested = typeof item.subRoutes === 'object';

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (pathname.search(new RegExp(item.url, 'g')) !== -1) {
      setOpen(true);
    }
  }, [pathname, item.url]);

  useEffect(() => {
    if (!open && onClose) {
      onClose();
    }
  }, [open, onClose]);

  return { open, nested, handleClick };
};
export default useCollapse;
