import { makeStyles } from '@material-ui/core';
import background from '../../../assets/fonts/images/logo_slider.png';

export const useStyles = makeStyles((theme) => ({
  content_slider: {
    position: 'fixed',
    marginTop: theme.spacing(8),
    backgroundImage: `url(${background})`,
  },

  items_slider: {
    margin: theme.spacing(1),
  },

  content_tittle: {
    textAlign: 'center',
    justifyContent: 'center',
    flex: '1 0 auto',
  },

  typography: {
    fontSize: '1.5rem',
    fontWeight: '900',
    lineHeight: '1.875rem',
    color: 'white',
  },
  image_logo_plant: {
    width: '6rem',
    height: '6rem',
    borderRadius: '50%',
  },
  image_country: {
    width: '6rem',
    height: '6rem',
    borderRadius: '50%',
  },
}));
