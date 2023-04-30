// // import React, { useState } from 'react';
// // const axios = require("axios");

// // const App = () => {
// //   const [isListening, setIsListening] = useState(false);
// //   const [transcript, setTranscript] = useState('');
// //   const [conversionText,setConversionText] = useState('')
// //   const handleToggleListening = () => {
// //     const recognition = new window.webkitSpeechRecognition();
// //     recognition.lang = 'te-IN';
// //     recognition.continuous = true;
// //     recognition.onresult = (event) => {
// //       const newTranscript = event.results[event.results.length - 1][0].transcript;
// //       setTranscript((prevTranscript) => prevTranscript + ' ' + newTranscript);
// //     };
// //     if (isListening) {
// //       recognition.stop();
// //       setIsListening(false);
// //     } else {
// //       recognition.start();
// //       setIsListening(true);
// //     }
// //   };
// // const getTranscript = (audio)=>{
// //   if(audio){
// //     const options = {
// //       method: 'GET',
// //       headers: {
// //         'X-RapidAPI-Key': '9c2bb9bb51msha6379474ab7af30p14325cjsnacc168d28352',
// //         'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
// //       }
// //     };
// //     fetch(`https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=te%7Cen&q=${audio}&mt=1&onlyprivate=0&de=a%40b.c`, options)
// //       .then(response => response.json())
// //       .then(response => {
// //         setConversionText(response.matches[0].translation)
// //         console.log(response.matches[0].translation)
// //         console.log(response.matches[1].translation)
      
// //       })
// //       .catch(err => console.error(err));
// // }
// // else{
// //   window.alert('Error')
// // }
// // }  
// //   return (
// //     <></>
// //     <div>
// //       <button onClick={handleToggleListening}>{isListening ? 'Stop' : 'Start'}</button>
// //       {
// //         isListening && <>
// //       <button onClick={()=>setTranscript("")} >reset</button>
// //         </>
// //       }
// //       <p>{transcript}</p>
// //     <p>{conversionText && conversionText}</p>
// //     <button onClick={()=>getTranscript(transcript)}>Translate</button>

// //     </div>
// //   );
// // };

// // export default App;

import { createContext, useEffect, useRef, useState } from "react";
import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import axios from "axios";
import ChatBot from "./components/ChatBot";


export const store = createContext()

function App() {
 
 









  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [conversionText,setConversionText] = useState('')
  const [selectedOption, setSelectedOption] = useState('te-IN');
  const getTranscript = (audio)=>{
    if(audio){
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '9c2bb9bb51msha6379474ab7af30p14325cjsnacc168d28352',
          'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
        }
      };
      fetch(`https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=te%7Cen&q=${audio}&mt=1&onlyprivate=0&de=a%40b.c`, options)
        .then(response => response.json())
        .then(response => {
          setUserChat(response.matches[0].translation)
        })
        .catch(err => console.error(err));
  }
  else{
    window.alert('Error')
  }
  } 
  const handleToggleListening = () => {
    // console.log(selectedOption.value)
    setUserChat("")
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = `${selectedOption.value}`;
    recognition.continuous = true;
    recognition.onresult = (event) => {
      // const newTranscript = ;
      setTranscript(event.results[event.results.length - 1][0].transcript);
    };
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    setUserChat("")
      console.log(userChat)
      setUserChat(transcript)
    } else {
      recognition.start();
      setUserChat("")
      setIsListening(true);
    }
  };



 
  const [userChat, setUserChat] = useState("");
  const [aiChat,setAiChat] = useState("");
  const [chat,setChat] = useState([]);
 const userObj = {
  message:userChat,
  role:"human"
 }

  const handleSubmit =async (e)=>{
    try {
     
      setUserChat("")
      e.preventDefault();
      setChat([...chat,userObj]);
      const {data} =await axios.post(`https://chatgpt-jogu.onrender.com/chat`,{
        userChat
      })
      
      console.log(userChat)
      setChat([...chat,userObj,{message:data.message,role:"ai"}])
    } catch (error) {
      console.log(error); 
    }
   
  }

  useEffect(()=>{
   
  },[])
  return (
    <>
  
     
      
  


      <store.Provider  value={{userChat, setUserChat,transcript, setTranscript,aiChat,setAiChat,conversionText,setConversionText,chat,setChat,handleSubmit,selectedOption, setSelectedOption,handleToggleListening,setTranscript,isListening, setIsListening}} >

      <div class="main">
          <div class="sidebar">
            <Sidebar />
          </div>
          <div class="main-content">
          {
            chat.length ==0 &&  <ChatBot />
          }
              <Main />
          </div>
      </div>
      </store.Provider>
 
   
    </>
  );
}

