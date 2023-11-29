import { Box, Button, IconButton, ListItemButton, ListItemText, Stack, TextField, Typography, Grid } from '@mui/material'
import React, { useState } from 'react'
import spi from '../../assets/spi.png'
import { AddCircle, Bookmarks, Delete, Search } from '@mui/icons-material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import searchIcon from '../../assets/search.png'

const SideBar = () => {

    // ============
   const [cancion, setCancion] = useState("");
   const [canciones, setCanciones] = useState([]);

    const handleSearch =(e)=>{
    e.preventDefault(); //Para que no se nos recargue la pagina a la hora de buscar

    if(cancion.trim()==''){
      alert('Ingresa algo bro')
      return 
    }
    console.log(cancion)
    setCancion('')
    getSong(cancion)
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f0706058c0mshfb2420b72a1b1afp121a79jsn115d607be525',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  async function getSong (cancion){
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=5&numberOfTopResults=5`
      let data = await fetch(url, options)
      let res = await data.json();
      setCanciones(res.tracks.items);
    } catch (error) {
      console.log(`tienes un error: ${error}`)
    }
    
    
    console.log(cancion)
  }
    // ============

   

    const styles = {
        hero: (theme) => ({
            
            [theme.breakpoints.up('lg')]: {
               
            },
        }),}

  return (

    <Stack sx={{
        width:"100%",
        height: "100vh",
        border: "0px black solid",
        display:{xs:"none", sm:"none", md:"block" }
    }}>

        <Grid2 container border={0} rowSpacing={4} bgcolor="black">
                <Grid2 md={12} border={0} bgcolor="#121212">
                    <Box component="img" src={spi} width="100%"/>
                </Grid2>
                <Grid2 xs={12} border={0} position="relative" bgcolor="#121212">
                    <ListItemButton component="a" href="#simple-list" sx={{backgroundColor:"#121212"}}>
                    <Typography variant="body1" color="white">Inicio</Typography>
                    </ListItemButton>
                </Grid2 >

                <Grid2 md={12} border={0} width="40vw" alignItems="center" justifyContent="center" bgcolor="#121212">
                    <Stack direction="row" spacing={1.5} component="form" onSubmit={handleSearch}>
                        
                            <Button variant='contained' startIcon={<Search/>} type='submit'
                            sx={{backgroundColor:"black", height:"52px", borderRadius:"19px", 
                            '&:hover': { backgroundColor: '#1ed760' },
                            }} 
                            >
                            <Typography variant="body1" color="white">Buscar</Typography>
                            </Button>
                            <TextField  
                            inputProps={{
                                sx: { color: 'white' }, // Cambiar el color del texto dentro del TextField
                              }}
                            sx={{width:260,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'green', // Cambiar el color del borde del TextField
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
                                

                            }} type='text'
                            onChange={e=>setCancion(e.target.value)}
                            value={cancion} id=''
                            />
                        
                    </Stack>
                    {canciones.map((cancion, index) =>(
                    <>
                        <Box key={index} border={2}> 
                            {/* <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt=''/> */}
                            <Typography color="white">{cancion.data.name}</Typography>
                            <a href={cancion.data.uri}><Button sx={{color:"#1ed760"}}>Play song</Button></a>
                        </Box>
                    </>
                        ))}
                    
                    
                </Grid2>
            



                <Grid2 xs={11} pers1={6}  border={0} bgcolor="#121212">
                    <Button variant='contained' startIcon={<Bookmarks/>} sx={{backgroundColor:"black", height:"52px", borderRadius:"19px", 
                            '&:hover': { backgroundColor: '#1ed760' },
                    }}
                    >
                            Tu biblioteca
                    </Button>
                </Grid2>
                <Grid2 xs={1} pers1={6} border={0} bgcolor="#121212">
                    <Stack justifyContent="flex-end" border={0} height="100%" width="100%" direction="row">
                        <IconButton aria-label="delete" sx={{width:"35px", height:"35px", border:"10px",}}>
                                <AddCircle fontSize='inherit' sx={{color:"white"}}/>
                        </IconButton>
                    </Stack>
                </Grid2>
                    
                
                <Grid2 md={12} bgcolor="#121212">
                    <Box sx={{borderRadius:"10px", border:"4px black solid"}} pl={2} pt={1} pb={1} 
                    bgcolor="#242424">
                        <Typography 
                        color="white"
                        fontWeight="bold"
                        >
                            Crea tu primera playlist
                        </Typography>
                        <Typography color="white">¡Es muy fácil! Te vamos a ayudar</Typography>
                        <Button
                        sx={{backgroundColor:"white", height:"34px", borderRadius:"19px", color:"black",
                        '&:hover': { backgroundColor: 'white' },
                        }}
                        >Crear playslist</Button>
                    </Box>
                </Grid2>
                <Grid2 md={12} bgcolor="#121212">
                    <Box sx={{borderRadius:"10px", border:"4px black solid"}} pl={2} pt={1} pb={1}
                    bgcolor="#242424">
                        <Typography 
                        color="white" fontWeight="bold"
                        >Busquemos algunos podcast para seguir
                        </Typography>
                        <Typography color="white">Te mantendremos al tanto de los nuevos episodios</Typography>
                        <Button
                        sx={{backgroundColor:"white", height:"34px", borderRadius:"19px", color:"black",
                        '&:hover': { backgroundColor: 'white' },
                        }}
                        >Exporar podcast</Button>
                    </Box>
                </Grid2>
               

                

        </Grid2>

        <Box width="100%" border={0} borderColor="green" height="14.5vh" bgcolor="black">
        </Box>                  
        
    
    </Stack>
  )
}

export default SideBar