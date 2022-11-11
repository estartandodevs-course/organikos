import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

export const BasicSchema = yup.object().shape({
  email: yup.string().email('Entre com um email válido').required('Required'),
  password: yup
    .string()
    .matches(passwordRules, {
      message: 'A senha deve ter, 8 digítos, ao menos 1 letra maiúscula, minúscula, número e caractere especial',
    })
    .required('Required'),
});
