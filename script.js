function init() {
  getData();
}
$(document).ready(init);

function getData() {
  $.ajax({
    url: "server.php",
    method: "GET",
    success: function(data) {

        var printData1 = data.fatturato;
        printData1(printData1.type, printData1.data);
    },
    error: function(error) {
      console.log("error", error);
    }
  });
}

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
