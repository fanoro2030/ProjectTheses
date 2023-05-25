import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme, item) => ({
  appBar: ({ position }) => ({
    position: 'fixed',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${position === 'left' ? 240 : 0}px)`,
      marginLeft: position === 'left' ? 240 : 0,
    },
  }),
  menuButton: ({ position }) => ({
    marginRight: position === 'left' ? theme.spacing(2) : 0,
    marginLeft: position === 'right' ? 'auto' : 0,
  }),

  horizontalList: ({ position }) => ({
    display: 'flex',
    marginLeft: position === 'right' ? 'auto' : 0,

    width: '80%',
    '& > div': {
      marginRight: theme.spacing(1),
    },
  }),

  root: () => ({
    margin: '4px auto',
    borderRadius: '8px',
  }),
  expanded: { color: 'white', backgroundColor: theme.palette.secondary },
  selected: {
    color: 'y#ece8dd',
    backgroundColor: theme.palette.secondary,
  },
  listItem: {
    paddingTop: 1,
    paddingButtom: 1,

    display: 'flex',

    TextAlign: 'center',
    '&:hover': {
      backgroundColor: theme.palette.secondary,
    },
  },
  listLink: {
    display: 'flex',
    textDecoration: 'none',
    color: 'ired',
    transition: 'all .5s',

    '&:hover': {
      backgroundColor: theme.palette.primary,
    },
  },
  listItemText: {
    fontSize: 16,
    textAlign: 'center',
  },
}));
