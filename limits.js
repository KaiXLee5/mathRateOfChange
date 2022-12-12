const firstIllustrationChart = new Chart(document.getElementById("firstIllustrationChart"), {

    type: "bar",
    data: {
        labels: [-4, -3 - 2, -1, 0, 1, 2, 3, 4],
        datasets: [{
            type: 'line',
            label: 'y = x^2',
            pointRadius: 0,
            data: [-4, -3, -2, -1, 0, 1],
            borderColor: "cyan",
            tension: 0.3
        }, {
            type: 'line',
            label: 'f(x) = x^2',
            pointRadius: 6,
            data: [null, null, null, null, null, 1],
            borderColor: "cyan",
            backgroundColor: "cyan",
            pointBackgroundColor: null,
            tension: 0.3,
        }, {
            type: 'line',
            label: 'y = x^2',
            pointRadius: 0,
            borderRadius: 0.1,
            data: [null, null, null, null, null, null, 2, 3],
            backgroundColor: "cyan",
            borderColor: 'cyan',
            tension: 0.3,
            pointBackgroundColor: "green",
        }, {
            type: 'line',
            label: 'y = x^2',
            pointRadius: 6,
            borderRadius: 0.1,
            data: [null, null, null, null, null, null, 2],
            borderColor: 'cyan',
            backgroundColor: "cyan",
            pointBackgroundColor: "cyan",

            tension: 0.3,
        }]

    }, options: {
        scales: {
            x: {
                max: 10
            },
            y: {
                max: 6
            }

        },
        plugins: {
            legend: {
                labels: {
                    filter: (legendItem, chartData) => legendItem.text !== 'y = x^2'
                }
            }
        }
    }
})