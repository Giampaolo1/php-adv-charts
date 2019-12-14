function init() {
  getData();
  console.log("Hello World");
}
$(document).ready(init);

function getData() {
  $.ajax({
    url: "server.php",
    method: "GET",
    success: function(data) {
      // mi prendo i dati che mi servono x grafico 1
      printLineChart(data["fatturato"]);
      // mi prendo i dati che mi servono x grafico 2
      printPieChart(data["fatturato_by_agent"]);
      // mi prendo i dati che mi servono x grafico 3
      printLine2Chart(data["team_efficiency"]);


    },
    error: function(error) {
      console.log("error", error);
    }
  });
}

// Grafico 1 line
  function printLineChart(data) {

    var ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx, {
        // gli passo il tipo
        type: data['type'],
        data: {
            labels: moment.months(),
            datasets: [{
                label: 'Vendite',
                //gli passo i dati
                data: data['data']
            }]
        }
    });
}

// Grafico 2 pie
  function printPieChart(data) {

    // ora bisogna spaccare l array associativo, e le chiavi
    // andranno in label e i volori in data
    // utilizzando fx js classiche dedicate
    // object.keys e values.keys
    var names = Object.keys(data["data"]);
    var values = Object.values(data["data"]);

    var ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, {
        // gli passo il tipo
        type: data['type'],
        data: {
          // gli passo le labels(names)
          labels: names,
            datasets: [{
                //gli passo i dati
                data: values,
            }]
        }
    });
}

// Grafico 3 line2
// Un nuovo grafico a linea che mostra l’andamento di efficienza dei 3 team mese per mese, una linea per ogni team
  function printLine2Chart(data) {

    var teams = Object.keys(data["data"]);
    var values = Object.values(data["data"]);

    console.log(teams);
    console.log(values);


    var ctx = document.getElementById('line2Chart').getContext('2d');
    new Chart(ctx, {
        type: data['type'],
        data: {
            labels: moment.months(),
            datasets: [{
              label: teams[0],
              data: values[0],
            },
            {
              label: teams[1],
              data: values[1],
            },
            {
              label: teams[2],
              data: values[2],
            }
          ]
        }
    });
}
