import { Box, Button, Card, CardActions, CardContent, Divider, Grid, IconButton, InputBase, Link, List, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowL from '../../assets/arrowL.svg'
import ArrowR from '../../assets/arrowR.svg'
import music1 from '../../assets/music1.png'
import { Delete, Face, Facebook, Instagram, PlayArrow, PlayCircle, Twitter } from '@mui/icons-material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import {app} from "../../Fb"
import d_withF from '../../assets/d_withF.png'
import dinner_lounge from '../../assets/dinner_lounge.png'
import lofiC from '../../assets/lofiC.png'


const Feed = () => {

  const [isHovered, setIsHovered] = useState(false);


  // ---------------------

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
              <Button variant='contained' 
              sx={{
                
                width:{xs:110 , pers3:200},
                mt:4,
                color:"white",
                backgroundColor:"#1ed760", 
                height:"32px", 
                borderRadius:"25px", 
             '&:hover': { backgroundColor: '#1ef770' },
             }}
              onClick={closeSession}
              >Cerrar sesión</Button>
            </Stack>
          </Grid2>
        </Grid2>
     


        {/* // sx={{overflowX:"scroll"}} */}
      {/* S2-----------------------------------------------------------------*/} 
  
      
      
        <Grid container border={0} borderColor="red" md={12} ml={0} 
        spacing={4} justifyContent="center" alignItems="center"
        sx={{width:"100%"}} bgcolor="#1f1f1f"
        >

          <Grid item border={0} borderColor="green" >  {/*2*/}
            <Card elevation={7}
            sx={{border:"0px black dotted", width:"100%", backgroundColor:"#181818",
            position: 'relative', // Añadido para posicionar el botón
            '&:hover': {
              '& .btn-hover': {
                opacity: 1
              }
            }
            }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
              <CardContent sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
                }}> 
                <Box>
                  <Box 
                  border={0} 
                  component='img' 
                  src={music1} 
                  width={130} 
                  height={140} 
                  borderRadius={1}/>
                  <Typography variant='h6' color="white" width={100}>
                    lofi beats
                  </Typography>
                  <Typography variant='body1' color="white" width={120}>
                    chill beats, lofi vibes, 
                    new tracks every...
                  </Typography>
                      <CardActions sx={{
                        padding: 0,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        opacity: isHovered ? 1 : 0, // Mostrar el botón solo al pasar el cursor sobre la Card
                        transition: 'opacity 0.3s ease-in-out' // Agregar transición para suavizar la aparición/desaparición
                      }}
                      className="btn-hover"
                      >
                        <IconButton sx={{
                          border:0,
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '20px',
                          textDecorationLine: 'underline',
                          textTransform: 'capitalize',
                          color:"#1ed760",
                          width:"40px",
                          height:"40px"
                        }}>
                            <PlayCircle sx={{fontSize:"40px"}}/>
                    
                      </IconButton>
                    </CardActions>



                </Box>
              </CardContent>
              
            </Card>
          </Grid>

          <Grid item border={0} borderColor="green" >  {/*2*/}
            <Card elevation={7}
            sx={{border:"0px black dotted", width:"100%", backgroundColor:"#181818",
            position: 'relative', // Añadido para posicionar el botón
            '&:hover': {
              '& .btn-hover': {
                opacity: 1
              }
            }
            }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
              <CardContent sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
                }}> 
                <Box>
                  <Box 
                  border={0} 
                  component='img' 
                  src={lofiC} 
                  width={130} 
                  height={140} 
                  borderRadius={1}/>
                  <Typography variant='h6' color="white" width={129} fontSize={14}>
                    A Merry Lofi Christmas
                  </Typography>
                  <Typography variant='body1' color="white" width={120}>
                    christmas beats...
                  </Typography>
                      <CardActions sx={{
                        padding: 0,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        opacity: isHovered ? 1 : 0, // Mostrar el botón solo al pasar el cursor sobre la Card
                        transition: 'opacity 0.3s ease-in-out' // Agregar transición para suavizar la aparición/desaparición
                      }}
                      className="btn-hover"
                      >
                        <IconButton sx={{
                          border:0,
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '20px',
                          textDecorationLine: 'underline',
                          textTransform: 'capitalize',
                          color:"#1ed760",
                          width:"40px",
                          height:"40px"
                        }}>
                            <PlayCircle sx={{fontSize:"40px"}}/>
                    
                      </IconButton>
                    </CardActions>



                </Box>
              </CardContent>
              
            </Card>
          </Grid>
          <Grid item border={0} borderColor="green" >  {/*2*/}
            <Card elevation={7}
            sx={{border:"0px black dotted", width:"100%", backgroundColor:"#181818",
            position: 'relative', // Añadido para posicionar el botón
            '&:hover': {
              '& .btn-hover': {
                opacity: 1
              }
            }
            }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
              <CardContent sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
                }}> 
                <Box>
                  <Box 
                  border={0} 
                  component='img' 
                  src={dinner_lounge} 
                  width={130} 
                  height={140} 
                  borderRadius={1}/>
                  <Typography variant='h6' color="white" width={129} fontSize={14}>
                    Dinner Lounge
                  </Typography>
                  <Typography variant='body1' color="white" width={120}>
                    lounge beats, lounge vibes 
                    new...
                  </Typography>
                      <CardActions sx={{
                        padding: 0,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        opacity: isHovered ? 1 : 0, // Mostrar el botón solo al pasar el cursor sobre la Card
                        transition: 'opacity 0.3s ease-in-out' // Agregar transición para suavizar la aparición/desaparición
                      }}
                      className="btn-hover"
                      >
                        <IconButton sx={{
                          border:0,
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '20px',
                          textDecorationLine: 'underline',
                          textTransform: 'capitalize',
                          color:"#1ed760",
                          width:"40px",
                          height:"40px"
                        }}>
                            <PlayCircle sx={{fontSize:"40px"}}/>
                    
                      </IconButton>
                    </CardActions>



                </Box>
              </CardContent>
              
            </Card>
          </Grid>

          <Grid item border={0} borderColor="green" >  {/*2*/}
            <Card elevation={7}
            sx={{border:"0px black dotted", width:"100%", backgroundColor:"#181818",
            position: 'relative', // Añadido para posicionar el botón
            '&:hover': {
              '& .btn-hover': {
                opacity: 1
              }
            }
            }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
              <CardContent sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
                }}> 
                <Box>
                  <Box 
                  border={0} 
                  component='img' 
                  src={d_withF} 
                  width={130} 
                  height={140} 
                  borderRadius={1}/>
                  <Typography variant='h6' color="white" fontSize={14} width={129} borderColor="green" border={0}>
                    Dinner with friends
                  </Typography>
                  <Typography variant='body1' color="white" width={120}>
                    dinner beats, dinner vibes, 
                    new tracks...
                  </Typography>
                      <CardActions sx={{
                        padding: 0,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        opacity: isHovered ? 1 : 0, // Mostrar el botón solo al pasar el cursor sobre la Card
                        transition: 'opacity 0.3s ease-in-out' // Agregar transición para suavizar la aparición/desaparición
                      }}
                      className="btn-hover"
                      >
                        <IconButton sx={{
                          border:0,
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '20px',
                          textDecorationLine: 'underline',
                          textTransform: 'capitalize',
                          color:"#1ed760",
                          width:"40px",
                          height:"40px"
                        }}>
                            <PlayCircle sx={{fontSize:"40px"}}/>
                    
                      </IconButton>
                    </CardActions>



                </Box>
              </CardContent>
              
            </Card>
          </Grid>

          



          
        </Grid>  {/*Container*/}

       



      


      {/* S3*=============================================*/}
      <Grid2 container bgcolor="#121212" 
        sx={{border:"0px pink solid"}} height="100%"  md={12}>
        
        <Grid2 md={2} border={0}  sx={{border:"0px pink solid"}}>
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
        
        <Grid2 md={2} border={0} sx={{border:"0px pink solid"}}>
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

        <Grid2 md={2} border={0} sx={{border:"0px pink solid"}}>
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
        
        <Grid2 pers2={6} pers4={1} border={0} borderColor="white" >
          <Stack  justifyContent="flex-end" alignItems="flex-end" pr={1.5}
          width="100%" border={0} borderColor="green"
          direction={{pers2:'row', md:'column'}}
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
      border={0} sx={{height:"20vh",}} md={12} alignItems="center">{/* S4*/}
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