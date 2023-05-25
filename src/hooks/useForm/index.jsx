import { useState } from 'react';
import { useStyles } from './form.styles';

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

  return {
    values,
    setValues,
    errors,
    handleInputChange,
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
