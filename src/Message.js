import { Card, CardContent, Typography } from '@mui/material'
import React, {forwardRef} from 'react'
import './Message.css'

const Message = forwardRef(({message, username}, ref) => {
    const isUser = message.username === username;

  return (
    <>
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
          <div className="name">

        <p>{!isUser && `${message.username} `}</p>
          </div>
        <Card className={isUser ? 'message__userCard' : 'message__guestCard'} >
            <CardContent className='content'>
                <Typography variant="h6" className='content-mobile'>
                  {message.message}
                </Typography>
            </CardContent>
        </Card>
    </div>
    </>
  )
})



export default Message

