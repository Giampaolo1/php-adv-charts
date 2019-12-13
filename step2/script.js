function init() {
  getData();
}
$(document).ready(init);

function getData() {
  $.ajax({
    url: "server.php",
    method: "GET",
    success: function(data) {
        console.log(data);
        var datiGrafico = data.fatturato;
        printData(datiGrafico.type, datiGrafico.data);
    },
    error: function(error) {
      console.log("error", error);
    }
  });
}

// Grafico 1
  function printData(type, data) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: moment.monthsShort(),
            datasets: [{
                label: 'Vendite',
                data: data,
                backgroundColor: [
                  'green',
                ],
                borderColor: [
                  'red',
                ],
                borderWidth: 3,
                pointBackgroundColor: [
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                  "red",
                ],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
  });
}
