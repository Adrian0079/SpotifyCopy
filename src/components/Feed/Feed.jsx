import { Box, Button, Card, Divider, Grid, IconButton, InputBase, Link, List, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowL from '../../assets/arrowL.svg'
import ArrowR from '../../assets/arrowR.svg'
import music1 from '../../assets/music1.png'
import { Delete, Face, Facebook, Instagram, Twitter } from '@mui/icons-material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const Feed = () => {

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

    
        <Grid2 container md={12} sm={6}   border={0} direction="row" width="100%" >  {/* S1*/}
          <Grid2 border={1} md={6}>
            <IconButton>
              <img src={ArrowL}/>
            </IconButton>
            <IconButton>
              <img src={ArrowR}/>
            </IconButton>
          </Grid2>
          
          <Grid2 border={1} md={6}>
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button variant='outlined' sx={{borderRadius:"25px"}}>Registrate</Button>
              <Button variant='contained' sx={{borderRadius:"25px"}}>Iniciar sesión</Button>
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
      <Grid2 container
        sx={{border:"2px pink dashed"}} height="100%" md={12}>
        
        <Grid2 md={2} border={1}>
            <Box border={4}>
                <Typography variant='h5' sx={{}}>
                    Compañia
                </Typography>
                <List>
                    {compania.map((item, index) => {
                        return(
                            <List sx={{}} key={index}>
                                {item}
                            </List>
                        )
                    })}
                </List>
            </Box>
        </Grid2>
        
        <Grid2 md={2} border={1}>
            <Box border={1}>
                <Typography variant='h5' sx={{}} noWrap>
                    Comunidades
                </Typography>
                <List>
                    {comunidades.map((item, index) => {
                        return(
                            <List sx={{}} key={index}>
                                {item}
                            </List>
                        )
                    })}
                </List>
            </Box>
        </Grid2>

        <Grid2 md={2} border={1}>
            <Box>
                <Typography variant='h5' sx={{}}>
                    Enlaces útiles
                </Typography>
                <List>
                    {enlaces.map((item, index) => {
                        return(
                            <List sx={{}} key={index}>
                                {item} 
                            </List>
                        )
                    })}
                </List>
            </Box>
        </Grid2>
        
        <Grid2 md={6} pers2={1} border={1}>
          <Stack direction={{pers1:'column', md:'row'}} justifyContent="flex-end" pr={1.5}>
              <IconButton aria-label="delete">
                <Instagram />
              </IconButton>
              <IconButton aria-label="delete">
                <Twitter />
              </IconButton>
              <IconButton aria-label="delete">
                <Facebook />
              </IconButton>
          </Stack>
        </Grid2>
                      

      </Grid2>  {/*Grid container----*/}

    

    
            
     



      
      <Grid2 container border={0} sx={{height:"38.9vh",}} md={12} alignItems="center">{/* S4*/}
        <Grid2 border={0} md={12} sx={{ textAlign: 'center' }} >
          
            <Divider
              sx={{borderColor:"gray",
                width:"100%",
                               
                }}/>
         
        </Grid2>
        <Grid2 border={3} md={12} pl={2}>
          <Typography variant="body1" color="initial">© 2023 Spotify AB</Typography>
        </Grid2>              
        
        

        </Grid2>


      
    </Stack>
  )
}

export default Feed