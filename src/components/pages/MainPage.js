import TopPanel from '../topPanel/TopPanel';
import Sidebar from '../sidebar/Sidebar';
import VideoPane from '../videoPane/VideoPane';

const MainPage = () => {
    return (
        <main className="App">
            <TopPanel />
            <div className="main_container">
                <Sidebar />
                <VideoPane />
            </div>
        </main>
    )
}

export default MainPage
