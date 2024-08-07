import "./App.css";

import Navbar from "./Navbar/Navbar";
import HeroHeader from "./main/HeroHeader/HeroHeader";
import Brand from "./main/Brand/Brand";
import Services from "./main/Services/Services";
import About from "./main/About/About";
import Process from "./main/Process/Process";
import Project from "./main/Project/Project";
import Feature from "./main/Feature/Feature";
import Blog from "./main/Blog/Blog";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <HeroHeader />
                <Brand />
                <Services />
                <About />
                <Process />
                <Project />
                <Feature />
                <Blog />
            </main>
            <Footer />
        </div>
    );
}

export default App;
