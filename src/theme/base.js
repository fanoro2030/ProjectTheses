import normal from './normal';
import dark from './dark';

const themes = {
  dark,
  normal,
};

export const getTheme = (theme) => {
  return themes[theme];
};
