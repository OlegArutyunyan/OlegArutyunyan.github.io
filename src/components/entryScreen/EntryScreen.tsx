import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/components/entryScreen/entryScreen.scss';

const EntryScreen = () => {
    const navigate = useNavigate();
    return (
        <div className='entry-container'>
            <div className="entry-greeting">
                Привет, Олег!
            </div>
            <button
                className='entry-button'
                onClick={() => navigate('/chat')}
            >
                Привет!
            </button>
        </div>
    )
}

export default EntryScreen
