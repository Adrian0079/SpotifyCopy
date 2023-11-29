import { useEffect, useState } from 'react'
import React from 'react'

import './App.css'
import { Box, Container, Divider, Stack, ThemeProvider, Unstable_Grid2, createTheme } from '@mui/material'
import SideBar from './components/SideBar'
import Feed from './components/Feed/Feed'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import MiniSideBar from './components/MiniSideBar'
import Pruebas from './components/Pruebas/Pruebas'

import {app} from "./Fb"
import Home from './Home'
import Logueo from './Logueo'


function App() {
  // sx={{border: "8px black dotted", margin:0, padding:0, width:"100%",}}

  const [user, setUser] = React.useState(null);

  useEffect (() => {
    app.auth().onAuthStateChanged((userFirebase)=>{
      console.log("Ya tienes tu sesión iniciada con: ", userFirebase);
      setUser(userFirebase);
    })
  }, [])
  

  const theme = createTheme({
    breakpoints:{
      values:{
        xs: 0,
        sm: 600,
        pers3: 620,
        pers4: 850,
        md: 900,
        lg: 1200,
        pers2: 1230,
        pers1: 1356,
        xl: 1536,
      },
    },
  })

  return (

   

    <ThemeProvider theme={theme}>
      <>{user ? <Home /> : <Logueo  setUser={setUser}/>}</>
  
  
   
    </ThemeProvider>
  )
}

export default App
