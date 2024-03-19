import { object, string, ref } from 'yup'

export const registerSchema = object().shape({  // validamos los inputs con diferentes métodos y damos mensaje de error
  confirmPassword: string().required('Confirmación requerida').oneOf([ref('password')], 'Las contraseñas no coinciden'),
  password: string().required('La contraseña es requerida').min(8, 'Debe tener como mínimo 8 caracteres'),
  email: string().required('El email es requerido').email('No es un email válido')
})

export const loginSchema = object().shape({  // validamos los inputs con diferentes métodos y damos mensaje de error
  password: string().required('La contraseña es requerida'),
  email: string().required('El email es requerido').email('No es un email válido')
})