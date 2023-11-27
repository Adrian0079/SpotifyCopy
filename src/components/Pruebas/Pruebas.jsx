import { Search } from '@mui/icons-material'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Pruebas = () => {

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
      let url = `https://spotify23.p.rapidapi.com/search/?q=${cancion}&type=multi&offset=0&limit=10&numberOfTopResults=5`
      let data = await fetch(url, options)
      let res = await data.json();
      setCanciones(res.tracks.items);
    } catch (error) {
      console.log(`tienes un error: ${error}`)
    }
    
    
    console.log(cancion)
  }

  return (
    <Box>
      <h1>Spotify APP==============</h1>
      <form onSubmit={handleSearch }>
        <TextField
          type='text'
          value={cancion}
          id=""
          label="Search music"
          onChange={e=>setCancion(e.target.value)}
        />
        <Button type='submit'>Search</Button>
      </form>
      {canciones.map((cancion, index) =>(
        <>
          <Box key={index} border={2}> 
            <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt=''/>
            <h2>{cancion.data.name}</h2>
            <a href={cancion.data.uri}><Button>Play song</Button></a>
          </Box>
        </>
      ))}
    </Box>
  )
  
}

export default Pruebas