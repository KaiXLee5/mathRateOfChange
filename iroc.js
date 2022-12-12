const slider = document.getElementById("myRange")
const text = document.getElementById("textRange")
const currIroc = document.getElementById("currIroc")

const firstPoint = {
    label: 'point A',
    type: 'line',
    pointRadius: 5,
    pointBackgroundColor: "blue",
    data: [null, null, null, null, 1],
    borderColor: 'blue',
    fill: false,
}

const secondPoint = {
    label: 'point B',
    type: 'line',
    pointRadius: 5,
    pointBackgroundColor: "orange",
    data: [null, null, null, null, null, 4],
    borderColor: 'orange',
    fill: false,
}

const h = {
    label: 'magnitude of h',
    type: 'line',
    pointRadius: 2,
    pointBackgroundColor: "brown",
    data: [null, null, null, null, 1, 1],
    borderColor: 'brown',
    fill: false,
}

const firstPrincipleChart = new Chart(document.getElementById("firstPrincipleChart"), {

    type: "bar",
    data: {
        labels: [-3, -2, -1, 0, 1, 2, 3],
        datasets: [{
            type: 'line',
            label: 'y=x^2',
            pointRadius: 0,
            data: [9, 4, 1, 0, 1, 4, 9],
            // backgroundColor: "cyan",
            borderColor: 'cyan',
            tension: 0.3,
            pointBackgroundColor: "blue",
        }, firstPoint, secondPoint, h]
    },
});

const plotting = {
    label: 'iroc',
    type: 'line',
    pointRadius: 4,
    data: [9, 9, 9, 9, 9, 9, 9],
    borderColor: 'orange',
    fill: false,
}

const deltaX = {
    label: 'delta x',
    type: 'line',
    pointRadius: 4,
    data: [9, 9, 9, 9, 9, 9, 9],
    borderColor: 'grey',
    fill: false,
}

const irocChart = new Chart(document.getElementById("irocChart"), {
    type: "bar",
    data: {
        labels: [-3, -2, -1, 0, 1, 2, 3],
        datasets: [{
            label: 'y=x^2',
            type: 'line',
            pointRadius: 4,
            data: [9, 4, 1, 0, 1, 4, 9],
            // backgroundColor: "cyan",
            tension: 0.3,
            borderColor: "cyan",
            pointBackgroundColor: "blue",
        }, plotting, deltaX]
    },
});


slider.addEventListener('change', function () {
    switch (slider.value) {
        case '6': {
            plotting.data = [9, 9, 9, 9, 9, 9, 9]
            deltaX.data = [9, 9, 9, 9, 9, 9, 9]
            currIroc.innerText = 0
            break
        }
        case '5': {
            plotting.data = [9, 8, 7, 6, 5, 4]
            deltaX.data = [9, 9, 9, 9, 9, 9]
            currIroc.innerText = -1
            break
        }
        case '4': {
            plotting.data = [9, 7, 5, 3, 1]
            deltaX.data = [9, 9, 9, 9, 9]
            currIroc.innerText = -2
            break
        }
        case '3': {
            plotting.data = [9, 6, 3, 0]
            deltaX.data = [9, 9, 9, 9]
            currIroc.innerText = -3
            break
        }
        case '2': {
            plotting.data = [9, 5, 1]
            deltaX.data = [9, 9, 9]
            currIroc.innerText = -4
            break
        }
        case '1': {
            plotting.data = [9, 4]
            deltaX.data = [9, 9]
            currIroc.innerText = -5
            break
        }
        default: {
            plotting.data = [9]
            deltaX.data = [9]
            currIroc.innerText = -6
            break
        }
    }
    irocChart.update()
})

