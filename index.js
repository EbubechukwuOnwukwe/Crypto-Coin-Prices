 // Function to fetch cryptocurrency prices and update the table
    function fetchCryptoPrices() {
        fetch('https://api.binance.com/api/v3/ticker/price')
            .then(response => response.json())
            .then(data => {
                const table = document.getElementById('crypto-table');

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