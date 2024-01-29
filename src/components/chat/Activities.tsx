import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/components/chat/activities.scss';

const activityList = [
    {
        name: 'За покупками',
        navigateTo: '/foodlist'
    },
    {
        name: 'Новости',
        navigateTo: '/chat'
    },
    {
        name: 'Поработаем',
        navigateTo: '/timer'
    },
    {
        name: 'Курс валют',
        navigateTo: '/chat/'
    },
]

const Activities = () => {
    const navigate = useNavigate();

    return (
        <div className='act-container'>
            {
                activityList.map(({name, navigateTo}) => {
                    return (
                        <span
                            className='act-item'
                            onClick={() => navigate(navigateTo)}
                            key={navigateTo}
                        >
                            {name}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Activities
