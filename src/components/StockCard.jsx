import { useEffect, useState } from "react";
import { fetchStockData } from "../services/stockApi";

const StockCard = ({ symbol }) => {
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStockData(symbol);
      if (data) {
        setStockData(data);
        setError(false);
      } else {
        setError(true);
      }
    };
    fetchData();
  }, [symbol]);

  if (error) {
    return (
      <div className="border rounded-md p-4 shadow bg-red-50 text-red-600">
        Error fetching data for {symbol}
      </div>
    );
  }

  if (!stockData) {
    return (
      <div className="border rounded-md p-4 shadow bg-gray-50 text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="border rounded-md p-4 shadow bg-white">
      <h3 className="text-xl font-bold">{stockData.symbol}</h3>
      <p>Price: ${stockData.price.toFixed(2)}</p>
      <p className={stockData.change >= 0 ? "text-green-500" : "text-red-500"}>
        Change: {stockData.change >= 0 ? "+" : ""}
        {stockData.change.toFixed(2)}
      </p>
      <p
        className={
          stockData.percentChange >= 0 ? "text-green-500" : "text-red-500"
        }
      >
        {stockData.percentChange.toFixed(2)}%
      </p>
    </div>
  );
};

export default StockCard;
