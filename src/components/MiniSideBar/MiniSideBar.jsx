import { Box, IconButton, Stack } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import spotifyIcon from '../../assets/spotify.png'
import home from '../../assets/home.png'
import search from '../../assets/search.png'
import biblioteca from '../../assets/biblioteca.png'
import { AddCircle } from '@mui/icons-material'


const MiniSideBar = () => {

  return (
    <Grid2 container width="100%" height="100vh" xs={12} sm={12} 
    sx={{display:{xs:"block", sm:"block", md:"none"}}}
    bgcolor="black"
    >
        <Grid2 border={1} xs={12} sm={12} >
            <Box component="img" src={spotifyIcon} border={0} width="100%"/>
        </Grid2>
        <Grid2 border={1} xs={12} sm={12} bgcolor="black">
            <IconButton>
                <Box component="img" src={home} border={0} width="100%"/>
            </IconButton>
        </Grid2>
        <Grid2 border={1} xs={12} sm={12} bgcolor="black">
            <IconButton>
                    <Box component="img" src={search} border={0} width="100%"/>
            </IconButton>
        </Grid2>
        <Grid2 border={1} xs={12} sm={12} sx={{backgroundColor:"black"}} >
            <IconButton>
                <Box component="img" src={biblioteca} border={0} width="100%"/>
            </IconButton>
        </Grid2>


    </Grid2>
  )
}

export default MiniSideBar