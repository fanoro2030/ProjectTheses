import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  content_body: {
    width: '50%',
    textAlign: 'center',
    flexDirection: 'column',
    backgroundColor: 'red',
    margin: theme.spacing(2),
  },
}));
