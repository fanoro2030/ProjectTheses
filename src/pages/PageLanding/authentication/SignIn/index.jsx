import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import PageBody from '../../../../components/common/PageBody';
import PageHeader from '../../../../components/common/PageHeader';
import { Redirect } from 'react-router-dom';
import { Content } from '../../../../components/common/Content';
import Controls from '../../../../components/controls/Controls';
import { useStyles } from './signin.styles';
import { useForm, Form } from '../../../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { authAsync, auth } from '../../../../actions/auth';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { auth: authRename } = useSelector((state) => state);
  const { token } = authRename;

  const { values, errors, handleInputChange, validate, resetForm } = useForm(
    {
      email: '',
      password: '',
    },
    'auth' // Establece currentForm como 'auth'
  );
  const handlerSubmit = (e) => {
    e.preventDefault();
    const errors = validate(values);
    if (!errors) {
      dispatch(authAsync(values.email, values.password, resetForm));
    }
  };

  return (
    <Box>
      <PageHeader title='Singinn' />

      <PageBody>
        <Content className={classes.content_body}>
          <Form onSubmit={handlerSubmit}>
            <Grid container>
              <Grid
                item
                xs={6}
              >
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
                <Controls.Button
                  text='Iniciar Sesión'
                  variant='outlined'
                  type='submit'
                  color='orange'
                  hover='#D4AC0D'
                />
              </Grid>
            </Grid>
          </Form>
        </Content>
      </PageBody>
    </Box>
  );
};

export default SignIn;
