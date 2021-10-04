import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";

import "./chatsection.css";
import axios from "axios";

let socket;
const Chat = () => {
  const { search } = useLocation();
  const { name, room } = queryString.parse(search);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const winnerName = useRef(null)
  const winingRoom = useRef(null)
  const winingPrice = useRef(null)


  const handleWinnerSubmit = async () => {
    const newWinner = {
      winnerName: winnerName.current.innerText,
      winingRoom:winingRoom.current.innerText,
      winingPrice:winingPrice.current.innerText
    };
    try{
      await axios.post("/winners/item",newWinner)
      window.location.replace("/")
    }catch(err){
      console.log(err)
    }
    console.log(winnerName.current.innerText)
    console.log(winingRoom.current.innerText)
    console.log(winingPrice.current.innerText)
  };

  useEffect(() => {
    socket = io("http://localhost:5000");

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on("message", (message) => {
      setMessages((exitstingMsgs) => [...exitstingMsgs, message]);
    });

    socket.on("userList", ({ roomUsers }) => {
      setUsers(roomUsers);
    });

    return () => {
      socket.emit("disconnect");
      socket.close();
    };
  }, [name,room]);

  const sendMessage = (e) => {
    if (e.key === "Enter" && e.target.value) {
      socket.emit("message", e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className='chatWraper'>
      <div className="chat">
        <div className="user-list">
          <div>User Name</div>
          {users.map((user) => (
            <button key={user.id} onClick={handleWinnerSubmit}
            ref={winnerName}
            >{user.name}</button>
          ))}
        </div>
        <div className="chat-section">
          <div className="chat-head">
            <div className="room" ref={winingRoom}>{room}</div>
            <Link to="/">X</Link>
          </div>
          <div className="chat-box">
            <ScrollToBottom className="messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${name === message.user ? "self" : ""}`}
                >
                  <span className="user" >{message.user}</span>
                  
                  <span ref={winingPrice} className="message-text">{message.text}</span>
                </div>
              ))}
            </ScrollToBottom>
            <input placeholder="message" onKeyDown={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
