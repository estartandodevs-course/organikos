import { useFormik } from 'formik';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { BasicSchema } from '../../schemas';
import { Container, InputControl } from './styles';

export const FormLogin = ({ children }) => {
  const { signed, signin, error } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    actions.resetForm();
    signin(values.email);
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: BasicSchema,
    onSubmit,
  });

  useEffect(() => {
    if (signed) {
      navigate('/home');
    }
  }, [signed]);

  return (
    <Container onSubmit={handleSubmit}>
      <InputControl isValid={errors.email}>
        <label htmlFor="email">Email</label>
        <div>
          <img src="../assets/icons/icons-form/person.svg" alt="email" />
          <input type="email" placeholder="email@mail.com.br" id="email" value={values.email} onChange={handleChange} />
          {!errors.email && <img src="../assets/icons/icons-form/confirmation-form.svg" />}
        </div>
        {errors.email ? <span>{errors.email}</span> : <span></span>}
      </InputControl>
      <InputControl isValid={errors.password}>
        <label htmlFor="password">Senha</label>
        <div>
          <img src="../assets/icons/icons-form/padlock.svg" alt="senha" />
          <input type="password" id="password" placeholder="Senha" value={values.password} onChange={handleChange} />
          <img src="../assets/icons/icons-form/eye.svg" alt="ver senha" />
        </div>
        {errors.password ? <span>{errors.password}</span> : <span></span>}
      </InputControl>
      <span>{error}</span>
      {children}
    </Container>
  );
};
