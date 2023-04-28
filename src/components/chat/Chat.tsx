import React, {
    useState,
    useEffect,
    useCallback,
    useRef
} from 'react'

import Message from './Message';
import { defaultMessages } from './messagesData';
import { useNavigate } from 'react-router-dom';
import { TMessage } from '../../types/interfaces/chat';

import '../../styles/components/chat/chat.scss';

const Chat = () => {
    const [newMessage, setNewMessage] = useState('');
    const [messageHistory, setMessageHistory] = useState<TMessage[]>([]);
    const timeoutsId = useRef<ReturnType<typeof setTimeout>[]>([]);
    const navigate = useNavigate();

    const addMessage = useCallback((sender: string, message: string | (() => JSX.Element), delay = 100) => {
        const timeout = setTimeout(() => {
            setMessageHistory((prevHistory) => {
                const newMessages = [
                    ...prevHistory,
                    { [sender]: message }
                ]
                return newMessages
            });
            setNewMessage('');
            timeoutsId.current = [];
        }, delay);
        timeoutsId.current = [...timeoutsId.current, timeout]
        console.log(timeoutsId.current)
    }, []);

    useEffect(() => {
        addMessage('pc', defaultMessages.intro, 500);
        addMessage('pc', defaultMessages.variants, 500);

        return () => {
            timeoutsId.current.forEach((timeout) => clearTimeout(timeout));
            timeoutsId.current = [];
            setMessageHistory([])
        }
    }, [addMessage])

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage === '') {
            return;
        }

        const redirect = (redirectTo: string) => {
            const timeout = setTimeout(() => {
                navigate(redirectTo);
            }, 500);
            timeoutsId.current = [...timeoutsId.current, timeout]
        }

        addMessage('user', newMessage);
        const timeout = setTimeout(() => {
            switch (newMessage.toLowerCase()) {
                case 'продукты':
                case 'список продуктов':
                    addMessage('pc', 'Обрабатываю запрос...');
                    redirect('/foodlist');
                    break;
                case 'поработаем':
                case 'работа':
                case 'таймер':
                    addMessage('pc', 'Обрабатываю запрос...');
                    redirect('/timer');
                    break;
                default:
                    addMessage('pc', 'К сожалению, я не понял... Попробуйте сделать другой запрос или выберите вариант из списка ниже');
                    addMessage('pc', defaultMessages.variants);
                    break;
            }

        }, 500);
        timeoutsId.current = [...timeoutsId.current, timeout]
    }

    return (
        <div className='ch-container'>
            <div className="ch-messages">
                <div className="filler"></div>
                {messageHistory.map((message, id) => {
                    return (
                        <Message
                            key={id}
                            message={message}
                        />
                    )
                })}
            </div>
            <div className="ch-send-container">
                <form onSubmit={sendMessage}>
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder='Введите сообщение'
                    />
                    <button
                        className="ch-send-button"
                        type='submit'
                    >
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chat
