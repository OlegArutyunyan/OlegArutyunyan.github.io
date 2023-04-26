import React, { useContext } from 'react'

import GoodAmount from './GoodAmount';
import { FoodContext } from './ShoppingList';
import { IGood, IFoodContext, IFoodList } from '../../types/interfaces'
import { changeFoodListValue } from './foodListActions';

import '../../styles/components/foodList/foodList.scss';

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
        <div className="fi-container">
            <div className="fi-header">
                <span
                    onClick={() => changeFoodListValue(category, name, true, 'add', setFoodList)}
                >
                    {name}
                </span>
                {inBucket ?
                    <i
                        className="fa-solid fa-basket-shopping close"
                        style={{ color: 'red' }}
                        onClick={() => changeFoodListValue(category, name, false, 'add', setFoodList)}
                    ></i>
                    :
                    <i
                        className="fa-solid fa-basket-shopping bucket"
                        onClick={() => changeFoodListValue(category, name, true, 'add', setFoodList)}
                    ></i>
                }
            </div>
            {inBucket &&
                <div className="fi-adjust">
                    <GoodAmount good={good} />
                </div>
            }
        </div>
    )
}

export default FoodItem
