import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// import css files
import "./theme/global.css";

// import pages
import Home from "./pages/Home.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App