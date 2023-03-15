import React from 'react'
import { BrowserRouter, Routes,Route , Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import VideoList from './VideoList';
import SideDrower from "./SideDrower"
import axios from 'axios'
import { useEffect, useState } from 'react';

function Main() {
  const [data ,setData] = useState([])

  useEffect(()=>{
      axios
      .get("https://cipherschool-backend-7j25.onrender.com/api/v1/allvideos")
      .then((res) =>{ setData(res.data); console.log(res.data)})
  },[])

  return (
    <div style={{ marginLeft:'5rem'}}>
      <SideDrower/>

      <div style={{display:'flex' , flexDirection:'row', flexWrap:'wrap'}}>
         {
          data.map((item)=>(
              <VideoList video={item} />
   
          )
          )
         

         }
       </div>
    </div>
  )
}

export default Main