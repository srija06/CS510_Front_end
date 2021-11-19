let backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

let borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

//URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';
let labels = [];
let values = [];

getCharacters(url)
.then(data => getChart(data));

async function getCharacters(url) {
    const response = await fetch(url,{
        method: 'GET'
    });
return response.json();
}

function getChart(data) {
    let families = [];
    const map = new Map();
    for(const character of data) {
        let family = character.family;
        if(!map.has(family)) {
            map.set(family,1);
        }
        else {
            map.set(family, map.get(family)+ 1);
        }
    }
    for (let [key, value] of map) {
        if(value >= 2) {
            labels.push(key);
            values.push(value);
        }
    } 
    //console.log("Labels: ",labels);
    //console.log("Values: ",values);

        renderChart();    
}

let renderChart = () => {
    let donutChart = document.getElementById('dount-chart');
    new Chart(donutChart, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'My First Dataset',
                    data: values,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                },
            ],
        },
    });
};