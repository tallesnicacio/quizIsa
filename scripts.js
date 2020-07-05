$("button").click(() => {

    event.preventDefault()

    var v1 = parseInt($("#v1 option:selected").text())
    var v2 = parseInt($("#v2 option:selected").text())
    var v3 = parseInt($("#v3 option:selected").text())
    var v4 = parseInt($("#v4 option:selected").text())
    var v5 = parseInt($("#v5 option:selected").text())
    var c1 = parseInt($("#c1 option:selected").text())
    var c2 = parseInt($("#c2 option:selected").text())
    var c3 = parseInt($("#c3 option:selected").text())
    var c4 = parseInt($("#c4 option:selected").text())
    var c5 = parseInt($("#c5 option:selected").text())
    var d1 = parseInt($("#d1 option:selected").text())
    var d2 = parseInt($("#d2 option:selected").text())
    var d3 = parseInt($("#d3 option:selected").text())
    var d4 = parseInt($("#d4 option:selected").text())
    var d5 = parseInt($("#d5 option:selected").text())
    var a1 = parseInt($("#a1 option:selected").text())
    var a2 = parseInt($("#a2 option:selected").text())
    var a3 = parseInt($("#a3 option:selected").text())
    var a4 = parseInt($("#a4 option:selected").text())
    var a5 = parseInt($("#a5 option:selected").text())

    var visual = v1 + v2 + v3 + v4 + v5

    var cinestesico = c1 + c2 + c3 + c4 + c5

    var digital = d1 + d2 + d3 + d4 + d5

    var auditivo = a1 + a2 + a3 + a4 + a5


    console.log(visual)
    console.log(cinestesico)
    console.log(digital)
    console.log(auditivo)


    //chartjs
    var ctx = document.getElementById('myChart');
    var ctx = document.getElementById('myChart').getContext('2d');
    var ctx = $('#myChart');
    var ctx = 'myChart';

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Visual', 'Cinestesico', 'Digital', 'Auditivo'],
            datasets: [{
                label: '',
                data: [visual, cinestesico, digital, auditivo],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        }
    });

    $("form").fadeOut()
    $("#opcoes").fadeOut()
    $("#graph").fadeIn()
    $("#titulo").fadeOut()
    $("#explica").fadeIn()

})

var canvas = $('#myChart');
var button = document.getElementById('btn-download');
button.addEventListener('click', function(e) {
    var dataURL = canvas[0].toDataURL('image/svg');
    button.href = dataURL;
});