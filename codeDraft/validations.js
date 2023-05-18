import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PageBody from '../../../../components/common/PageBody';
import PageHeader from '../../../../components/common/PageHeader';
import { Content } from '../../../../components/common/Content';
import Controls from '../../../../components/controls/Controls';
import { useStyles } from './signin.styles';
import { useForm } from '../../../../hooks/useForm';
import { authAsync, authError } from '../../../../actions/auth';
import { useSelector, useDispatch } from 'react-redux';
const initialFValues = {
  email: '',
  password: '',
};
const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth: authRename } = useSelector((state) => state);
  const { token, error } = authRename;
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid.';
    if ('password' in fieldValues)
      temp.password =
        fieldValues.password.length > 9 ? '' : 'Mínimo 8 números requeridos.';

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === '');
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(authAsync(values, resetForm));
    }
  };
  useEffect(() => {
    if (token) {
      setTimeout(() => {
        history.push('/major');
      }, 1600);
    }
  }, [token, history]);

  return (
    <Box>
      <PageHeader title='Sign In' />

      <PageBody>
        <Content className={classes.content_body}>
          <form onSubmit={handleSubmit}>
            <Controls.Input
              name='email'
              label='Email'
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />

            <Controls.Input
              name='password'
              label='Password'
              value={values.password}
              onChange={handleInputChange}
              error={errors.password}
            />

            <Controls.Button
              text='Iniciar Sesión'
              type='submit'
              variant='outlined'
              color='orange'
              hover='#D4AC0D'
            />
            {error && <span className='error'>{error}</span>}
          </form>
        </Content>
      </PageBody>
    </Box>
  );
};

export default SignIn;
