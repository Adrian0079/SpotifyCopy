import React from 'react'
import {appf } from './Fb'

const Logueo = () => {

    const [isRegister, setRegister] = React.useState(false)

    const submitHandler =(e)=>{
        e.preventDefault();
        const correo = e.target.emailField.value;
        const password = e.target.passwordField.value;
        console.log(correo, password);
    }

  return (
    <div>
        <h1>{ isRegister ? "Registrate" : "Iniciar sesion" }</h1>
        <form onSubmit={submitHandler}>
            <input type='email' id='emailField' autoComplete='username'/>
            <input type='password' id='passwordField' autoComplete='current-password'/>
            <button type='submit'>{ isRegister ? "Registrate" : "Iniciar sesion" }</button>
        </form>
        <button onClick={()=>setRegister(!isRegister)}>
            { isRegister 
            ? "¿Ya tienes cuenta? ¡Inicia sesión!" 
            : "¿No tienes cuenta? Registrate gratis" }
        </button>
    </div>
  )
}

export default Logueo