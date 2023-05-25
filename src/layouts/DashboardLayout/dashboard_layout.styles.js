import { makeStyles } from '@material-ui/core/styles';
import { secondaryColor } from '../../themesdsd/constants/colors';
const drawerWidth = 270;

export const useStylesDashboardLayout = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minheight: '100vh',
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${250}px)`,
      marginLeft: 250,
    },
    backgroundColor: secondaryColor,
  },

  drawerPaper: {
    width: 250,
    display: 'flex',
    position: 'fixed',
    color: theme.palette.type === 'light' && theme.palette.grey[100],
    backgroundColor: theme.palette.secondary.main,
  },
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,

    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${250}px)`,
      marginLeft: 250,
    },
  },
  content_body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
