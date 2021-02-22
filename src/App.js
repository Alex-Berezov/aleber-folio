import React from 'react'
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;
