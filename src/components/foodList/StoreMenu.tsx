import React, { useContext } from "react";
import { FoodContext } from "../App";
import './styles/listChoise.scss';

interface IStoreMenuProps {
    isBucket: boolean, 
    setIsBucket: (value: boolean) => void
}
const StoreMenu = (props: IStoreMenuProps) => {

    const { isBucket, setIsBucket } = props;

    return (
        <div className="listChoise-container">
            <div className={`listChoise-item ${isBucket ? 'active' : ''}`}>
                <button
                    onClick={() => setIsBucket(true)}
                >
                    Список
                </button>
            </div>
            <div className={`listChoise-item ${!isBucket ? 'active' : ''}`}>
                <button
                    onClick={() => setIsBucket(false)}
                >
                    Корзина
                </button>
            </div>
        </div >
    )
}

export default StoreMenu
