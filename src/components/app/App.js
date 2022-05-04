import { Routes, Route } from "react-router-dom";
import { MainPage, IntroPage } from "../pages";
import RequireAuth from "../userLogIn/RequireAuth";

// import './app.scss';

const App = () => {
  console.log("app render")
  return (
    <Routes>
      <Route path="/" element={
        <RequireAuth>
          <MainPage />
        </RequireAuth>
      } />
      <Route path="/login" element={<IntroPage />} />
    </Routes>
  );
}

export default App;
