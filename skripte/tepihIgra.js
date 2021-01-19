var canvas = document.getElementById("mojCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 600, 600);
ctx.fillStyle = "#BABABA";

function kliknutaDesna(r,c) {
	if (sviElementi[r][c].desna == 0) {

		if(sviElementi[r][c].donja==2 && sviElementi[r][c-1].desna==2 && sviElementi[r-1][c].donja==2)
		{
			if(cijiPotez==0)
			{
				player0bodovi++;
				ctx.fillStyle="#FF9751";
				ctx.fillRect(c*velicinaPolja,r*velicinaPolja,velicinaPolja-debljinaLinije,velicinaPolja-debljinaLinije);
			}
			else {
				player1bodovi++;

				ctx.fillStyle="#5172FF";
				ctx.fillRect(c*velicinaPolja,r*velicinaPolja,velicinaPolja-debljinaLinije,velicinaPolja-debljinaLinije);

			}
		}

		if(sviElementi[r][c+1].donja==2 && sviElementi[r][c+1].desna==2 && sviElementi[r-1][c+1].donja==2)
		{
			if(cijiPotez==0)
			{
				player0bodovi++;
				ctx.fillStyle="#FF9751";
				ctx.fillRect(c*velicinaPolja+velicinaPolja,r*velicinaPolja,velicinaPolja-debljinaLinije,velicinaPolja-debljinaLinije);

			}
			else {
				ctx.fillStyle="#5172FF";
				ctx.fillRect(c*velicinaPolja+velicinaPolja,r*velicinaPolja,velicinaPolja-debljinaLinije,velicinaPolja-debljinaLinije);

				player1bodovi++;
			}
		}

		console.log("player0bodovi:  "+player0bodovi+"           player1bodovi: "+player1bodovi);
		sviElementi[r][c].desna = 2;
		ctx.fillStyle = "#EE0000";
		ctx.fillRect(c * velicinaPolja + velicinaPolja - debljinaLinije, r * velicinaPolja - debljinaLinije, debljinaLinije, velicinaPolja + debljinaLinije);

		if(cijiPotez==0)
		{
			ctx.fillStyle = "#A84600";
			ctx.fillRect(c * velicinaPolja + velicinaPolja - debljinaLinije, r * velicinaPolja - debljinaLinije, debljinaLinije, velicinaPolja + debljinaLinije);

			cijiPotez=1;
		}
		else {
			ctx.fillStyle = "#003C8F";
			ctx.fillRect(c * velicinaPolja + velicinaPolja - debljinaLinije, r * velicinaPolja - debljinaLinije, debljinaLinije, velicinaPolja + debljinaLinije);

			cijiPotez=0;
		}
	}
}

function kliknutaDonja(r, c) {
	if (sviElementi[r][c].donja == 0) {

		if(sviElementi[r][c].desna==2 && sviElementi[r][c-1].desna==2 && sviElementi[r-1][c].donja==2)
		{
			if(cijiPotez==0)
			{
				player0bodovi++;
				ctx.fillStyle="#FF9751";
				ctx.fillRect(c*velicinaPolja,r*velicinaPolja,velicinaPolja-debljinaLinije,velicinaPolja-debljinaLinije);
			}
			else {
				player1bodovi++;
				ctx.fillStyle="#5172FF";
				ctx.fillRect(c*velicinaPolja,r*velicinaPolja,velicinaPolja-debljinaLinije,velicinaPolja-debljinaLinije);

			}
		}

		if(sviElementi[r+1][c-1].desna==2 && sviElementi[r+1][c].donja==2 && sviElementi[r+1][c].desna==2)
		{
			if(cijiPotez==0)
			{
				player0bodovi++;
				ctx.fillStyle="#FF9751";
				ctx.fillRect(c*velicinaPolja,r*velicinaPolja+velicinaPolja,velicinaPolja-debljinaLinije,velicinaPolja-debljinaLinije);

			}
			else {
				player1bodovi++;
				ctx.fillStyle="#5172FF";
				ctx.fillRect(c*velicinaPolja,r*velicinaPolja+velicinaPolja,velicinaPolja-debljinaLinije,velicinaPolja-debljinaLinije);

			}
		}





		console.log("player0bodovi:  "+player0bodovi+"           player1bodovi: "+player1bodovi);
		sviElementi[r][c].donja = 2;
		ctx.fillStyle = "#EE0000";
		ctx.fillRect(c * velicinaPolja - debljinaLinije, r * velicinaPolja + velicinaPolja - debljinaLinije, velicinaPolja + debljinaLinije, debljinaLinije);

		if(cijiPotez==0)
		{
			ctx.fillStyle = "#A84600";
			ctx.fillRect(c * velicinaPolja - debljinaLinije, r * velicinaPolja + velicinaPolja - debljinaLinije, velicinaPolja + debljinaLinije, debljinaLinije);

			cijiPotez=1;
		}
		else {
			ctx.fillStyle = "#003C8F";
			ctx.fillRect(c * velicinaPolja - debljinaLinije, r * velicinaPolja + velicinaPolja - debljinaLinije, velicinaPolja + debljinaLinije, debljinaLinije);

			cijiPotez=0;
		}

	}
}

//dimenzija kanvasa
dimenzijaCanvasa = 600;

//ovaj broj mora biti neparan
velicinaIgralista = 4;

//ako je paran, mijenja ga da ne bude.
if (velicinaIgralista % 2 == 0) {
	velicinaIgralista++;
}
//debljina Linije
debljinaLinije = 7;


//varijable za cuvanje par stanja
player0bodovi=0;
player1bodovi=0;
cijiPotez=0;

//drzi sve kockice u 2d matrici
var sviElementi = [];
//polja za velicinu kanvasa
velicinaPolja = Math.floor(dimenzijaCanvasa / velicinaIgralista);

//pravljenje 2-dimenzionalne matrice popunjene objektima
for (i = 0; i < velicinaIgralista; i++) {
	sviElementi[i] = [];
	for (j = 0; j < velicinaIgralista; j++) {
		sviElementi[i][j] = {
			donja: 0,
			desna: 0,

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
	sviElementi[i][nekiBroj].donja = 2;
	sviElementi[i][drugiBroj].donja = 2;
	sviElementi[drugiBroj][nekiBroj + treciBroj - 1].donja = 2;
	sviElementi[drugiBroj][i + 1].donja = 2;


	sviElementi[i + 1][nekiBroj - 1].desna = 2;
	sviElementi[i + 1][drugiBroj].desna = 2;
	sviElementi[drugiBroj][nekiBroj + treciBroj - 1].desna = 2;
	sviElementi[drugiBroj][i].desna = 2;

}

//postavljanje polja koja se ne mogu mijenjati


for (i = 0; i < velicinaIgralista; i++) {

	zastava = 0;

	for (j = 0; j < velicinaIgralista; j++) {
		if (sviElementi[i][j].desna == 0 && zastava == 0) {
			sviElementi[i][j].desna = 1;
			continue;

		}
		if (sviElementi[i][j].desna == 2 && zastava == 0) {
			zastava = 1;
			continue;
		}
		if (sviElementi[i][j].desna == 2 && zastava == 1) {
			zastava = 0;
			continue;
		}
	}
}
for (i = 0; i < velicinaIgralista; i++) {

	zastava = 0;

	for (j = 0; j < velicinaIgralista; j++) {
		if (sviElementi[j][i].donja == 0 && zastava == 0) {
			sviElementi[j][i].donja = 1;
			continue;

		}
		if (sviElementi[j][i].donja == 2 && zastava == 0) {
			zastava = 1;
			continue;
		}
		if (sviElementi[j][i].donja == 2 && zastava == 1) {
			zastava = 0;
			continue;
		}
	}
}

/*
//postavljanje polja koja se isto tako ne mogu mijenjati
for (i = 0; i < velicinaIgralista; i++) {

	zastava = 0;

	for (j = 0; j < velicinaIgralista; j++) {
		if (sviElementi[j][i].donja == 2 && zastava == 0) {
			sviElementi[j][i].donja = 1;
			continue;

		}
		if (sviElementi[j][i].donja == 2 && zastava == 0) {
			zastava = 1;
			continue;
		}
		if (sviElementi[j][i].donja == 1 && zastava == 1) {
			zastava = 0;
			continue;
		}
	}
}

*/

//crtanje razlictih polja polja
for (i = 0; i < velicinaIgralista; i++) {
	for (j = 0; j < velicinaIgralista; j++) {
		ctx.fillStyle = "#CCCCCC";
		if (sviElementi[i][j].donja == 0) {
			ctx.fillRect(j * velicinaPolja - debljinaLinije, i * velicinaPolja + velicinaPolja - debljinaLinije, velicinaPolja + debljinaLinije, debljinaLinije);
		}
		if (sviElementi[i][j].desna == 0) {
			ctx.fillRect(j * velicinaPolja + velicinaPolja - debljinaLinije, i * velicinaPolja - debljinaLinije, debljinaLinije, velicinaPolja + debljinaLinije);
		}
	}
}
for (i = 0; i < velicinaIgralista; i++) {
	for (j = 0; j < velicinaIgralista; j++) {
		ctx.fillStyle = "#EEEEEE";
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
		ctx.fillStyle = "#333333";
		if (sviElementi[i][j].donja == 2) {
			ctx.fillRect(j * velicinaPolja - debljinaLinije, i * velicinaPolja + velicinaPolja - debljinaLinije, velicinaPolja + debljinaLinije, debljinaLinije);
		}
		if (sviElementi[i][j].desna == 2) {
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

		kliknutaDonja(red, kolona);
	}
	if (klikDole == 0 && klikDesno == 1) {

		kliknutaDesna(red, kolona);

	}



}, false);
