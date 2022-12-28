import { Link } from "react-router-dom"

const Nav = (props) => {
  return(
    <div className="nav">
      <Link to="/">
        <div>STOCK PRICES</div>
      </Link>
      <Link to="/Stock">
        <div>Stocks</div>
      </Link>
    </div>
  )
}

export default Nav