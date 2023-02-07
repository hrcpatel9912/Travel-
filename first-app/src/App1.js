
import "./App1.css"
import {BrowserRouter as Router, Routes, Route}from "react-router-dom";
import Home from "../src/pages folder/Home"
;
import Menu from "../src/pages folder/Menu";
import Contact from "../src/pages folder/Contact";
// import Navbar from "./Navbar";

function App1() {
  return (
    <div className="App">
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Contact" element={<Contact />} />
                {/* <Route path="*" element={<h1> PAGE NOT FOUND</h1>} /> */}
            </Routes>
        </Router>
    </div>
  )
}

export default App1