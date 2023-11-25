import { useState } from 'react'

import './App.css'
import { Box, Container, Divider, Stack, ThemeProvider, Unstable_Grid2, createTheme } from '@mui/material'
import SideBar from './components/SideBar'
import Feed from './components/Feed/Feed'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'


function App() {
  // sx={{border: "8px black dotted", margin:0, padding:0, width:"100%",}}

  const theme = createTheme({
    breakpoints:{
      values:{
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        pers1: 1356,
        xl: 1536,
      },
    },
  })

  return (

    <ThemeProvider theme={theme}>
      <Grid2 container >
        <Grid2 md={3} border={1} borderColor="blue">
          <SideBar/>
        </Grid2>
        <Grid2 md={9} border={1} borderColor="red">
          <Feed/>
        </Grid2>
    </Grid2>
    </ThemeProvider>
  )
}

export default App
