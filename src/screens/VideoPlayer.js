import { height, margin } from "@mui/system";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton, ControlBar, ClosedCaptionButton  } from "video-react";
import CommentSection from "./CommentSection"
import RecommendVideos from "./RecommendVideos"
import { Backdrop } from "@mui/material";
import VideoBottomNevigation from "./VideoBottomNevigation"
import SideDrower from "./SideDrower"
import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function VideoPlayer() {

  const [data ,setData] = useState([])

  useEffect(()=>{
      axios
      .get("https://cipherschool-backend-7j25.onrender.com/api/v1/allvideos")
      .then((res) =>{ setData(res.data); console.log(res.data)})
  },[])

  
    return (
      <div>
        <SideDrower/>
        {
        data.map((item)=>(
        <div style={{marginLeft:'5rem'}} >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              border: "2px",
              // backgroundColor:'gray',
              justifyContent: "space-evenly",
              padding: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "2px ",
                width: "70%",
                // height: "1200px",
                margin: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  border: "2px ",
                  height: "90%",
                }}
              >
                <div style={{ width: "100%" }}>
                  {/* VideoPlayer */}
                  <Player style={{borderRadius:'10px' , backgroundColor:'none'}}
                    poster={item.thombnail}
                    src={item.video}
                  >
                    <BigPlayButton position="center" />
                    <ControlBar autoHide={false} className="my-class" >
                    <ClosedCaptionButton order={7} />
                    </ControlBar>
                  </Player>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  border: "1px ",
                  boxShadow:'20px',
                  borderRadius:'5px',
                  backgroundColor:'#FFFFFF',
                  '&::WebkitScrollbar': { width:"1px" },
                  scrollbarColor:"red"
                }}
              >
               <VideoBottomNevigation/> 
                {/* nevigation bottom */}
              </div>
              <div
                style={{
                  width: "100%",
                  border: "1px ",
                  boxShadow:'20px',
                  borderRadius:'5px',
                  backgroundColor:'#FFFFFF',
                  marginTop: "10px",
                  height: "600%",
                  // overflowY:'scroll',
                  // '&::WebkitScrollbar': { width:"1px" },
                  // scrollbarColor:"red"
                }}
              >
                <CommentSection />
                {/* comment */}
              </div>
            
            </div>
            <div
              style={{ width: "30%", border: "1px ",borderRadius:'10px', margin: "5px",   backdropFilter:'unset' }}
            >
              <RecommendVideos/>
           
            </div>
          </div>
        </div>
        ))

      }
      </div>
    );
  }



