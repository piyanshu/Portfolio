import Navbar from "./components/Navbar";
import Route from "./components/Route";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App(){
    return (
        <div>
            <Navbar/>
            <div>
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