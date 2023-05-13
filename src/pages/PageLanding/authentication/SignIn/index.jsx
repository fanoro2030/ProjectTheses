import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PageBody from '../../../../components/common/PageBody';
import PageHeader from '../../../../components/common/PageHeader';
import { useStyles } from './signin.styles';
const SignIn = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageHeader title='Singinn' />
      <PageBody>
        <div className={classes.content_body}>
          <Typography variant='h5'>Singin</Typography>
        </div>
      </PageBody>
    </Box>
  );
};

export default SignIn;
