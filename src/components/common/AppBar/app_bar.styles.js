import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: ({ position }) => ({
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
      marginRight: theme.spacing(20),
    },
  },
  horizontalList: {
    display: 'flex',
    alignItems: 'center',
  },
}));
