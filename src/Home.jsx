import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import MiniSideBar from './components/MiniSideBar'
import SideBar from './components/SideBar'
import Feed from './components/Feed'

const Home = () => {
  return (
    
    <Grid2 container width="100vw" height="100vh">
        <Grid2 xs={0.8} sm={0.8}  border={1} borderColor="blue" sx={{display:{xs:"block", sm:"block", md:"none"}}}>
          <MiniSideBar/>
        </Grid2>
        <Grid2  md={3}  border={1} borderColor="blue"
        sx={{display:{xs:"none", sm:"none", md:"block"}}}
        > 
          <SideBar/>
        </Grid2>
        <Grid2 xs={11.2} sm={11.2} md={9} border={1} borderColor="red">
          <Feed/>
        </Grid2>

        {/* Bienvenido sesion iniciada */}
    </Grid2>

    
    
  )
}

export default Home