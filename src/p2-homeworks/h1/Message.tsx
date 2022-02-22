import React from 'react'
import e from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
      <div className={e.message}>
          <div className={e.img_wrap}>
              <img src={props.avatar} className={e.img}/>
          </div>


          <div className={e.text_wrap}>
              <div style={{color:'blue'}}>{props.name}</div>
              <div style={{color:'olive'}}>{props.message}</div>
              <div style={{color:'white'}}className={e.time}>
                  <div style={{display:"flex"}}>
                      {props.time}
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Message
