import { makeStyles } from '@material-ui/core/styles';
import { primaryColor, secondaryColor } from '../../theme/constants/colors';

// Estilos para DashboardLayout
export const useStylesDashboardLayout = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: primaryColor,
  },
  sidebar: {
    backgroundColor: secondaryColor,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
