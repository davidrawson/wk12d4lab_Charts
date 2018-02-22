const ColumnChart = function(name, data, categories){



  const container = document.getElementById("column-chart");
  const chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title: {
      text: name
    },
    series: data,
  xAxis: {
    categories: categories
  },
  yAxis: {
    title: "Population",
    text: "Population"
  }
})
}
