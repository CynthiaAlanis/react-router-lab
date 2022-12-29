import { Link } from "react-router-dom"

const Nav = (props) => {
  return(
    <div className="nav">
      <Link to="/">
        <div>DASHBOARD</div>
      </Link>
      <Link to="/Stock">
        <div>STOCKS</div>
      </Link>
      <Link to="/About">
        <div>ABOUT</div>
        </Link>

    </div>
  )
}

export default Nav