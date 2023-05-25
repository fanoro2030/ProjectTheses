import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),

  },
  list: {
    display: 'flex',

    flexDirection: 'row',
    alignItems: 'right',
    padding: 0,
    '& > li': {
      marginRight: theme.spacing(10),
    },
  },
  listText: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#000',
    textDecoration: 'none',
    '&:hover': {
      color: '#40a9ff',
    },
  },
  subList: {
    backgroundColor: '#f5f5f5',
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
}));
