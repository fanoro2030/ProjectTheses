import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import PoppinsRegulare from '../assets/fonts/poppins/PoppinsRegular.ttf';
const PoppinsRegular = {
  fontFamily: 'PoppinsRegular',
  fontStyle: 'Regular ',
  fontWeight: 200,
  src: `url(${PoppinsRegulare})`,
};
const theme = createTheme({
  typography: {
    fontFamily: [PoppinsRegular.fontFamily].join(','),
  },
  palette: {
    primary: {
      main: '#286c05',
      light: '#3c44b126',
    },
    secondary: {
      main: '#274e13',
      light: '#3c44b126',
    },

    background: {
      default: '#f5f5f5',
    },
    titleBar: {
      main: '#514848',
      contrastText: '#222222',
    },
    error: {
      main: red.A400,
    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [PoppinsRegular],
      },
      body: {
        fontFamily: ['PoppinsRegular'],
      },
      'h1, h2, h3, h4, h5, h6': {
        margin: 0,
        padding: 0,
      },
    },
  },
});

export default theme;
