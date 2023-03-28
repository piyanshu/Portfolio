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
            <div className="h-5/6 border-2">
                <Route path='/'>
                    <HomePage/>
                </Route>
                <Route path='/about'>
                    <AboutPage/>
                </Route>
            </div>
            <div className="h-1/10">
                
            </div>
        </div>
    );
};
export default App;