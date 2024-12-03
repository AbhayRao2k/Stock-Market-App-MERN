import Header from "../../components/Header";
import StockCard from "../../components/StockCard";

const Home = () => {
  const stockSymbols = ["AAPL", "GOOGL", "MSFT", "AMZN"];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Real-time Stock Prices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stockSymbols.map((symbol) => (
          <StockCard key={symbol} symbol={symbol} />
        ))}
      </div>
    </div>
  );
};

export default Home;