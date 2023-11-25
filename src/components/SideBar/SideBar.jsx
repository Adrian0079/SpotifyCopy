import { Box, Button, IconButton, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import spi from '../../assets/spi.png'
import { Bookmarks, Delete } from '@mui/icons-material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

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
        border: "5px black solid"
        
    }}>

        <Grid2 container border={0} height="16vh" rowSpacing={2}>
                <Grid2 md={12} border={0} >
                    <Box component="img" src={spi} width="100%"/>
                </Grid2>
                <Grid2 xs={12} border={0} >
                    <ListItemButton component="a" href="#simple-list">
                    <Typography variant="body1" color="initial">Inicio</Typography>
                    </ListItemButton>
                </Grid2 >
                <Grid2 md={12} border={0} >
                    <ListItemButton component="a" href="#simple-list">
                    <Typography variant="body1" color="initial">Buscar</Typography>
                    </ListItemButton>
                </Grid2>
        
            

        

            
                <Grid2 xs={12} pers1={6}  border={1}>
                    <Button variant='contained' startIcon={<Bookmarks/>}>
                            Tu biblioteca
                    </Button>
                </Grid2>
                <Grid2 md={6} border={1}>
                    <Stack justifyContent="flex-end" border={2} height="100%" width="100%" direction="row">
                        <IconButton aria-label="delete" sx={{width:"35px", height:"35px", border:"10px",}}>
                                <Delete fontSize='inherit'/>
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