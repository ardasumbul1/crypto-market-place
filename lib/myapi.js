
export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from CoinGecko API');
    }

    const coins = await response.json();

    const formattedCoins = coins.map((coin) => ({
      id: coin.id,
      name: coin.name,
      current_price: coin.current_price,
      market_cap: coin.market_cap,
      image: coin.image,
    }));

    return  formattedCoins
  } catch (error) {
    console.error(error);
    return null;
  }
}