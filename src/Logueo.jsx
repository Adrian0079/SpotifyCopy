import React from 'react'
import {app } from './Fb'
import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'


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
    <Container sx={{border:"5px black solid", flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight:'100vh', minWidth: '100vw', padding: 0, margin: 0,
    backgroundColor:"#1a1a1a"
    }} >

        <Grid2 container height='100%' alignItems='center' border={0} md={12} sx={{height:'100%', borderRadius:3}} >
            
                <Grid2 md={12}>
                    
                
                    <Stack component="form" onSubmit={submitHandler}>

                        <Grid2 container md={12} border={0} direction='column' alignItems='center' sx={{
                                justifyContent: "center", width:'50vw', height:'80vh', backgroundColor:"black",
                                borderRadius:3
                                }}>
                            <Grid2 md={12} textAlign="center" mb={4} borderRadius={3}>
                            <Typography variant='h3' color="white" sx={{ fontSize:{xs:30, pers3:50}, }}>
                                { isRegister ? "Registrate en Spotify" : "Inicia sesión en Spotify" }
                            </Typography>
                            </Grid2> 
                
                            <Grid2 md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} mb={2} >   
                                <TextField
                                variant='outlined' 
                                label="E-mail" 
                                type='email' 
                                id='emailField' 
                                autoComplete='username'
                                InputLabelProps={{
                                    style: { color: '#1ed760' } 
                                  }}
                                inputProps={{
                                    sx: { color: 'white' }, // Cambiar el color del texto dentro del TextField
                                  }}
                                sx={{
                                  width:{xs:170, pers3:300},
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                      borderColor: 'white', // Cambiar el color del borde del TextField
                                    },
                                    '&:hover fieldset': {
                                      borderColor: 'gray', // Cambiar el color del borde al pasar el cursor sobre el TextField
                                    },
                                    '&.Mui-focused fieldset': {
                                      borderColor: 'lightgray', // Cambiar el color del borde cuando el TextField está enfocado (seleccionado)
                                    },
                                    '&.Mui-disabled fieldset': {
                                      borderColor: 'black', // Cambiar el color del borde cuando el TextField está deshabilitado
                                
                                    }},
                                    borderRadius:"20px",
                                }}
                                />
                            </Grid2>
                            <Grid2 md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <TextField 
                                variant='outlined' 
                                label="Password" 
                                type='password' 
                                id='passwordField' 
                                autoComplete='current-password'
                                InputLabelProps={{
                                    style: { color: '#1ed760' } 
                                  }}
                                inputProps={{
                                    sx: { color: 'white' }, // Cambiar el color del texto dentro del TextField
                                  }}
                                sx={{
                                  width:{xs:170, pers3:300},
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                      borderColor: 'white', // Cambiar el color del borde del TextField
                                    },
                                    '&:hover fieldset': {
                                      borderColor: 'gray', // Cambiar el color del borde al pasar el cursor sobre el TextField
                                    },
                                    '&.Mui-focused fieldset': {
                                      borderColor: 'lightgray', // Cambiar el color del borde cuando el TextField está enfocado (seleccionado)
                                    },
                                    '&.Mui-disabled fieldset': {
                                      borderColor: 'black', // Cambiar el color del borde cuando el TextField está deshabilitado
                                
                                    }},
                                    borderRadius:"20px",
                                }}
                                />
                            </Grid2>
                            <Grid2 md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button type='submit'
                                 sx={{
                                    width:{xs:110 , pers3:200},
                                    mt:4,
                                    color:"white",
                                    backgroundColor:"#1ed760", 
                                    height:"52px", 
                                    borderRadius:"19px", 
                                 '&:hover': { backgroundColor: '#1ef770' },
                                 }}
                                >{ isRegister ? "Registrate" : "Iniciar sesion" }</Button>
                            </Grid2> 
                            <Grid2 md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button onClick={()=>setRegister(!isRegister)}  sx={{
                                    width:{xs:170 , pers3:300},
                                    mt:2,
                                    color:"white",
                                    backgroundColor:"#1ed760", 
                                    height:"52px", 
                                    borderRadius:"19px", 
                            '&:hover': { backgroundColor: '#1ef770' },
                            }}>
                                    { isRegister 
                                    ? "¿Ya tienes cuenta? ¡Inicia sesión!" 
                                    : "¿No tienes cuenta? Registrate gratis" }
                                </Button>
                            </Grid2>
                    
                        </Grid2>{/*Container 2*/}
                    
                    </Stack>
                

                
                    
                </Grid2>
            
        </Grid2> {/*Container 1*/}
        
        
        
    </Container>
  )
}

export default Logueo