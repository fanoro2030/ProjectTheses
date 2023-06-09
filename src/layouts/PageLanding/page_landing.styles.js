import { makeStyles } from '@material-ui/core/styles';
import { primaryColor, tertiaryColor } from '../../themesdsd/constants/colors';
// Estilos para PageLayout
const drawerWidth = 260;
export const useStylesPageLayout = makeStyles((theme) => ({
  page_layout: {
    flexDirection: 'column',
    paddingTop: theme.spacing(3),
    marginTop: '11rem',
    width: '100%', //important draft for content
    justifyContent: 'space-between',
    backgroundColor: '#9fa4a0',
  },

  appBar: {
    backgroundColor: primaryColor,
  },
  drawerPaper: {
    width: 250,
    display: 'flex',
    position: 'fixed',
    color: theme.palette.type === 'light' && theme.palette.grey[100],
    backgroundColor: theme.palette.secondary.main,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
