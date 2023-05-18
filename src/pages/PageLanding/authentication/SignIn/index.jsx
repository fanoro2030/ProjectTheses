import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PageBody from '../../../../components/common/PageBody';
import PageHeader from '../../../../components/common/PageHeader';
import { Content } from '../../../../components/common/Content';
import Controls from '../../../../components/controls/Controls';
import { useStyles } from './signin.styles';
import { useForm, Form } from '../../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { authAsync } from '../../../../actions/auth';

const initialFValues = {
  email: '',
  password: '',
};

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useSelector((state) => state);
  const { token, error } = auth;
  const { handleInputChange, values } = useForm(initialFValues);

  useEffect(() => {
    if (token) {
      history.push('/major');
    }
  }, [token, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authAsync(values.email, values.password));
  };

  return (
    <Box>
      <PageHeader title='SignIn' />
      <PageBody>
        <Content className={classes.content_body}>
          <Form onSubmit={handleSubmit}>
            {error && <span className={classes.error}>{error}</span>}

            <Controls.Input
              name='email'
              label='Email'
              type='email'
              value={values.email}
              onChange={handleInputChange}
            />

            <Controls.Input
              type='password'
              name='password'
              label='Password'
              value={values.password}
              onChange={handleInputChange}
            />
            <Controls.Button
              text='Iniciar Sesión'
              type='submit'
              variant='outlined'
              color='orange'
              hover='#D4AC0D'
            />
          </Form>
        </Content>
      </PageBody>
    </Box>
  );
};

export default SignIn;
