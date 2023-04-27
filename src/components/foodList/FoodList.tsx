import React, { useContext, useMemo } from 'react'

import FoodItem from './FoodItem';
import { FoodContext } from './ShoppingList';
import { IFoodList, IGood, IFoodContext } from '../../types/interfaces';

import '../../styles/components/foodList/foodList.scss';

interface IFoodListProps {
    type: 'store' | 'bucket'
}

const FoodList = ({ type }: IFoodListProps) => {

    const { foodList } = useContext(FoodContext) as IFoodContext<IFoodList>;

    const filteredList = useMemo(() => {
        if (!foodList) {
            return;
        }

        if (type === 'store') {
            return Object.entries(foodList).filter(([category, _]) => category !== 'Другое');
        }

        return Object.entries(foodList).map(([category, goods]) => {
            const goodsInBucket = goods.filter((good) => good.inBucket === true);
            if (goodsInBucket.length === 0) {
                return null;
            }
            return [category, goodsInBucket];
        }).filter((entry) => entry !== null) as [string, IGood[]][];
    }, [foodList, type]);

    return (
        <div className="fl-container">
            {filteredList && filteredList.map(([category, goods]) => {
                return (
                    <div
                        className="fl-category-container"
                        key={category}
                    >
                        <div className="fl-category-header">
                            {category}
                        </div>
                        <div
                            className="fl-good-container"
                        >
                            {goods.map((good: IGood) => {
                                return (
                                    <FoodItem
                                        good={good}
                                        category={category}
                                        key={good.name}
                                    />
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FoodList
