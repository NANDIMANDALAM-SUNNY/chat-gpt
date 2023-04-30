import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { store } from "../App";

const ChatInput = () => {
  const {userChat,handleSubmit,setUserChat,isListening,conversionText,transcript, setIsListening,setTranscript,handleToggleListening} = useContext(store)
  const [open, setOpen] = React.useState(false);
 
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmit(event);
    }
  };
  
  useEffect(()=>{

  },[userChat])
  
  return (
    <>
    <div className="input-box">
    <div>
      <textarea
        value={userChat}  onChange={(e)=>setUserChat(e.target.value)}
        onKeyDown={handleKeyDown}
        className="textarea-input"
      />
       {
         isListening && <>
           <span style={{width:"10px "}} onClick={()=>setUserChat("")}><svg style={{width:"25px ",marginBottom:"10px"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
          </>
        }
    </div>
    <div>
      <div className="input-box-button" onClick={handleSubmit}>
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      </div>
    </div>
    <div>
    <div  className="input-box-button-mic" >
  

            <div>
              <div onClick={handleToggleListening}>{isListening ? 'Stop' : <>
                <svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
              </>}</div>
            </div>
              
      </div>
    </div>
    </div>

    
    </>
  );
};

export default ChatInput;