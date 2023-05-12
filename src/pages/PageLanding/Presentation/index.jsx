import React from 'react';
import { Box } from '@material-ui/core';
import PageBody from '../../../components/common/PageBody';
import PageHeader from '../../../components/common/PageHeader';
import { useStyles } from './presentation.styles';
const Presentation = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageHeader title='Home' />
      <PageBody>
        <Box className={classes.content_body}>
          <h1>Home</h1>
        </Box>
      </PageBody>
    </Box>
  );
};

export default Presentation;
