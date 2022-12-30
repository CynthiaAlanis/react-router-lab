
import './App.css';
import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Stock from "./pages/Dashboard"
import Nav from "./components/Nav"


function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Stock" element={<Stock />} />
     
      </Routes>
  
    </div>
  )
}

export default App
