import Navbar from "./components/Navbar";
import Route from "./components/Route";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App(){
    return (
        <div className="h-screen">
            <div>
                <Navbar/>
            </div>
            <div className="">
                <Route path='/'>
                    <HomePage/>
                </Route>
                <Route path='/about'>
                    <AboutPage/>
                </Route>
            </div>
        </div>
    );
};
export default App;