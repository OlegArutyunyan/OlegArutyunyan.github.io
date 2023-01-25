import { createContext, useState } from 'react';
import FoodList from './FoodList';
import { defaultFoodList } from './data/defaultFoodList';
import ListChoise from './ListChoise';

import './styles/App.scss';

export const FoodContext = createContext(null);

const App = () => {

    const [isFoodList, setIsFoodList] = useState(true);
    const [newGoods, setNewGoods] = useState('');
    const [goodsList, setGoodsList] = useState(defaultFoodList);

    const addItemToBucket = (e) => {
        e.preventDefault();
        if (newGoods) {
            setGoodsList((prevList) => {
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
        <div className="app-container">
            <div className="app-header">
                Список покупок
            </div>
            <div className="app-header-search">
                <form
                    onSubmit={(e) => addItemToBucket(e)}
                    className="app-add-new"
                >
                    <input
                        type="text"
                        placeholder='Добавьте товар или выберите из списка ниже'
                        onChange={(event) => setNewGoods(event.target.value)}
                        value={newGoods}
                    />
                </form>
                <div
                    className="app-reset"
                    onClick={() => setGoodsList(() => defaultFoodList)}
                >
                    <i className="fa-solid fa-arrows-rotate"></i>
                </div>
            </div>
            <FoodContext.Provider
                value={{
                    goodsList,
                    setGoodsList,
                    isFoodList,
                    setIsFoodList
                }}
            >
                <ListChoise />
                <div className="app-content">
                    {

                        isFoodList ?
                            <FoodList
                                type={'list'}
                            />
                            :
                            <FoodList
                                type={'bucket'}
                            />
                    }
                </div>
                <ListChoise />
            </FoodContext.Provider>
        </div>
    );
}

export default App;
