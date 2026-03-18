let teste = document.getElementById("teste");

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

// Aqui ficará os dados dos personagens.
const alex = {
	Nome: "Alex",
	Hp: 30,
	Def: 13,
	
	atributos: {
		For: 5,
		Agi: 3,
		Int: 2,
		Vit: 4,
	}
	console.log(alex.atributos.For)
};

const inimigo1 = {
	Nome: "Lobo Corrompido",
	Def: 10,
	Atk: 3
};

//Aqui fica as funçõs de ataque.
function atkAlex(){
	let atk = d20();
	
	if(atk==20){
		teste.innerHTML = `Ataque Crítico${atk+d8()}`
		
	}else{
		teste.innerHTML = atk
	}
}

