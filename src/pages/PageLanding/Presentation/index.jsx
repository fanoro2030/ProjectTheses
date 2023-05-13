import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PageBody from '../../../components/common/PageBody';
import PageHeader from '../../../components/common/PageHeader';
import { useStyles } from './presentation.styles';
const Presentation = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageHeader title='Presentation' />
      <PageBody>
        <div className={classes.content_body}>
          <Typography variant='h5'>Presentation</Typography>
        </div>
      </PageBody>
    </Box>
  );
};

export default Presentation;
