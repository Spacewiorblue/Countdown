function refresh() {
    var refresh = (1000);
    mytime = setTimeout('display()', refresh)
}

function display() {
    var data = new Date();
    var date = data.getFullYear() + "-" + (data.getMonth() + 1) + '-' + data.getDate()
    var time = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
    document.getElementById("atual").innerHTML = date + " " + time
    refresh();
}
display();

function calc() {
    var input = document.getElementById("data").value
    var dataInput = new Date(input);
    var data = new Date().getTime();
    var timeDif = dataInput.getTime() - data;
    var resDia = Math.floor(timeDif / (1000 * 60 * 60 * 24) + 1);
    var resHour = Math.floor((timeDif / (1000 * 60 * 60)) % 24);
    var resMin = Math.floor((timeDif / (1000 * 60)) % 60);
    var resSec = Math.floor((timeDif / 1000)) % 60;

    document.getElementById("day").innerHTML = resDia
    document.getElementById("hour").innerHTML = resHour
    document.getElementById("minutes").innerHTML = resMin
    document.getElementById("seconds").innerHTML = resSec

    if (data >= dataInput) {
        document.getElementById("day").innerHTML = 'D';
        document.getElementById("hour").innerHTML = 'O';
        document.getElementById("minutes").innerHTML = 'N';
        document.getElementById("seconds").innerHTML = 'E';
    }
}

setInterval(function () { calc(); }, 1000)

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', function () { calc(); });
};

loadEventListeners();






