import { useEffect,  useRef,  useState } from 'react';
import './App.css';
import {FormControl, Input, IconButton  } from '@mui/material';
import Message from './Message';
import {  db } from './firebase';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import FlipMove from 'react-flip-move';
import logo from "../src/image/logo.png"
import SendRoundedIcon from '@mui/icons-material/SendRounded';
// import { IconButton } from '@mui/material';


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('')
  const messagesEndRef = useRef(null)

  useEffect( ()=>{
    const collectionRef = collection(db, "messages"); 
    const sortedQuery = query(collectionRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(sortedQuery, (querySnapshot) => {

    setMessages(querySnapshot.docs.map(doc => ({id: doc.id, message : doc.data()})))


});

return () =>{

  unsubscribe()
}
 },[])


useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
}, [messages]);


  useEffect(()=>{
    setUsername(prompt("Please enter your name"));
  },[])

  const sendMessage = async (event) =>{
    event.preventDefault();
    await addDoc(collection(db, 'messages'), {
      message : input,
      username : username,
      timestamp : serverTimestamp()
    })

    setInput('')
  }


{
  if(username)
  return (
   <div className="App">
    <div className="top">
     
   <p className='welcome'>Welcome {username} in </p>
   <img src={logo} alt="" className='logo'/>
   </div>
 
   <FlipMove  >
    <div className='message-container' >
     {messages.map(({id, message }) =>(
         <Message key={id} username={username} message={message}/>
       ))
     }
      <div ref={messagesEndRef} />
     </div>

   </FlipMove>
   <form className='app__form'>
   <FormControl className='app__formControl'>
     <Input className='app__input' placeholder='Enter Message'  type="text" value={input} onChange={event => setInput(event.target.value)}/>
     
     <IconButton className='app__iconButton' type="submit"  disabled={!input} variant="contained" color="primary"  onClick={sendMessage}>
     <SendRoundedIcon className='sendIcon'/>
     </IconButton>
   </FormControl>

   </form> 
   </div>
 );
}
}

export default App;
