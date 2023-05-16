import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PageBody from '../../../../components/common/PageBody';
import PageHeader from '../../../../components/common/PageHeader';
import Controls from '../../../../components/controls/Controls';
import { useStyles } from './signin.styles';
const SignIn = () => {
  const classes = useStyles();
  return (
    <Box>
      <PageHeader title='Singinn' />
      <PageBody>
        <div className={classes.content_body}>
          <Controls.Button
            text='Iniciar Sesión'
            variant='outlined'
            type='submit'
            color='orange'
            hover='#D4AC0D'
            href='/major'
          />
        </div>
      </PageBody>
    </Box>
  );
};

export default SignIn;
