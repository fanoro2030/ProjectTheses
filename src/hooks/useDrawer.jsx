import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const useDrawer = () => {
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    history.listen(() => setMobileOpen(false));
  }, [history]);

  return [mobileOpen, handleDrawerToggle];
};
export default useDrawer;
