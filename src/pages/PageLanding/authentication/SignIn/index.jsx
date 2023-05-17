import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import PageBody from '../../../../components/common/PageBody';
import PageHeader from '../../../../components/common/PageHeader';
import Controls from '../../../../components/controls/Controls';
import { useStyles } from './signin.styles';
import { useDispatch } from 'react-redux';
import { authAsync } from '../../../../actions/auth';
import { Content } from '../../../../components/common/Content';
const SignIn = () => {
  const classes = useStyles();
  //login state
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(authAsync(email, password));
  };
  return (
    <Box>
      <PageHeader title='Singinn' />
      <PageBody>
        <Content className={classes.content_body}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Controls.Button
            text='Iniciar Sesión'
            variant='outlined'
            type='submit'
            color='orange'
            hover='#D4AC0D'
            onClick={handleLogin}
          />
        </Content>
      </PageBody>
    </Box>
  );
};

export default SignIn;
