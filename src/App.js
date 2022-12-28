
import './App.css';
import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Stock from "./pages/Stock"

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Price" element={<Home />} />
        <Route path="/Stock" element={<Stock />} />
      </Routes>
    </div>
  )
}

export default App
