
document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('financeChart').getContext('2d');
    var chart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S'], // Meses
    datasets: [{
        label: 'Incomes',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: [150, 200, 180, 220, 190, 240, 230, 210, 220], // Datos ficticios
        fill: false
    }, {
        label: 'Expenses',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        data: [130, 180, 160, 200, 170, 220, 200, 180, 190], // Datos ficticios
        fill: false
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});
});
