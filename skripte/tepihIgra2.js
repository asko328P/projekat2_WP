var canvas = document.getElementById("mojCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 600, 600);
ctx.fillStyle = "#BABABA";

function kliknutaDesna(c, r) {
	if (sviElementi[c][r].hDesna == 0 && sviElementi[c][r].desna == 1) {
		sviElementi[c][r].desna = 2;
		ctx.fillStyle = "#EE0000";
		ctx.fillRect(r * velicinaPolja + velicinaPolja - debljinaLinije, c * velicinaPolja - debljinaLinije, debljinaLinije, velicinaPolja + debljinaLinije);
	}
}

function kliknutaDonja(c, r) {
	if (sviElementi[c][r].hDonja == 0 && sviElementi[c][r].donja == 1) {
		sviElementi[c][r].donja = 2;
		ctx.fillStyle = "#EE0000";
		ctx.fillRect(r * velicinaPolja - debljinaLinije, c * velicinaPolja + velicinaPolja - debljinaLinije, velicinaPolja + debljinaLinije, debljinaLinije);
	}
}


dimenzijaCanvasa = 600;

//ovaj broj mora biti neparan
velicinaIgralista = 9;
//ako je paran, mijenja ga da ne bude.
if (velicinaIgralista % 2 == 0) {
	velicinaIgralista++;
}

debljinaLinije = 7;
var sviElementi = [];

velicinaPolja = Math.floor(dimenzijaCanvasa / velicinaIgralista);

//pravljenje 2-dimenzionalne matrice popunjene objektima
for (i = 0; i < velicinaIgralista; i++) {
	sviElementi[i] = [];
	for (j = 0; j < velicinaIgralista; j++) {
		sviElementi[i][j] = {
			donja: 1,
			desna: 1,
			hDonja: 0,
			hDesna: 0
		};
	}
}

//postavljanja pocetnih linija
for (i = 0, nekiBroj = 0; i < velicinaIgralista / 2 - 1; i++) {
	nekiBroj = velicinaIgralista / 2;
	nekiBroj = Math.abs(nekiBroj);
	nekiBroj = Math.floor(nekiBroj);
	drugiBroj = nekiBroj + i;
	treciBroj = nekiBroj;
	nekiBroj = nekiBroj - i;
	sviElementi[i][nekiBroj].hDonja = 1;
	sviElementi[i][drugiBroj].hDonja = 1;
	sviElementi[drugiBroj][nekiBroj + treciBroj - 1].hDonja = 1;
	sviElementi[drugiBroj][i + 1].hDonja = 1;


	sviElementi[i + 1][nekiBroj - 1].hDesna = 1;
	sviElementi[i + 1][drugiBroj].hDesna = 1;
	sviElementi[drugiBroj][nekiBroj + treciBroj - 1].hDesna = 1;
	sviElementi[drugiBroj][i].hDesna = 1;

}

//postavljanje polja koja se ne mogu mijenjati
for (i = 0; i < velicinaIgralista; i++) {

	zastava = 0;

	for (j = 0; j < velicinaIgralista; j++) {
		if (sviElementi[i][j].hDesna == 0 && zastava == 0) {
			sviElementi[i][j].hDesna = 2;
			continue;

		}
		if (sviElementi[i][j].hDesna == 1 && zastava == 0) {
			zastava = 1;
			continue;
		}
		if (sviElementi[i][j].hDesna == 1 && zastava == 1) {
			zastava = 0;
			continue;
		}
	}
}
//postavljanje polja koja se isto tako ne mogu mijenjati
for (i = 0; i < velicinaIgralista; i++) {

	zastava = 0;

	for (j = 0; j < velicinaIgralista; j++) {
		if (sviElementi[j][i].hDonja == 0 && zastava == 0) {
			sviElementi[j][i].hDonja = 2;
			continue;

		}
		if (sviElementi[j][i].hDonja == 1 && zastava == 0) {
			zastava = 1;
			continue;
		}
		if (sviElementi[j][i].hDonja == 1 && zastava == 1) {
			zastava = 0;
			continue;
		}
	}
}


//crtanje razlictih polja polja
for (i = 0; i < velicinaIgralista; i++) {
	for (j = 0; j < velicinaIgralista; j++) {
		ctx.fillStyle = "#BABABA";
		if (sviElementi[i][j].donja == 1) {
			ctx.fillRect(j * velicinaPolja - debljinaLinije, i * velicinaPolja + velicinaPolja - debljinaLinije, velicinaPolja + debljinaLinije, debljinaLinije);
		}
		if (sviElementi[i][j].desna == 1) {
			ctx.fillRect(j * velicinaPolja + velicinaPolja - debljinaLinije, i * velicinaPolja - debljinaLinije, debljinaLinije, velicinaPolja + debljinaLinije);
		}
	}
}
for (i = 0; i < velicinaIgralista; i++) {
	for (j = 0; j < velicinaIgralista; j++) {
		ctx.fillStyle = "#EFEFEF";
		if (sviElementi[i][j].hDonja == 2) {
			ctx.fillRect(j * velicinaPolja - debljinaLinije, i * velicinaPolja + velicinaPolja - debljinaLinije, velicinaPolja + debljinaLinije, debljinaLinije);
		}
		if (sviElementi[i][j].hDesna == 2) {
			ctx.fillRect(j * velicinaPolja + velicinaPolja - debljinaLinije, i * velicinaPolja - debljinaLinije, debljinaLinije, velicinaPolja + debljinaLinije);
		}
	}
}

for (i = 0; i < velicinaIgralista; i++) {
	for (j = 0; j < velicinaIgralista; j++) {
		ctx.fillStyle = "#555555";
		if (sviElementi[i][j].hDonja == 1) {
			ctx.fillRect(j * velicinaPolja - debljinaLinije, i * velicinaPolja + velicinaPolja - debljinaLinije, velicinaPolja + debljinaLinije, debljinaLinije);
		}
		if (sviElementi[i][j].hDesna == 1) {
			ctx.fillRect(j * velicinaPolja + velicinaPolja - debljinaLinije, i * velicinaPolja - debljinaLinije, debljinaLinije, velicinaPolja + debljinaLinije);
		}
	}
}

gornjiMargin = 60;

//detektuje klikove
canvas.addEventListener('click', function(event) {
	klikDesno = 0;
	klikDole = 0;


	iks = event.pageX - (canvas.offsetLeft + canvas.clientLeft);
	ipsilon = event.pageY - gornjiMargin;

	kolona = iks / velicinaPolja;
	kolona = Math.floor(kolona);

	red = ipsilon / velicinaPolja;
	red = Math.floor(red);
	if (iks % velicinaPolja > velicinaPolja - debljinaLinije) {
		klikDesno = 1;
	}
	if (ipsilon % velicinaPolja > velicinaPolja - debljinaLinije) {
		klikDole = 1;
	}

	if (klikDole == 1 && klikDesno == 0) {
		console.log("kliknuta donja");
		kliknutaDonja(red, kolona);
	}
	if (klikDole == 0 && klikDesno == 1) {
		console.log("kliknuta desna");
		kliknutaDesna(red, kolona);
	}

	console.log("x: " + iks + ";    y:  " + ipsilon);

}, false);
