const PieChart = function(){
  const container = document.querySelector("#pie-chart");
  const chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title:  "Types of Pokemon I've caught.",
    series: [{
                name: "Type",
                data: [ //NEW
                {
                  name: "Fire",
                  y: 74,
                  color: "#ffac33"
                },
                {
                  name: "Water",
                  y: 25,
                  color: "#73b7ff",
                  sliced: true
                },
                {
                  name: "Nutella",
                  y: 23,
                  color: "salmon"
                },
                {
                  name: "Grass",
                  y: 1,
                  color: "#00ba2f"
                }]
              }]
            });

}
