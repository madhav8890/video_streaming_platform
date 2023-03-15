// import React, { useState } from 'react'
// import { useEffect } from 'react'

// const API = "https://jsonplaceholder.typicode.com/users";

// function TestApi() {
//     const [user, setUser ] = useState([])

//     const fatchUsers = async(url)=>{
//         try {
//             const res =  await fetch(url);
//             const data = await res.json();
//             console.log(data);
//             if(data.length > 0){
//                 setUser(data)
//             }
//         } catch (e) {
//             console.error(e)
//         }
//     }

//     useEffect(()=>{
//         fatchUsers(API);
//     }, [])
//   return (
//     <div>
//             {user.map((data)=>{
//                 return(<>
                
             
//                     <p>{data.id}</p>
//                     <p>{data.name}</p>
//                     </>
//                 )
//             })}
//     </div>
//   )
// }

// export default TestApi

import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TestApi() {
    const [data ,setData] = useState([])

useEffect(()=>{
    axios
    .get("https://cipherschool-backend-7j25.onrender.com/api/v1/allvideos")
    .then((res) => setData(res.data))
},[])
  return (
    <div style={{textAlign:'center', border:'2px solid black' , padding:'10px', margin:'10px'}}>
     {
        data.map((item)=>{
            return <div key={item.id} style={{border:'2px solid black', padding:'10px', margin:'10px'}}>
               <h1>{item.title}</h1>
               <p>{item.video}</p>
            </div>
        })
        }
    </div>
  )
}

export default TestApi