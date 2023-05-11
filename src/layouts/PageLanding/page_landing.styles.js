import { makeStyles } from '@material-ui/core/styles';
import { primaryColor, tertiaryColor } from '../../theme/constants/colors';
// Estilos para PageLayout
const drawerWidth = 240;
export const useStylesPageLayout = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: primaryColor,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: tertiaryColor,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
