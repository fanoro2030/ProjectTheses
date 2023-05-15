import { makeStyles, lighten } from '@material-ui/core/styles';

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

  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'right',
    padding: 0,
    '& > li': {
      marginRight: theme.spacing(10),
    },

    backgroundColor: theme.palette.background.transparent,
    border: `1px solid red`,
  },
  listItem: {
    borderBottom: `1px solid red`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    '& > div': {
      marginRight: theme.spacing(70),
    },
  },
  horizontalList: ({ position }) => ({
    display: 'flex',
    marginLeft: position === 'right' ? 'auto' : 0,

    width: '100%',
    '& > div': {
      marginRight: theme.spacing(11),
    },
  }),

  root: ({ position }) => ({
    flexDirection: 'row',
    width: '88%',
    margin: '4px auto',
    borderRadius: '8px',

    marginLeft: position === 'right' ? 'auto' : 0,
  }),
  expanded: { color: 'white' },
  selected: {
    color: 'y#ece8dd',
    backgroundColor: theme.palette.primary.secondary,
  },
  listItem: {
    paddingTop: 1,
    paddingBottom: 1,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  listItemText: {
    fontSize: 16,
  },
}));
