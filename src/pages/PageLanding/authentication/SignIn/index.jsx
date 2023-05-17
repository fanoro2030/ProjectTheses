import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import PageBody from '../../../../components/common/PageBody';
import PageHeader from '../../../../components/common/PageHeader';
import { Content } from '../../../../components/common/Content';
import Controls from '../../../../components/controls/Controls';
import { useStyles } from './signin.styles';
import { useForm, Form } from '../../../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { authAsync, authError } from '../../../../actions/auth';

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { auth: authState } = useSelector((state) => state);
  const { token, error } = authState;

  const { values, errors, handleInputChange, validate, resetForm } = useForm(
    {
      email: '',
      password: '',
    }
    // 'auth' // Establece currentForm como 'auth'
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);

    if (validationErrors) {
      return;
    }

    dispatch(authAsync(values.email, values.password));
  };

  useEffect(() => {
    if (token) {
      // Redireccionar a la página deseada después de iniciar sesión
      // Por ejemplo:
      window.location.href = '/major';
    }
  }, [token]);

  return (
    <Box>
      <PageHeader title='Signin' />

      <PageBody>
        <Content className={classes.content_body}>
          <Form onSubmit={handleSubmit}>
            <input
              type='email'
              name='email'
              value={values.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className='error'>{errors.email}</span>}

            <input
              type='password'
              name='password'
              value={values.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className='error'>{errors.password}</span>
            )}

            {error && <span className='error'>{error}</span>}

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
