import React, { memo } from 'react'
import { TMessage } from '../../types/interfaces/chat'

import '../../styles/components/chat/message.scss';

interface IMessageProps {
    message: TMessage
}

const Message = memo(({ message }: IMessageProps) => {

    const displayMessage = () => {
        const messageBody = Object.values(message)[0]
        if (typeof messageBody === 'string') {
            return messageBody;
        }
        return messageBody();
    }

    return (
        <div className={`mes-container ${Object.keys(message)[0] === 'pc' ? 'secondary' : 'primary'}`}>
            {displayMessage()}
        </div>
    )
})

export default Message
