
import './App.css';
import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Stocks from "./pages/Dashboard"
import Price from "./pages/Prices"
import Nav from "./components/Nav"




function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Stocks />} />  
        <Route path="/stocks/:symbol" element={<Price />} />    
        </Routes>
  
    </div>
  )
}

export default App
