import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import {ContextMessage} from '../../contex/contex-message';
import {Contextauth} from '../../contex/context-auth';
import io from 'socket.io-client';
import sendicon from '../../assets/img/send.png';
import classes from './Messanger.css';
import Spinner  from "../Spinner/Spinner";

const Messanger=(props)=>{
    const [msg,setmsg]=useState();
    const [messages, setMessages] = useState();
    const [sock,setsock]=useState(null);
    const herid= useParams().idu;
    const auth= useContext(Contextauth).token;
    const msgdata= useContext(ContextMessage).message;
    const msgload= useContext(ContextMessage).loading;
    const msgerror= useContext(ContextMessage).er;
    const getallmessage= useContext(ContextMessage).getMessage;
    const scrolles= useRef();
    
  
    const setupSocket = () => {
    if (auth) {
        const newSocket = io("/", {
          query: {
            id1: auth._id,
          },
        });
  
        newSocket.on("disconnect", () => {
          setsock(null);
          setTimeout(setupSocket, 3000);
         
        });
  
        newSocket.on("connect", () => {
        
        });
  
        setsock(newSocket);
      }
    };
 
    useEffect(() => {

      getallmessage(auth._id, herid)
      setupSocket();
      
      //eslint-disable-next-line
      if (sock) {
        console.log(sock)
        sock.on("newMessage", (allMessage) => {
          console.log(allMessage,'jiffdug');
          
          setMessages( allMessage);
        });}

        console.log(messages)


        if (sock) {
          sock.emit("chatroomGetMessage", {
            herid
          });}

          if (sock) {
            console.log(sock)
            sock.on("GetMessage", (allMessage) => {
              console.log(allMessage,'jiffdug')
               ;
              setMessages( allMessage);
            });}
            //if(scrolles.current){scrolles.current.)}
    }, [messages, scrolles]);
      
    const sendMessage = () => {
      if (sock) {
        sock.emit("chatroomMessage", {
          herid,
          message:msg,
          
        });
  
        setmsg('');
      }
    };
    
      const vali= document.getElementById('msg');
     // console.log(vali.scrollHeight - vali.clientHeight)

     
    return(
        <div className={classes.Messanger}>
          <header className={classes.msg_header}>
                    <h3 className={classes.msg_name}>vali</h3>
                    <span></span>
                     </header>
                     
            <div id="msg" className={classes.msg_box} >
                
            {msgdata?msgdata.map(mp=><div className={mp.user1===auth._id?classes.msg_block_my:classes.msg_block_her}>
               
                <h4 className={mp.user1===auth._id?classes.msg_my:classes.msg_her}>{mp.message}</h4>
                </div>):<Spinner></Spinner>}
                
            </div>
           
            <div  className={classes.msg_input_box}>
                <input className={classes.msg_input} value={msg} placeholder='نوشتن پیام' type='text'  onChange={(e)=>setmsg(e.target.value)} />
                <img src={sendicon} onClick={sendMessage} className={classes.msg_send}/>
            </div>
        </div>
    );
};

export default Messanger;

