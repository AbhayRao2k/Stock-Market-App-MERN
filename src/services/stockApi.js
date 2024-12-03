const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY; // Access API key
const BASE_URL = "https://www.alphavantage.co/query";

export const fetchStockData = async (symbol) => {
  try {
    const response = await fetch(
      `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );
    const data = await response.json();

    if (data["Global Quote"]) {
      const quote = data["Global Quote"];
      return {
        symbol: quote["01. symbol"],
        price: parseFloat(quote["05. price"]),
        change: parseFloat(quote["09. change"]),
        percentChange: parseFloat(quote["10. change percent"].replace("%", "")),
      };
    } else {
      throw new Error("No data found for symbol: " + symbol);
    }
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
};