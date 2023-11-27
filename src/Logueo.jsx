import React from 'react'
import {app } from './Fb'


const Logueo = (props) => {

    const [isRegister, setRegister] = React.useState(false)

    const createUser =(correo, password)=>{
        app.auth().createUserWithEmailAndPassword(correo, password)
        .then((userFirebase)=>{
            console.log("usuario creado:", userFirebase);
            props.setUser(userFirebase)
        })
    }

    const startSession =(correo, password)=>{
        app.auth().signInWithEmailAndPassword(correo, password)
        .then((userFirebase)=>{
            console.log("Sesión iniciada", userFirebase);
            props.setUser(userFirebase)
        })
    }

    const submitHandler =(e)=>{
        e.preventDefault();
        const correo = e.target.emailField.value;
        const password = e.target.passwordField.value;
        
        if(isRegister){
            createUser(correo, password)
        }
        if(!isRegister){
            startSession(correo, password)
        }
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