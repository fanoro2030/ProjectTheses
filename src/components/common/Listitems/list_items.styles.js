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
    paddingTop: 4,
    paddingBottom: 4,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  listLink: {
    // border: '1px solid white',
    padding: '0 15px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all .5s',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '4px 8px',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  listLinkCollapsed: {
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7),
      justifyContent: 'left',
    },
  },
  listIcon: {
    color: 'inherit',
    justifyContent: 'left',
    minWidth: 32,
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
}));
