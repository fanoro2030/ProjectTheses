import React from 'react';
//import { Content } from '../../Global';
import { Container } from '@material-ui/core';
import { useStyles } from './page_body.styles';
const PageBody = ({ children }) => {
  const classes = useStyles();
  return <Container className={classes.page_body}>{children}</Container>;
};

export default PageBody;
