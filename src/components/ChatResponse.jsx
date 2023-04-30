// import React, { useEffect, useState } from 'react'

// const ChatResponse = ({response}) => {
//     const [message, setMessage] = useState("");
//   const [formattedMessage, setFormattedMessage] = useState("");
//   const [hasCode, setHasCode] = useState(false);
//   useEffect(() => {
   
//     let formattedMessage = response?.replace(/\n/g, "<br>");
//     setFormattedMessage(formattedMessage);
//     if (response.match(/```.*\n.*\n```/s)) {
//         setHasCode(true);
//       }

//     let i = 0;
//     let timer = setInterval(() => {
//       setMessage((prevMessage) => prevMessage + response.charAt(i));
//       i++;
//       if (i === response.length) {
//         clearInterval(timer);
//       }
//     }, 50);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//   return (
//     <>
//         {/* <p dangerouslySetInnerHTML={{ __html: `<pre>${message}</pre>` }} /> */}
//         {/* <p style={{ color: isCode ? "red" : "yellow" }} dangerouslySetInnerHTML={{ __html: formattedMessage }} /> */}
//         <div dangerouslySetInnerHTML={{ __html: `<pre>${hasCode ? '<p style="color: blue">' + formattedMessage + '</p>' : formattedMessage}</pre>` }} />
//     </>
//   )
// }

// export default ChatResponse

import React, { useEffect, useState } from 'react'

const ChatResponse = ({response}) => {
    const [message, setMessage] = useState("");
    const [formattedMessage, setFormattedMessage] = useState("");
  
    useEffect(() => {
    //   let newMessage = ",\n\nI am looking for a developer to create a custom website for my business.\n\nI have a very specific idea in mind for the website and would need someone who is able to create a custom website according to my specifications.\n\nPlease let me know if you are interested and I will provide more details.\n\nThank you,\n\nJohn";
      let formattedMessage = response.replace(/\n/g, "<br>");
      setFormattedMessage(formattedMessage);
  
      let i = 0;
      let timer = setInterval(() => {
        setMessage((prevMessage) => prevMessage + response.charAt(i));
        i++;
        if (i === response.length) {
          clearInterval(timer);
        }
      }, 50);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div dangerouslySetInnerHTML={{ __html: `<pre>${message}</pre>` }} />
    );
  }

export default ChatResponse