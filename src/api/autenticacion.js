import cliente from './cliente'

export const login = credenciales =>{
    return cliente.post('auth/signup',credenciales)
}