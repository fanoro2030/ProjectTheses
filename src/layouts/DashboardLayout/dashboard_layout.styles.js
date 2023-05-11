import { makeStyles } from '@material-ui/core/styles';
import { primaryColor, secondaryColor } from '../../theme/constants/colors';
const drawerWidth = 270;
// Estilos para DashboardLayout
export const useStylesDashboardLayout = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: secondaryColor,
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: primaryColor,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
