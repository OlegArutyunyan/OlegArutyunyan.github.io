import { createContext, useState } from 'react';
import FoodList from './FoodList';
import { defaultFoodList } from './data/defaultFoodList';

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
                    onClick={() => setGoodsList(() => defaultFoodList)}>

                </div>
            </div>
            <div className="app-content">
                <FoodContext.Provider
                    value={{
                        goodsList,
                        setGoodsList
                    }}
                >
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
                </FoodContext.Provider>
            </div>
            <div className="app-footer">
                <div className="app-footer-item">
                    <button
                        onClick={() => setIsFoodList(() => true)}
                    >
                        Список
                    </button>
                </div>
                <div className="app-footer-item">
                    <button
                        onClick={() => setIsFoodList(() => false)}
                    >
                        Корзина
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
