 // Function to fetch cryptocurrency prices and update the table
    function fetchCryptoPrices() {
        fetch('https://api.binance.com/api/v3/ticker/price')
            .then(response => response.json())
            .then(data => {
                const table = document.getElementById('crypto-table');

                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Crypto Coin Prices</title>
</head>

<body>

    <table id="crypto-table">
        <tr>
            <th>Cryptocurrency</th>
            <th>Price</th>
        </tr>
    </table>

    <script>
        // Function to fetch cryptocurrency prices and update the table
        function fetchCryptoPrices() {
            fetch('https://api.binance.com/api/v3/ticker/price')
                .then(response => response.json())
                .then(data => {
                    const table = document.getElementById('crypto-table');
                    
                    // Sort data based on the last 3 letters of the symbol
                    data.sort((a, b) => {
                        const lastThreeA = a.symbol.slice(-3);  // Get last 3 letters of symbol A
                        const lastThreeB = b.symbol.slice(-3);  // Get last 3 letters of symbol B

                        // Sort alphabetically based on the last 3 letters
                        return lastThreeA.localeCompare(lastThreeB);
                    });

                    // Clear the table except for the headers
                    table.innerHTML = `
                        <tr>
                            <th>Cryptocurrency</th>
                            <th>Price</th>
                        </tr>
                    `;

                    // Loop through the sorted data and populate the table
                    data.forEach(item => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${item.symbol}</td>
                            <td>${item.price}</td>
                        `;
                        table.appendChild(row);
                    });
                })
                .catch(error => console.error('Error fetching crypto prices:', error));
        }

        // Fetch prices initially
        fetchCryptoPrices();

        // Update prices every 0.1 milliseconds (very fast, not recommended for production)
        setInterval(fetchCryptoPrices, 0.1);
    </script>

</body>

</html>


                // Clear the table except for the headers
                table.innerHTML = `
                        <tr>
                            <th>Cryptocurrency</th>
                            <th>Price</th>
                        </tr>
                    `;

                // Loop through the data and populate the table
                data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                            <td>${item.symbol}</td>
                            <td>${item.price}</td>
                        `;
                    table.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching crypto prices:', error));
    }

    // Fetch prices initially
    fetchCryptoPrices();

    // Update prices every 0.1 milliseconds
    setInterval(fetchCryptoPrices, 0.1);
