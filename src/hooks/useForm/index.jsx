import { useState } from 'react';
import { useStyles } from './form.styles';
import { validations } from '../../validations';
export const useForm = (initialValues, currentForm) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const validate = (fieldValues) => {
    const validationFunc = validations[currentForm];
    if (validationFunc) {
      const errors = validationFunc(fieldValues);
      setErrors(errors);
      return errors;
    }
    return undefined;
  };

  return {
    values,
    setValues,
    errors,
    handleInputChange,
    validate,
    resetForm,
  };
};

export const Form = ({ className, ...props }) => {
  const { root } = useStyles();
  const { children, ...other } = props;
  return (
    <form
      className={`${className} ${root}`}
      {...other}
    >
      {props.children}
    </form>
  );
};
