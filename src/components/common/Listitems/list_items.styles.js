import { makeStyles, lighten } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    margin: '4px auto',
    borderRadius: '8px',
    transition: 'all .5s',
    overflow: 'hidden',
  },
  listItem: {
    transition: 'all .5s',
    display: 'flex',
    flexDirection: 'column',
  },
  listLink: {
    padding: '0 15px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all .5s',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  listLinkCollapsed: {
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7),
      flexDirection: 'column',
      justifyContent: 'left',
    },
  },
  listIcon: {
    color: 'inherit',
    justifyContent: 'left',
  },
  listItemText: {
    [theme.breakpoints.up('md')]: {
      fontSize: 9,
    },
  },
  expanded: {
    backgroundColor: lighten(theme.palette.secondary.main, 0.1),
  },
  selected: {
    backgroundColor: lighten(theme.palette.secondary.main, 0.3),
  },
  activeButton: {
    backgroundCcolor: '#fff',
    color: '#000',
  },
}));
