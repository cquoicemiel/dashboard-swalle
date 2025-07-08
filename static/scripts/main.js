const layout = {
    margin: { l: 35, r: 20, t: 50, b: 65 },  // marges pour laisser place aux titres et axes
    autosize: true
};

const config = {
    responsive: true 
};

// 1️⃣ Histogramme : bolus éjecté
const histoDiv = document.getElementById('plot1');
Plotly.newPlot(histoDiv, [{
    x: ['TUC 1.19%', 'TUC 4.59%'],
    y: [87, 73], // % bolus éjecté
    type: 'bar',
    marker: { color: ['#2980b9', '#8e44ad'] }
}], {
    ...layout,
    title: 'Bolus éjecté (% du total injecté)',
    yaxis: { title: '% éjecté' }
}, config);


// 2️⃣ Scatter : Oral transit time vs tA
const scatterDiv = document.getElementById('plot2');
Plotly.newPlot(scatterDiv, [{
    x: [-0.2, -0.1, 0, 0.1, 0.2], // tA en secondes
    y: [0.41, 0.37, 0.27, 0.37, 0.41], // temps de transit oral en secondes
    mode: 'lines+markers',
    marker: {
        size: 10,
        color: 'rgb(231, 76, 60)'
    },
    line: { color: '#c0392b' }
}], {
    ...layout,
    title: 'Temps de transit oral vs coordination (tA)',
    xaxis: { title: 'tA (s)' },
    yaxis: { title: 'Temps de transit oral (s)' }
}, config);


// 3️⃣ Zone empilée : Pression palatine
const areaDiv = document.getElementById('plot3');
Plotly.newPlot(areaDiv, [
    {
        x: [0.2, 0.4, 0.6, 0.8, 1], // temps en secondes
        y: [1, 4, 8, 10, 5], // pression antérieure
        name: 'Antérieure',
        fill: 'tozeroy',
        type: 'scatter',
        fillcolor: 'rgba(243, 156, 18, 0.5)'
    },
    {
        x: [0.2, 0.4, 0.6, 0.8, 1], // temps
        y: [0.5, 2, 6, 8, 4], // pression médiane
        name: 'Médiane',
        fill: 'tonexty',
        fillcolor: 'rgba(46, 204, 113, 0.5)'
    },
    {
        x: [0.2, 0.4, 0.6, 0.8, 1], // temps
        y: [0.2, 1, 3, 6, 3], // pression postérieure
        name: 'Postérieure',
        fill: 'tonexty',
        fillcolor: 'rgba(52, 73, 94, 0.5)'
    }
], {
    ...layout,
    title: 'Pression palatine pendant la déglutition',
    xaxis: { title: 'Temps (s)' },
    yaxis: { title: 'Pression (kPa)' }
}, config);


// 4️⃣ Camembert : Répartition des résidus bolus
const pieDiv = document.getElementById('plot4');
Plotly.newPlot(pieDiv, [{
    values: [13, 27, 60], // % résidus dans 3 zones
    labels: ['Antérieure', 'Médiane', 'Postérieure'],
    type: 'pie',
    marker: {
        colors: ['#1abc9c', '#3498db', '#9b59b6']
    }
}], {
    ...layout,
    title: 'Répartition des résidus bolus'
}, config);


// 5️⃣ Ligne : vitesse du bolus
const lineDiv = document.getElementById('plot5');
Plotly.newPlot(lineDiv, [{
    x: [0, 0.2, 0.4, 0.6, 0.8, 1], // temps (s)
    y: [0, 0.45, 0.25, 0.1, 0.05, 0], // vitesse (m/s)
    mode: 'lines+markers',
    line: { color: '#e67e22', width: 3 },
    marker: { color: '#d35400' },
    name: 'Vitesse bolus'
}], {
    ...layout,
    title: 'Vitesse intra-bolus (Doppler)',
    xaxis: { title: 'Temps (s)' },
    yaxis: { title: 'Vitesse (m/s)' }
}, config);


// 6️⃣ Ligne : volume bolus restant
const graph1 = document.getElementById('plot6');
Plotly.newPlot(graph1, [{
    x: [0, 0.5, 1, 1.5, 2, 2.5], // Temps en secondes
    y: [5, 4.2, 3.1, 2.0, 1.0, 0], // Volume en mL
    mode: 'lines+markers',
    line: { color: '#16a085', width: 3 },
    marker: { size: 6, color: '#1abc9c' },
    name: 'Volume bolus'
}], {
    ...layout,
    title: 'Dynamique de vidange du bolus',
    xaxis: { title: 'Temps (s)' },
    yaxis: { title: 'Volume restant (mL)' }
}, config);
