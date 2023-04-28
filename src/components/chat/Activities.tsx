import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/components/chat/activities.scss';

const activityList = [
    {
        name: 'Список продуктов',
        navigateTo: '/foodlist'
    },
    {
        name: 'Поработаем',
        navigateTo: '/timer'
    }
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
