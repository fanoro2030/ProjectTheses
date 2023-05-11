import { makeStyles } from '@material-ui/core/styles';
import { primaryColor, secondaryColor } from '../../theme/constants/colors';
// Estilos para PageLayout
export const useStylesPageLayout = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: secondaryColor,
  },
  sidebar: {
    backgroundColor: primaryColor,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
