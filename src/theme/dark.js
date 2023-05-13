import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import PoppinsRegulare from '../assets/fonts/poppins/PoppinsRegular.ttf';
const PoppinsRegular = {
  fontFamily: 'PoppinsRegular',
  fontStyle: 'Regular',
  fontWeight: 200,
  src: `url(${PoppinsRegulare})`,
};

const theme = createTheme({
  typography: {
    fontFamily: [PoppinsRegular.fontFamily].join(','),
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#26292C',
      light: 'rgb(81, 91, 95)',
      dark: 'rgb(26, 35, 39)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#64696e',
      light: '#249a16',
      dark: '#41cf31',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    titleBar: {
      main: '#555555',
      contrastText: '#ffffff',
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
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

export default theme;
