import { validateEmail, validatePassword } from './authValidations';
import { validateName, validateApellido } from './signupValidations';

export const validations = {
  auth: (fieldValues) => {
    let errors = {};

    const emailError = validateEmail(fieldValues.email);
    if (emailError) {
      errors.email = emailError;
    }

    const passwordError = validatePassword(fieldValues.password);
    if (passwordError) {
      errors.password = passwordError;
    }

    return errors;
  },

  register: (fieldValues) => {
    let errors = {};
    const nameError = validateName(fieldValues.name);
    if (nameError) {
      errors.name = nameError;
    }
    const apellidoError = validateApellido(fieldValues.apellido);
    if (apellidoError) {
      errors.apellido = apellidoError;
    }

    const emailError = validateEmail(fieldValues.email);
    if (emailError) {
      errors.email = emailError;
    }

    const passwordError = validatePassword(fieldValues.password);
    if (passwordError) {
      errors.password = passwordError;
    }

    return errors;
  },
};
