var intervalo;

function tempo(op) {
    if (op == 1) {
		document.getElementById('parar').style.display = "block";
		document.getElementById('comeca').style.display = "none";
	}
	var s = 59;
	var m = 14;
	var h = 0;
	intervalo = window.setInterval(function() {
		if (s == 60) { m--; s = 60; } else if (s > 60) { m = 15; s = 59 } else if (s == -1) { s = 59; m--; }
		if (m == 60) { h--; s = 60; m = 60; }
		if (h > 10) document.getElementById("hora").innerHTML = h + ":"; else document.getElementById("hora").innerHTML = h + ":";
		if (s > 10) document.getElementById("segundo").innerHTML = s; else document.getElementById("segundo").innerHTML = s;
		if (m > 10) document.getElementById("minuto").innerHTML = m + ":"; else document.getElementById("minuto").innerHTML = m + ":";		
		if (s >= 0) {
			s--;
		} else {
			s = 60;
			s--;
		}
	},1000);
}

function parar() {
	window.clearInterval(intervalo);
	document.getElementById('parar').style.display = "none";
	document.getElementById('comeca').style.display = "block";
}

function volta() {
	document.getElementById('voltas').innerHTML += document.getElementById('hora').firstChild.data + "" + document.getElementById('minuto').firstChild.data + "" + document.getElementById('segundo').firstChild.data + "<br>";
}

function limpa() {
	document.getElementById('voltas').innerHTML = "";
}
window.onload=tempo;