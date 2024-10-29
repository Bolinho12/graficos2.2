const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    height: 700,
    title: {

    }
}
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container')
    .appendChild(grafico)
    plotly.newplot(grafico,data,layout)
    