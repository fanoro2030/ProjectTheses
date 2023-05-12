import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PageBody from '../../../components/common/PageBody';
import PageHeader from '../../../components/common/PageHeader';
import { useStyles } from './presentation.styles';
const Presentation = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageHeader title='Home' />
      <PageBody>
        <div className={classes.content_body}>
          <Typography variant='h5'>Home</Typography>
        </div>
      </PageBody>
    </Box>
  );
};

export default Presentation;
