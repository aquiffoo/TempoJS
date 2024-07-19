var intervalo;
var loading = document.getElementById("loading");
var h = 0, m = 0, s = 0;

function tempo(op) {
    if (op == 1) {
        h = parseInt(document.getElementById('hora-input').value) || 0;
        m = parseInt(document.getElementById('minuto-input').value) || 0;
        s = parseInt(document.getElementById('segundo-input').value) || 0;

        document.getElementById('parar').style.display = "block";
        document.getElementById('comeca').style.display = "none";
    }

    intervalo = window.setInterval(function() {
        if (s == -1) {
            s = 59;
            m--;
        }

        if (m == -1) {
            m = 59;
            h--;
        }

        if (h < 0) {
            clearInterval(intervalo);
            h = 0;
            m = 0;
            s = 0;
        }

        document.getElementById("hora").innerHTML = h.toString().padStart(2, '0') + ":";
        document.getElementById("minuto").innerHTML = m.toString().padStart(2, '0') + ":";
        document.getElementById("segundo").innerHTML = s.toString().padStart(2, '0');

        if (s >= 0) {
            s--;
        } else {
            s = 59;
            m--;
        }

        if (h === 0 && m === 0 && s === 0) {
            loading.innerHTML = "Carregando...";
        } else {
            loading.innerHTML = "";
        }
    }, 1000);
}

function parar() {
    window.clearInterval(intervalo);
    document.getElementById('parar').style.display = "none";
    document.getElementById('comeca').style.display = "block";
}

window.onload = function() {
    document.getElementById('parar').style.display = "none";
    document.getElementById('comeca').style.display = "block";
};
