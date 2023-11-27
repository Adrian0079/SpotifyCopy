import { Box, Button, Card, Divider, Grid, IconButton, InputBase, Link, List, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowL from '../../assets/arrowL.svg'
import ArrowR from '../../assets/arrowR.svg'
import music1 from '../../assets/music1.png'
import { Delete, Face, Facebook, Instagram, Twitter } from '@mui/icons-material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import {app} from "../../Fb"

const Feed = () => {

  const closeSession =()=>{
    app.auth().signOut();
  }

  const compania = [
    'Acerca de',
    'Empleo',
    'For the Record',
  ]

  const comunidades = [
    'Para artistas',
    'Desarrolladores',
    'Publicidad',
    'Inversionistas',
    'Proveedores'
  ]

  const enlaces = [
    'Ayuda',
    'App móvil gratis'
  ]

  return (
    <Stack border={3} sx={{width:"100%", height:"100%"}}>

    
        <Grid2 container md={12} sm={6}   border={0} direction="row" width="100%" bgcolor="#121212">  {/* S1*/}
          <Grid2 border={1} md={6}>
            <Stack direction="row" spacing={1}>
              <IconButton sx={{backgroundColor:"gray", height:"28px", width:"28px"}}>
                <img src={ArrowL}/>
              </IconButton>
              <IconButton sx={{backgroundColor:"gray", height:"28px", width:"28px"}}>
                <img src={ArrowR}/>
              </IconButton>
            </Stack>
          </Grid2>
          
          <Grid2 border={1} md={6}>
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button variant='outlined' sx={{borderRadius:"25px"}}>Registrate</Button>
              <Button variant='contained' sx={{borderRadius:"25px"}} 
              onClick={closeSession}
              >Cerrar sesión</Button>
            </Stack>
          </Grid2>
        </Grid2>
     


        {/* // sx={{overflowX:"scroll"}} */}
      {/* S2-----------------------------------------------------------------*/} 
     
        <Grid container border={3} borderColor="blue" md={12} 
        spacing={2} justifyContent="center" alignItems="center"
        sx={{ flexGrow: 1 }}
        
        >
          {/* <Grid2 md={12}>
            <Typography variant="h5" color="initial">Playlist de Spotify</Typography>
          </Grid2> */}
          
          

          <Grid item md={1.46} border={3} borderColor="green">  {/*2*/}
            <Card sx={{border:"2px black dotted", width:"150px", boxSizing: 'border-box',}}>
                  <Box component='img' src={music1} sx={{borderRadius:"5px", width:"100% "}}/>
                <Typography variant='h6'>
                  lofi beats
                </Typography>
                <Typography variant='body1'>
                  chill beats, lofi vibes, new tracks every...
                </Typography>
            </Card>
          </Grid>

          <Grid item md={1.46} border={3} borderColor="green">  {/*2*/}
            <Card sx={{border:"2px black dotted", width:"150px", boxSizing: 'border-box',}}>
                  <Box component='img' src={music1} sx={{borderRadius:"5px", width:"100% "}}/>
                <Typography variant='h6'>
                  lofi beats
                </Typography>
                <Typography variant='body1'>
                  chill beats, lofi vibes, new tracks every...
                </Typography>
            </Card>
          </Grid>

        </Grid>
      


      {/* S3*=============================================*/}
      <Grid2 container bgcolor="#121212"
        sx={{border:"0px pink dashed"}} height="100%" md={12}>
        
        <Grid2 md={2} border={0} >
            <Box border={0}>
                <Typography color="white" fontWeight="bold" variant='h6' sx={{}}>
                    Compañia
                </Typography>
                <List>
                    {compania.map((item, index) => {
                        return(
                            <List sx={{}} key={index}>
                              <Typography color="lightgray">
                                {item}
                              </Typography>
                                
                            </List>
                        )
                    })}
                </List>
            </Box>
        </Grid2>
        
        <Grid2 md={2} border={0}>
            <Box border={0}>
                <Typography color="white" fontWeight="bold" variant='h6' sx={{}} noWrap>
                    Comunidades
                </Typography>
                <List>
                    {comunidades.map((item, index) => {
                        return(
                            <List sx={{}} key={index}>
                              <Typography color="lightgray">
                                {item}
                              </Typography>
                                
                            </List>
                        )
                    })}
                </List>
            </Box>
        </Grid2>

        <Grid2 md={2} border={0}>
            <Box>
                <Typography color="white" fontWeight="bold" variant='h6' sx={{}}>
                    Enlaces útiles
                </Typography>
                <List>
                    {enlaces.map((item, index) => {
                        return(
                            <List sx={{}} key={index}>
                              <Typography color="white">
                                {item}
                              </Typography>
                                 
                            </List>
                        )
                    })}
                </List>
            </Box>
        </Grid2>
        
        <Grid2 md={6} pers2={1} border={1} borderColor="white">
          <Stack direction={{pers1:'column', md:'row'}} justifyContent="flex-end" pr={1.5}
          width="100%"
          >
              <IconButton aria-label="delete">
                <Instagram sx={{color:"lightgray"}}/>
              </IconButton>
              <IconButton aria-label="delete">
                <Twitter sx={{color:"lightgray"}}/>
              </IconButton>
              <IconButton aria-label="delete">
                <Facebook sx={{color:"lightgray"}}/>
              </IconButton>
          </Stack>
        </Grid2>
                      

      </Grid2>  {/*Grid container----*/}

    

    
            
     



      
      <Grid2 container bgcolor="#121212"
      border={0} sx={{height:"38.9vh",}} md={12} alignItems="center">{/* S4*/}
        <Grid2 border={0} md={12} sx={{ textAlign: 'center' }} >
          
            <Divider
              sx={{borderColor:"lightgray",
                width:"100%",
                               
                }}/>
         
        </Grid2>
        <Grid2 border={0} md={12} pl={2}>
          <Typography color="lightgray" variant="body1">© 2023 Spotify AB</Typography>
        </Grid2>              
        
        

        </Grid2>


      
    </Stack>
  )
}

export default Feed