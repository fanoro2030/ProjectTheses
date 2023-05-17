import React, { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import PageBody from '../../../../components/common/PageBody';
import PageHeader from '../../../../components/common/PageHeader';
import { Content } from '../../../../components/common/Content';
import Controls from '../../../../components/controls/Controls';
import { useStyles } from './signin.styles';
import { useForm, Form } from '../../../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { authAsync, auth, authError } from '../../../../actions/auth';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { auth: authRename } = useSelector((state) => state);
  const { token, error } = authRename;

  const { values, errors, handleInputChange, validate, resetForm } = useForm({
    email: 'fanor@gmail.com',
    password: '',
  });
  const handlerSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    const errors = validate(values);
    console.log(errors);
    if (!errors) {
      dispatch(authAsync(values.email, values.password, resetForm));
      dispatch(authError(error.message || 'Credenciales inválidas'));
    }
  };
  useEffect(() => {
    if (token) {
      // Redireccionar al usuario después de iniciar sesión
      // Puedes reemplazar '/dashboard' con la ruta deseada
      return <Redirect to='/major' />;
    }
  }, [token]);

  return (
    <>
      <Box>
        <PageHeader title='Singinn' />

        <PageBody>
          <Content className={classes.content_body}>
            <Form onSubmit={handlerSubmit}>
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
              {error && <span className='error'>{error.payload}</span>}

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
    </>
  );
};

export default SignIn;
