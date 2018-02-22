document.addEventListener('DOMContentLoaded', function(){
  app();
  // new PieChart();
  // const data = [{name: "Cohort 22", data: [1,4,2,5], color: "salmon"}];
  // const categories = ['COBOL', 'FORTRAN', 'BASIC', 'punch cards'];
  // new ColumnChart("Cohort data",data, categories);
})

const  app = function(){
  const url = "https://restcountries.eu/rest/v2/all";
  makeRequest(url, requestComplete);
}

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;

  let savedCountry = JSON.parse(localStorage.getItem('country'))
  const countries = JSON.parse(jsonString);

  prepareColumnChart(countries);
  // console.log(countries);
}

const prepareColumnChart = function(countries){
  const countryNames = [];
  const populations = [];
  const areas = [];
  countries.forEach(function(country){
    if (country.subregion === "Northern Europe" && country.population > 2000000){
      countryNames.push(country.name);
      populations.push(country.population);
      areas.push(country.area*20);
    }

  })
  const data = [];
  const areaSeries = {name: "Area", data: areas, color: "yellow"}
  const populationSeries = {name: "Population", data: populations, color: "salmon"}
  data.push(areaSeries);
  data.push(populationSeries)
  console.log(countryNames);
  console.log(populationSeries);
  createChart(countryNames, data);
}

const createChart = function(countryNames, populations){
  new ColumnChart("Population by country", populations, countryNames);

}
