import { useState, useEffect } from 'react';

const useDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return [mobileOpen, handleDrawerToggle];
};
export default useDrawer;
