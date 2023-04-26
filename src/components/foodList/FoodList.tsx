import React, { createContext, useContext } from 'react'
import { nanoid } from 'nanoid';

import { FoodContext } from './ShoppingList';
import { IFoodList, IGoodContext, IGood, IFoodContext } from '../../types/interfaces';

import './styles/foodList.scss';

interface IFoodListProps {
    type: 'store' | 'bucket'
}

const GoodContext = createContext<IGoodContext<IGood | null>>(null);

const FoodList = ({ type }: IFoodListProps) => {

    const { foodList, setFoodList } = useContext(FoodContext) as IFoodContext<IFoodList>;

    const changeGoodsList = (category, goodToChange, booleanToChange) => {
        setGoodsList((prevList) => {
            let newList = JSON.parse(JSON.stringify(prevList));
            for (let i = 0; i < newList.length; i++) {
                if (newList[i].categoryName === category.categoryName) {
                    for (let j = 0; j < newList[i].goods.length; j++) {
                        if (newList[i].goods[j].name === goodToChange.name) {
                            newList[i].goods[j] = {
                                name: goodToChange.name,
                                inBucket: booleanToChange
                            }
                        }
                    }
                }
            }
            return newList
        })
    }

    const handleAdd = (category, goodToChange) => {
        changeGoodsList(category, goodToChange, true);
    }

    const handleDelete = (event, category, goodToChange, indexOfGood) => {
        event.stopPropagation();
        if (category.categoryName === "Дополнительные товары") {
            setGoodsList((prevList) => {
                let newList = JSON.parse(JSON.stringify(prevList));
                newList[newList.length - 1].goods = prevList[prevList.length - 1].goods.filter((good, id) => id !== indexOfGood);
                return newList;
            });
            return;
        }
        changeGoodsList(category, goodToChange, false);
    }

    const displayGoodsCategories = () => {
        let finalGoods = [];
        if (type === 'bucket') {
            for (const goodsCategory of goodsList) {
                const filteredResults = goodsCategory.goods.filter((good) => (good.inBucket));
                if (filteredResults.length > 0) {
                    finalGoods.push({
                        ...goodsCategory,
                        goods: filteredResults
                    })
                }
            }
        } else if (type === 'list') {
            finalGoods = goodsList.filter((goodsCategory, id) => id < goodsList.length - 1)
        }

        return (
            <>
                {
                    finalGoods.map((goodsCategory) => {
                        return (
                            <div
                                className="list-category"
                                key={nanoid()}
                            >
                                <div className="list-header">
                                    {goodsCategory.categoryName}
                                </div>
                                <div className="list-goods">
                                    <>
                                        {
                                            goodsCategory.goods.map((good, goodIndex) => {
                                                return (
                                                    <div
                                                        className="list-good-item"
                                                        style={type === 'list' && good.inBucket ? { backgroundColor: '#24b124' } : {}}
                                                        key={nanoid()}
                                                    >
                                                        <span
                                                            className="name"
                                                            onClick={() => handleAdd(goodsCategory, good)}
                                                        >
                                                            {good.name}
                                                        </span>
                                                        <span
                                                            className="close"
                                                            onClick={(e) => handleDelete(e, goodsCategory, good, goodIndex)}
                                                        >
                                                            ✖
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }
                                        {goodsCategory.goods.length % 2 !== 0 &&
                                            <div className="list-good-item"></div>
                                        }
                                    </>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }

    return (
        <>
            {displayGoodsCategories()}
        </>
    )
}

export default FoodList
