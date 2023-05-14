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
  root: {
    backgroundColor: 'red',
    border: `2px solid white`,
    borderRadius: theme.shape.borderRadius,
  },
  extended: {
    backgroundColor: 'green',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  selected: {
    backgroundColor: 'green',
    paddingRight: theme.spacing(-15),
    borderRadius: theme.shape.borderRadius,
  },
  content_grid: {
    display: 'flex',

    alignItems: 'right',
  },
  horizontalList: {
    display: 'flex',

    backgroundColor: theme.palette.background.transparent,
    border: `1px solid red`,
  },
}));
