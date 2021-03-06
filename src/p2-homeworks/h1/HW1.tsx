import React from 'react'
import Message from "./Message";

const messageData = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Vadim',
  message: 'You should learn more',
  time: '22:00',
}

function HW1() {
  return (
    <div>
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
    </div>
  )
}

export default HW1
