function init() {
  getData();
}
$(document).ready(init);

function getData() {
  $.ajax({
    url: "server.php",
    method: "GET",
    success: function(data) {
        printChartJs(data);
    },
    error: function(error) {
      console.log("error", error);
    }
  });
}

// Grafico
function printChartJs(data) {

    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: moment.months(),
            datasets: [{
                label: 'Vendite',
                data: data
            }]
        }
    });

}
