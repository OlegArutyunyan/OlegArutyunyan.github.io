import React, { createContext, useState } from 'react';

import StoreMenu from './StoreMenu';
import FoodList from './FoodList';
import { defaultFoodList } from '../../data/defaultFoodList';
import { IFoodList, IFoodContext } from '../../types/interfaces';

import './styles/App.scss';

export const FoodContext = createContext<IFoodContext<IFoodList> | null>(null);

const ShoppingList = () => {

    const [isBucket, setIsBucket] = useState(false);
    const [newGoods, setNewGoods] = useState('');
    const [foodList, setFoodList] = useState<IFoodList | null>(defaultFoodList);

    const addItemToBucket = (e: React.FormEvent) => {
        e.preventDefault();
        if (newGoods) {
            setFoodList((prevList) => {
                let newList = JSON.parse(JSON.stringify(prevList));
                newList[newList.length - 1].goods.push({
                    name: newGoods,
                    inBucket: true
                });
                return newList
            })
        }
        setNewGoods(() => '');
    }

    return (
        <div className="sl-container">
            <div className="sl-header">
                Список покупок
            </div>
            <div className="sl-header-search">
                <form
                    onSubmit={(e) => addItemToBucket(e)}
                    className="sl-add-new"
                >
                    <input
                        type="text"
                        placeholder='Добавьте товар или выберите из списка ниже'
                        onChange={(event) => setNewGoods(event.target.value)}
                        value={newGoods}
                    />
                    <button
                        type='submit'
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </form>
            </div>
            <FoodContext.Provider value={{ foodList, setFoodList }}>
                <StoreMenu
                    isBucket={isBucket}
                    setIsBucket={setIsBucket}
                />
                <div className="app-content">
                    {
                        isBucket ?
                            <FoodList type={'bucket'} />
                            :
                            <FoodList type={'store'} />
                    }
                </div>
                <StoreMenu
                    isBucket={isBucket}
                    setIsBucket={setIsBucket}
                />
            </FoodContext.Provider>
        </div>
    );
}

export default ShoppingList;
