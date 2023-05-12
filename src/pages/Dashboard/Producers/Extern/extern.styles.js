import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    width: '100%',
  },

  button: {
    width: '6rem',
    height: 30,
    borderRadius: '3rem',
  },

  table: {
    minWidth: 700,
  },

  searchInput: {
    width: '75%',
  },
  newButton: {
    position: 'absolute',
    right: '10px',
  },
}));
