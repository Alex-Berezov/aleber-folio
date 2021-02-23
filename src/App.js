import React from 'react'
import {Route} from 'react-router-dom'

import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";
import Portfolio from "./pages/portfolio/Portfolio";
import Contacts from "./pages/contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="content">
                    <Route exact path="/" render={() => <Home />} />
                    <Route path="/about" render={() => <About />} />
                    <Route path="/resume" render={() => <Resume />} />
                    <Route path="/portfolio" render={() => <Portfolio />} />
                    <Route path="/contacts" render={() => <Contacts />} />
            </div>
        </div>
    );
}

export default App;
