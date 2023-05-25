import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  content_body: {
    width: '50%',
    textAlign: 'center',
    flexDirection: 'column',

    margin: theme.spacing(2),
  },
  error: {
    color: 'red',
    onfocus: 'this.style.color = "red";',
  },
}));
