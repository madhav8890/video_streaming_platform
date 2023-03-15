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
import {Link} from 'react-router-dom'

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
          <Link to={`/VideoPlayer/${item._id}`}  style={{display:'flex' , flexDirection:'row', flexWrap:'wrap', textDecoration:'none'}}>

    <Card sx={{ display: 'flex', margin:'5px', boxShadow:'0px 0px 1px 0px grey', paddingBottom:0 , padding:0, borderRadius:'10px' }}>
        <CardMedia
        style={{borderRadius:'10px' , width:'50%', height:'100%'}}
          component="img"
          sx={{ width: 151, height:"40px" }}
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
            View {item.views}K • {item?.time ? new Date(item?.time).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).replace(/ /g, ' '): ""}
          </Typography>
        </CardContent>
      </Box>
      {/* <Divider variant="inset" component="li" /> */}
    </Card>
    </Link>
    ))}
    
    </>
  );
}