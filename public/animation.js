  document.onkeypress = function(event) {
    var a = document.getElementById("PULSE");
    if (event.key=='1') {
        a.classList.remove('grow2');
        a.classList.add('grow3');
        a.classList.remove('grow1');
        
    }
    else if (event.key=='2') {
        a.classList.remove('grow2');
        a.classList.remove('grow3');
        a.classList.add('grow1');
    }
    else if (event.key=='3') {
        a.classList.add('grow2');
        a.classList.remove('grow3');
        a.classList.remove('grow1');
    }
}