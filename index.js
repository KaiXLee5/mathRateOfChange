const xData = [-3, -2, -1, 0, 1, 2, 3];

const arocChart = new Chart(document.getElementById('arocChart'), {
    type: "bar",
    data: {
        labels: xData,
        datasets: [{
            label: 'y=x^2',
            type: 'line',
            pointRadius: 5,
            borderColor: "cyan",
            borderWidth: 2,
            data: [9, 4, 1, 0, 1, 4, 9],
            backgroundColor: "cyan",
            fill: false,
            tension: 0.4,
            pointBackgroundColor: "blue",
        }, {
            label: 'secant/aroc',
            type: 'line',
            pointRadius: 4,
            data: [null, null, null, null, 1, 4, null],
            borderColor: 'orange',
            borderWidth: 2,
            fill: false,
        }]
    }
});