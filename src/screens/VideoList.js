
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function VideoList(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const [data ,setData] = useState([])

  // useEffect(()=>{
  //     axios
  //     .get("https://cipherschool-backend-7j25.onrender.com/api/v1/allvideos")
  //     .then((res) =>{ setData(res.data); console.log(res.data)})
  // },[])

  return (

    <div >
     
        
          
            <Link to={`/VideoPlayer/${props.video._id}`}   style={{ textDecoration:'none'}}>
   
         
            <Card sx={{ maxWidth: 345, margin:'10px'}} style={{width:'330px', height:'320px', margin:"10px"}}>
        
            <CardMedia
              component="img"
              height="194"
              
              image={props.video.thombnail}
              alt="Paella dish"
            />
          <h4 style={{marginLeft:'20px', marginTop:'5px', marginBottom:'0px'}}>{props.video.title}</h4>
                  <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={props.video.userName}
              subheader="September 14, 2016"
            />
      
          </Card>
       </Link>
      
   
    </div>

  );
}