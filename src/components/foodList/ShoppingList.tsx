import React, { createContext, useEffect, useState } from 'react';

import StoreMenu from './StoreMenu';
import FoodList from './FoodList';
import { changeFoodListValue } from './foodListActions';
import { defaultFoodList } from '../../data/defaultFoodList';
import { IFoodList, IFoodContext } from '../../types/interfaces';

import '../../styles/components/foodList/shoppingList.scss';

export const FoodContext = createContext<IFoodContext<IFoodList> | null>(null);

const ShoppingList = () => {

    const [isBucket, setIsBucket] = useState(false);
    const [newGood, setNewGood] = useState('');
    const [foodList, setFoodList] = useState<IFoodList | null>(defaultFoodList);

    const addItemToBucket = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newGood) {
            return;
        }
        changeFoodListValue('Другое', newGood, 'addToBucket', setFoodList, true);
        setNewGood('');
    }


    useEffect(() => {
        const savedFood = localStorage.getItem('food');
        if (savedFood === null) {
            return;
        }
        const parsedState = JSON.parse(savedFood);
        setFoodList(parsedState);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => localStorage.setItem('food', JSON.stringify(foodList)), 200);

        return () => {
            clearTimeout(timer);
        }
    }, [foodList]);

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
                        onChange={(event) => setNewGood(event.target.value)}
                        value={newGood}
                    />
                    <button
                        type='submit'
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    <button onClick={() => setFoodList(defaultFoodList)}>
                        <i className="fa-solid fa-rotate-right"></i>
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
            </FoodContext.Provider>
        </div>
    );
}

export default ShoppingList;
