function init() {
  getData();
}
$(document).ready(init);

function getData() {
  $.ajax({
    url: "server.php",
    method: "GET",
    success: function(prendiIdati) {
        printData(prendiIdati);
    },
    error: function(error) {
      console.log("error", error);
    }
  });
}

function printData(data) {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
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
