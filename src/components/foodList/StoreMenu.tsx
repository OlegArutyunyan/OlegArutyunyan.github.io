import React from "react";

import '../../styles/components/foodList/storeMenu.scss';

interface IStoreMenuProps {
    isBucket: boolean,
    setIsBucket: (value: boolean) => void
}

const StoreMenu = (props: IStoreMenuProps) => {

    const { isBucket, setIsBucket } = props;

    return (
        <div className="sm-container">
            <div className={`sm-button-hover ${!isBucket ? 'left' : 'right'}`}></div>
            <button
                className="sm-button first "
                onClick={() => setIsBucket(false)}
            >
                Список
            </button>
            <button
                className="sm-button last"
                onClick={() => setIsBucket(true)}
            >
                Корзина
            </button>
        </div >
    )
}

export default StoreMenu
