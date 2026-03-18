let hpInimigo = document.getElementById("hpInimigo");
let inimigo = document.getElementById("inimigo");
let hpPlayer = document.getElementById("hpPlayer");
let player = document.getElementById("player");

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


