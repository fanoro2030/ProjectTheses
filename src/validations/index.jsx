import * as yup from 'yup';

export const credentialsSchema = yup.object().shape({
  email: yup
    .string()
    .email('Correo electrónico no válido')
    .matches(/@gmail\.com$/, 'El correo electrónico debe ser una cuenta de Gmail')
    .required('El email es obligatorio'),
  password: yup.string().required('La contraseña es obligatoria'),
});
