let hpInimigo = document.getElementById("hpInimigo");
let inimigo = document.getElementById("inimigo");

let hpPlayer = document.getElementById("hpPlayer");
let player = document.getElementById("player");

let legInimigo = document.getElementById("legInimigo");
let legPlayer = document.getElementById("legPlayer");

// Aqui fica as funções de dados que serão reutilizadas com frequencia.
function d20(){
	return Math.floor(Math.random()*(20-1 + 1)+1);
};
function d12(){
	return Math.floor(Math.random()*(12-1 + 1)+1);
};
function d8(){
	return Math.floor(Math.random()*(8-1 + 1)+1);
}
function d6(){
	return Math.floor(Math.random()*(6-1 + 1)+1);
}
function d4(){
	return Math.floor(Math.random()*(4-1 + 1)+1);
}

const player1 = {
	Nome: "Alex",
	Hp: 30,
	Atk: 5,
	Def: 10
}

const inimigo1 = {
	Nome: "Troll",
	Hp: 30,
	Atk: 3,
	Def: 12
}

hpInimigo.innerHTML = inimigo1.Hp;
inimigo.innerHTML = inimigo1.Nome;

hpPlayer.innerHTML = player1.Hp;
player.innerHTML = player1.Nome;


function ataque(){
	let pAtk = d20();
	let iAtk = d12();
	
	inimigo1.Hp -= pAtk;
	player1.Hp -=  iAtk;
	
	hpInimigo.innerHTML = inimigo1.Hp;
	hpPlayer.innerHTML = player1.Hp;
	
	legInimigo.innerHTML = `Deu ${iAtk} de dano!`;
	legPlayer.innerHTML = `Deu ${pAtk} de dano!`
	
};


