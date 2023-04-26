import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/App.scss';

const ShoppingList = lazy(() => import("./foodList/ShoppingList"));

const App = () => {
    return (
        <Routes>
            <Route path='/foodList' element={<ShoppingList />} />
        </Routes>
    );
}

export default App;
