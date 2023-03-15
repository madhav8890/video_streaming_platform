import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Divider from '@mui/material/Divider';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function MediaControlCard() {
  const theme = useTheme();
  const [data ,setData] = useState([])

  useEffect(()=>{
      axios
      .get("https://cipherschool-backend-7j25.onrender.com/api/v1/allvideos")
      .then((res) =>{ setData(res.data); console.log(res.data)})
  },[])

  return (

    <>
     {
        data.map((item)=>(
    <Card sx={{ display: 'flex', margin:'5px', borderRadius:'5px', boxShadow:'0px 0px 1px 0px grey', marginBottom:'20px', paddingBottom:0 , padding:0, borderRadius:'10px' }}>
        <CardMedia
        style={{borderRadius:'10px', padding:'10px',borderRadius:'10px' ,marginTop:'5px', width:'50%', height:'70%'}}
          component="img"
          sx={{ width: 151 }}
          image={item.thombnail}
          alt="Live from space album cover"
        />
      <Box sx={{ display: 'flex', flexDirection: 'column' , padding:0 }}>
        <CardContent sx={{ paddingBottom:0  , marginBottom:0 }}>
          <Typography  variant="subtitle2" gutterBottom>
          {item.title}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {item.userName}
          </Typography>
        <Typography variant="caption" display="block" gutterBottom>
            14M View - 6 Hours ago
          </Typography>
        </CardContent>
      </Box>
      {/* <Divider variant="inset" component="li" /> */}
    </Card>
    ))}
    
    </>
  );
}