import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import '../styles/components/App.scss';

const ShoppingList = lazy(() => import("./foodList/ShoppingList"));

const App = () => {
    return (
        <Routes>
            <Route path='/foodlist' element={<ShoppingList />} />
        </Routes>
    );
}

export default App;
