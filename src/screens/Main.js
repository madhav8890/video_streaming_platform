import React from 'react'
import { BrowserRouter, Routes,Route , Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import VideoList from './VideoList';
import SideDrower from "./SideDrower"


function Main() {
  return (
    <div style={{ marginLeft:'5rem'}}>
      <SideDrower/>
         
          <VideoList/>
          {/* <Link to="./VideoPlayer"  underline="none" style={{display:'flex' , flexDirection:'row', flexWrap:'wrap'}}>
   
          </Link> */}
       
    </div>
  )
}

export default Main