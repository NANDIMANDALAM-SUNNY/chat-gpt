import React, { useContext } from 'react'
import { store } from '../App';

const ChatBot = () => {
  const {setUserChat} = useContext(store)
  const arr = [
    'Explain quantum computing in simple terms',
    'Remembers what user said earlier in the conversation',
    'May occasionally generate incorrect information',
    'Got any creative ideas for a 10 year old’s birthday?',
    'Allows user to provide follow-up corrections',
    'May occasionally produce harmful instructions or biased content',
    'How do I make an HTTP request in Javascript?',
    'Trained to decline inappropriate requests',
    'Limited knowledge of world and events after 2021'
  ]
  return (
    <>
   <div style={{paddingTop:"100px"}} >
    <h2 className='text-center white' style={{color:"white"}} >ChatGPT by Sunny</h2>
    <div className=''>
      <div className='bot-main'>
      <div className='text-center'  style={{color:"white", fontSize:"30px"}} >
      <svg stroke="white" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      <p style={{fontSize:"20px",paddingTop:"15px"}} >Examples</p>
      </div>
      <div className='text-center' style={{color:"white", fontSize:"30px"}} >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" aria-hidden="true" class="h-2 w-2" height="1em" width="1em"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
      <p style={{fontSize:"20px",paddingTop:"15px"}} >Capabilities</p>
      </div>
      <div className='text-center' style={{color:"white", fontSize:"30px"}} >
      <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <p style={{fontSize:"20px",paddingTop:"15px"}} >Limitations</p>
      </div>
      {
        arr.map((item)=>{
          return <>
            <div style={{cursor:"pointer"}} className='bot-main-example' onClick={()=>setUserChat(item)}  >{item}</div>
          </>
        })
      }
      </div>
    </div>
   </div>
    </>
  )
}

export default ChatBot