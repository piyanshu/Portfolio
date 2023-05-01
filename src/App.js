import Navbar from "./components/Navbar";
import Route from "./components/Route";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import ContactPage from "./Pages/ContactPage";

function App(){
    return (
        <div className="h-screen">
            <div className="">
                <Navbar/>
            </div>
            <div className="">
                <Route path='/'>
                    <HomePage/>
                </Route>            
                <Route path='/about'>
                    <AboutPage/>
                </Route>
                <Route path='/skills'>
                    <SkillsPage/>
                </Route>
                <Route path='/contact'>
                    <ContactPage/>
                </Route>
            </div>
        </div>
    );
};
export default App;