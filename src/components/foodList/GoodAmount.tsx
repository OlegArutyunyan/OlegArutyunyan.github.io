import React from 'react'
import { IGood, TAmountType } from '../../types/interfaces'
import { changeFoodListValue } from './foodListActions'

interface IGoodsAmountProps {
    good: IGood
}

const GoodAmount = ({ good }: IGoodsAmountProps) => {

    const {
        name,
        inBucket,
        measurementType,
        amount,
        step,
    } = good;
    return (
        <div className='ga-container'>
            <div className="ga-amount">
                <i
                    className="fa-solid fa-minus"
                    onClick={() => changeFoodListValue(category, name, true, 'add', setFoodList)}></i>
                {amount}
                <i className="fa-solid fa-plus"></i>
            </div>
            <div className="ga-measurement">
                <select>

                </select>
            </div>
        </div>
    )
}

export default GoodAmount
