import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'

const Price = (props) => {
  
  const apiKey = "72b6c7c016430fbbcf6f0e4a8dcf3270"
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL
  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`

  //state to hold the coin data
  const [stock, setStock] = useState("null")

  //function to fetch stock data
  const getStock = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStock(data);
  };

  // useEffect to run getStock when component mounts
  useEffect(() => {
    getStock()
  }, []);
console.log(stock);
  // loaded function for when data is fetched
 
    return (
      <div>
        {stock === 'null' ? (
          <h2>Loading...</h2>
        ) : (
      <div>
        <h1>{symbol}</h1>
        <h2>Price: ${stock[0].price}</h2>
        <h4>Description{stock[0].description}</h4>
        <img src={stock[0].image} alt='image'/>
      </div>
    )}
    </div>
    );
  }



export default Price;