import { Box, Button, IconButton, ListItemButton, ListItemText, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import spi from '../../assets/spi.png'
import { AddCircle, Bookmarks, Delete, Search } from '@mui/icons-material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import searchIcon from '../../assets/search.png'

const SideBar = () => {

    

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

        <Grid2 container border={5} rowSpacing={4}>
                <Grid2 md={12} border={1} >
                    <Box component="img" src={spi} width="100%"/>
                </Grid2>
                <Grid2 xs={12} border={1} >
                    <ListItemButton component="a" href="#simple-list">
                    <Typography variant="body1" color="initial">Inicio</Typography>
                    </ListItemButton>
                </Grid2 >
                <Grid2 md={12} border={1}>
                    <Stack direction="row" spacing={1.5} component="form">
                        
                            <Button variant='contained' startIcon={<Search/>} type='submit'>
                            <Typography variant="body1" color="initial">Buscar</Typography>
                            </Button>
                            <TextField sx={{width:260}}/>
                        
                    </Stack>
                    
                    
                </Grid2>
            
                <Grid2 xs={11} pers1={6}  border={1}>
                    <Button variant='contained' startIcon={<Bookmarks/>}>
                            Tu biblioteca
                    </Button>
                </Grid2>
                <Grid2 xs={1} pers1={6} border={1}>
                    <Stack justifyContent="flex-end" border={2} height="100%" width="100%" direction="row">
                        <IconButton aria-label="delete" sx={{width:"35px", height:"35px", border:"10px",}}>
                                <AddCircle fontSize='inherit'/>
                        </IconButton>
                    </Stack>
                </Grid2>
                    
                
                <Grid2 md={12}>
                    <Box sx={{borderRadius:"10px", border:"4px black solid"}} pl={2} pt={1} pb={1}>
                        <Typography>Crea tu primera playlist</Typography>
                        <Typography>¡Es muy fácil! Te vamos a ayudar</Typography>
                        <Button>Crear playslist</Button>
                    </Box>
                </Grid2>
                <Grid2 md={12}>
                    <Box sx={{borderRadius:"10px", border:"4px black solid"}} pl={2} pt={1} pb={1}>
                        <Typography>Crea tu primera playlist</Typography>
                        <Typography>¡Es muy fácil! Te vamos a ayudar</Typography>
                        <Button>Crear playslist</Button>
                    </Box>
                </Grid2>
               

                

        </Grid2>

        
    
    </Stack>
  )
}

export default SideBar