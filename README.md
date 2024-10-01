# Crypto Coin Prices

This project displays real-time cryptocurrency prices by fetching data from the Binance API. The prices are automatically updated every 0.1 milliseconds using JavaScript and the Fetch API.

## Features

- Fetches cryptocurrency prices from Binance's public API.
- Automatically updates the prices every 0.1 milliseconds without refreshing the page.
- Displays cryptocurrency names and their corresponding prices in a simple table format.

## Technologies Used

- **HTML**: To structure the webpage.
- **CSS**: For styling the page (you can add your own styles in `style.css`).
- **JavaScript**: Fetches data from the Binance API and updates the table.
- **Binance API**: Provides real-time cryptocurrency prices.

## How It Works

1. When the page loads, JavaScript fetches the current cryptocurrency prices from the Binance API (`https://api.binance.com/api/v3/ticker/price`).
2. The table is populated with cryptocurrency symbols and their prices.
3. Every 0.1 milliseconds, the prices are updated automatically, keeping the table up-to-date with the latest data.

## Usage

### Clone the Repository

```
git clone EbubechukwuOnwukwe/Crypto-Coin-Prices
```

### Run the Project

1. Open the `index.html` file in any browser.
2. The table will display real-time cryptocurrency prices, updating every 0.1 milliseconds.

### API Information

This project uses the Binance API to fetch cryptocurrency prices:

- **API Endpoint**: `https://api.binance.com/api/v3/ticker/price`
- **Response Format**: JSON containing an array of objects, each with the `symbol` (cryptocurrency pair) and `price`.

Example API Response:
```json
[
  {
    "symbol": "BTCUSDT",
    "price": "34000.00"
  },
  {
    "symbol": "ETHUSDT",
    "price": "2100.00"
  }
]
```

## Customization

- **Update Interval**: You can change how frequently the prices are updated by adjusting the interval in the JavaScript `setInterval()` function. Currently, it's set to update every 0.1 milliseconds:
  
  ```js
  setInterval(fetchCryptoPrices, 0.1);  // Update every 0.1 milliseconds
  ```

- **Styling**: Customize the appearance of the table by editing the `style.css` file.

## License

This project is open-source and available under the MIT License.
