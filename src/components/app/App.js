import TopPanel from '../topPanel/TopPanel';

import Login from '../googleSingnIn/Login';
import Logout from '../googleSingnIn/Logout';

import Sidebar from '../sidebar/Sidebar';
import VideoPane from '../videoPane/VideoPane';

import './app.scss';

const App = () => {
  console.log("app render")
  return (
    <main className="App">
      <TopPanel/>
      <div className="main_container">
        <Sidebar/>
        <VideoPane/>
      </div>
      {/* <Login/>
      <Logout/> */}
    </main>
  );
}

export default App;
