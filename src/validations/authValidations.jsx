import validator from 'validator';
export const validateEmail = (email) => {
  if (!email) {
    return 'El email es obligatorio';
  }
  if (!validator.isEmail(email)) {
    return 'Correo electrónico no válido';
  }
  if (!validator.matches(email, /@gmail\.com$/)) {
    return 'El correo electrónico debe ser una cuenta de Gmail';
  }
  return '';
};

export const validatePassword = (password) => {
  if (!password) {
    return 'La contraseña es obligatoria';
  }
  if (password.length < 6) {
    return 'La contraseña debe tener al menos 6 caracteres';
  }
  return '';
};
