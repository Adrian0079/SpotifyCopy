import { useState } from 'react'

import './App.css'
import { Box, Container, Divider, Stack, ThemeProvider, Unstable_Grid2, createTheme } from '@mui/material'
import SideBar from './components/SideBar'
import Feed from './components/Feed/Feed'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import MiniSideBar from './components/MiniSideBar'


function App() {
  // sx={{border: "8px black dotted", margin:0, padding:0, width:"100%",}}

  const theme = createTheme({
    breakpoints:{
      values:{
        xs: 0,
        sm: 600,
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
      <Grid2 container width="100vw" height="100vh">
        <Grid2 xs={0.8} sm={0.8}  border={1} borderColor="blue" sx={{display:{xs:"block", sm:"block", md:"none"}}}>
          <MiniSideBar/>
        </Grid2>
        <Grid2  md={3}  border={1} borderColor="blue"
        sx={{display:{xs:"none", sm:"none", md:"block"}}}
        > {/* md=3 */}
          <SideBar/>
        </Grid2>
        <Grid2 xs={11.2} sm={11.2} md={9} border={1} borderColor="red">{/* md=9 */}
          <Feed/>
        </Grid2>
    </Grid2>
    </ThemeProvider>
  )
}

export default App
