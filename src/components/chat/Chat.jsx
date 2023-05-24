import React from 'react'
import './chat.scss'
import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';

const Chat = () => {
  return (
    <div id="chat">
        <h1>Say <b>HI</b> to <b>AI</b></h1>
        <div className="line"></div>
        <div className="ai">
            <div className="aimsg df">
                <Avatar
                  alt="pp"
                  sx={{ width: 30, height: 30 }}
                />
                <p className="sayhi">Say Hi!</p>
            </div>
            <div className="youmsg df">
                <p className="sayhi">Hi!</p>
                <Avatar
                  alt="pp"
                  sx={{ width: 30, height: 30 }}
                />
                
            </div>
            <div className="sendmsg df">
              <textarea name="type" id="tyoe" rows='1' placeholder='Type Something'></textarea>
              <button id='send'><SendIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default Chat