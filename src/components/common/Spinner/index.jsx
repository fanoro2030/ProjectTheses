import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from './spinner.styles';

const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress
        thickness={4}
        size={100}
        color='primary'
      />
    </div>
  );
};

export default Spinner;
