import { useState } from 'react';

const useCollapse = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = (open) => setIsOpen(open !== undefined ? open : !isOpen);

  return {
    isOpen,
    toggle,
  };
};

export default useCollapse;
