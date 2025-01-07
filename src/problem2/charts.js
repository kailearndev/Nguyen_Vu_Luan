const ctx = document.getElementById('myChart').getContext('2d');

const labels = ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07']; // Dates
const exchangeRates = [23500, 29550, 23600, 25650, 21700, 23750, 22800]; /// Fake exchange rate

new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels, // X-axis: Months
        datasets: [{
            label: 'USD to VND Exchange Rate', // Dataset label
            data: exchangeRates, // Data: Exchange rates
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        }],
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'USD to VND Exchange Rate in the Last 6 Months (Fake Data)', // Chart title
            },
        },
        scales: {
            y: {
                beginAtZero: false, // Start from the minimum value
                title: {
                    display: true,
                    text: 'Exchange Rate (VND)', // Y-axis title
                },
            },

        },
    },
});