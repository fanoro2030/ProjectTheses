import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    display: 'flex',
  },
  headerTitle: {
    fontWeight: 400,
    flexGrow: 0.7,
  },
  pageIcon: {
    marginRight: theme.spacing(1),
    color: 'green',
  },
}));
