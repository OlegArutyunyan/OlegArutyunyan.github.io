import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from './spinner/Spinner';

import '../styles/components/App.scss';

const EntryScreen = lazy(() => import("./entryScreen/EntryScreen"));
const ShoppingList = lazy(() => import("./foodList/ShoppingList"));
const Chat = lazy(() => import("./chat/Chat"));
const Page404 = lazy(() => import("./page404/Page404"));

const App = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path='/' element={<EntryScreen />} />
                <Route path='/foodlist' element={<ShoppingList />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/*' element={<Page404 />} />
            </Routes>
        </Suspense>
    );
}

export default App;
<Suspense fallback={<Spinner />}></Suspense>