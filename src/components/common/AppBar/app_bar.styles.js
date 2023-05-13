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
  listItemRoot: {
    margin: '0 12px',
    padding: '0 12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      borderRadius: 4,
    },
  },
  listItemName: {
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 8,
  },
  horizontalList: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    textAlign: 'center !important', // añadimos !important
    padding: '0px',
    margin: '0px',
    listStyle: 'none',
    border: '2px solid blue',
  },
  centered: {
    border: '2px solid red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'right',
    textAlign: 'center!important',
    padding: '0px',
    margin: '0px',
    listStyle: 'none',
  },
  customList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
