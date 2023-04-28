import React, { useContext } from 'react'
import Select from 'react-select';

import { FoodContext } from './ShoppingList'
import { measurements } from '../../data/defaultFoodList'
import { IGood, IFoodContext, IFoodList } from '../../types/interfaces'
import { changeFoodListValue } from './foodListActions'

import '../../styles/components/foodList/goodAmount.scss';

interface IGoodsAmountProps {
    good: IGood,
    category: string
}

const GoodAmount = ({ good, category }: IGoodsAmountProps) => {

    const { setFoodList } = useContext(FoodContext) as IFoodContext<IFoodList>;

    const {
        name,
        measurementType,
        amount,
        step,
    } = good;

    const onAmountChange = (type: 'increment' | 'decrement') => {
        switch (type) {
            case 'increment':
                if (amount < 20) {
                    changeFoodListValue(category, name, 'increment', setFoodList)
                }
                return;
            case 'decrement':
                if (amount > step) {
                    changeFoodListValue(category, name, 'decrement', setFoodList)
                }
                return;
            default:
                return
        }
    }

    const inputChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value.match(/^[1-9]{0,1}[0-9]{0,1}\.{0,1}\d{0,2}$/)) {
            return;
        }
        changeFoodListValue(category, name, 'amount', setFoodList, e.target.value)
    }

    return (
        <div className='ga-container'>
            <div className="ga-amount">
                <button
                    className='ga-amount-dec'
                    onClick={() => onAmountChange('decrement')}
                >
                    <i
                        className="fa-solid fa-minus"
                    ></i>
                </button>
                <div className="ga-measurement">
                    <input
                        type="text"
                        value={amount}
                        onChange={inputChangeAmount}
                    />
                    <select
                        value={measurementType}
                        onChange={(e) => changeFoodListValue(category, name, 'measurementType', setFoodList, e.target.value)}
                    >
                        {measurements.map(measure => {
                            return (
                                <option value={measure} key={measure}>{measure}</option>
                            )
                        })}
                    </select>
                </div>
                <button
                    className='ga-amount-inc'
                    onClick={() => onAmountChange('increment')}
                >
                    <i
                        className="fa-solid fa-plus"
                    ></i>
                </button>
            </div>
        </div>
    )
}

export default GoodAmount
