import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  page_body: {
    padding: theme.spacing(2),

    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  },
}));
