import React, { useContext } from 'react'

import GoodAmount from './GoodAmount';
import { FoodContext } from './ShoppingList';
import { IGood, IFoodContext, IFoodList } from '../../types/interfaces'
import { changeFoodListValue } from './foodListActions';

import '../../styles/components/foodList/foodItem.scss';

interface IFoodItemProps {
    good: IGood,
    category: string
}

const FoodItem = ({ good, category }: IFoodItemProps) => {

    const { setFoodList } = useContext(FoodContext) as IFoodContext<IFoodList>;

    const {
        name,
        inBucket,
    } = good;

    return (
        <div className={`fi-container ${inBucket && 'in-bucket'}`}>
            <div className="fi-header">
                <span
                    onClick={() => changeFoodListValue(category, name, 'addToBucket', setFoodList, !inBucket)}
                >
                    {name}
                </span>
                <i
                    className={`fa-solid fa-basket-shopping`}
                    style={inBucket ? { color: '#11dd11' } : {}}
                    onClick={() => changeFoodListValue(category, name, 'addToBucket', setFoodList, !inBucket)}
                ></i>
            </div>
            {inBucket &&
                <div className="fi-adjust">
                    <GoodAmount
                        good={good}
                        category={category}
                    />
                </div>
            }
        </div>
    )
}

export default FoodItem