export default App;

// import React, { useRef } from 'react'
// import * as tf from '@tensorflow/tfjs'
// import * as facemesh from '@tensorflow-models/facemesh'
// import Webcam from 'react-webcam'

// const App = () => {

// const webcamref = useRef(null)
// const canvasref = useRef(null)

// // load facemesh
// const runFacemesh = async ()=>{
//   const net = await facemesh.load({
//     inputResolution:{width:640,height:480},scale:0.8
//   })
//   setInterval(()=>{
//     detect(net)
//   },100)
// }


// const detect = async (net)=>{
//   if(!typeof webcamref.current !== 'undefined' 
//     &&  webcamref.current !==null 
//     &&  webcamref.current.video.readyState ===4
//   ){
//     const video = webcamref.current.video
//     const videoWidth = webcamref.current.video.videoWidth
//     const videoHeight = webcamref.current.video.videoHeight

//     webcamref.current.width = videoWidth
//     webcamref.current.height = videoHeight

//     const face = await net.estimatefaces(video)
//     console.log(face)
//   }
// }

// runFacemesh()
//   return (
//     <>
//   <Webcam  ref={webcamref}
//   style={{position:"absolute",
//   marginLeft:"auto",
//   marginRig:"auto",
//   left:0,
//   right:0,
//   textAlign:"center",	
//   zIndex:9,
//   width:640,
//   height:480
  
  
//   }}
//    />

//    <canvas ref={canvasref} style={{
//     position:"absolute",
//   marginLeft:"auto",
//   marginRig:"auto",
//   left:0,
//   right:0,
//   textAlign:"center",	
//   zIndex:9,
//   width:640,
//   height:480
//    }} />
//     </>
//   )
// }

// export default App

// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load posenet DONE
// 6. Detect function DONE
// 7. Drawing utilities from tensorflow DONE
// 8. Draw functions DONE

// Face Mesh - https://github.com/tensorflow/tfjs-models/tree/master/facemesh

// import React, { useRef, useEffect } from "react";
// import "./App.css";
// import * as tf from "@tensorflow/tfjs";
// // OLD MODEL
// //import * as facemesh from "@tensorflow-models/facemesh";

// // NEW MODEL
// import * as facemesh from "@tensorflow-models/face-landmarks-detection";
// import Webcam from "react-webcam";
// import { drawMesh } from "./utilities";

// function App() {
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);

//   //  Load posenet
//   const runFacemesh = async () => {
//     // OLD MODEL
//     // const net = await facemesh.load({
//     //   inputResolution: { width: 640, height: 480 },
//     //   scale: 0.8,
//     // });
//     // NEW MODEL
//     const net = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
//     setInterval(() => {
//       detect(net);
//     }, 10);
//   };

//   const detect = async (net) => {
//     if (
//       typeof webcamRef.current !== "undefined" &&
//       webcamRef.current !== null &&
//       webcamRef.current.video.readyState === 4
//     ) {
//       // Get Video Properties
//       const video = webcamRef.current.video;
//       const videoWidth = webcamRef.current.video.videoWidth;
//       const videoHeight = webcamRef.current.video.videoHeight;

//       // Set video width
//       webcamRef.current.video.width = videoWidth;
//       webcamRef.current.video.height = videoHeight;

//       // Set canvas width
//       canvasRef.current.width = videoWidth;
//       canvasRef.current.height = videoHeight;

//       // Make Detections
//       // OLD MODEL
//       //       const face = await net.estimateFaces(video);
//       // NEW MODEL
//       const face = await net.estimateFaces({input:video});
//       console.log(face);

//       // Get canvas context
//       const ctx = canvasRef.current.getContext("2d");
//       requestAnimationFrame(()=>{drawMesh(face, ctx)});
//     }
//   };

//   useEffect(()=>{runFacemesh()}, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Webcam
//           ref={webcamRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />

//         <canvas
//           ref={canvasRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />
//       </header>
//     </div>
//   );
// }

// export default App;