import { useContext } from "react";
import { FoodContext } from "./App";
import './styles/listChoise.scss';

const ListChoise = () => {

    const { isFoodList, setIsFoodList } = useContext(FoodContext);

    return (
        <div className="listChoise-container">
            <div className={`listChoise-item ${isFoodList ? 'active' : ''}`}>
                <button
                    onClick={() => setIsFoodList(() => true)}
                >
                    Список
                </button>
            </div>
            <div className={`listChoise-item ${!isFoodList ? 'active' : ''}`}>
                <button
                    onClick={() => setIsFoodList(() => false)}
                >
                    Корзина
                </button>
            </div>
        </div >
    )
}

export default ListChoise
