// Aqui fica as funções que serão reutilizadas com frequencia.
const d20 = Math.floor(Math.random()*(20-1 + 1)+1);

console.log(d20);


// Aqui ficará os dados dos personagens.
const personagem1 = {
	Nome: "Alex",
	Hp: 30,
	Def: 13,
	
	atributos: {
		For: 5,
		Agi: 3,
		Int: 2,
		Vit: 4,
	}
	
};

const inimigo1 = {
	Nome: "Lobo Corrompido",
	Def: 10,
	Atk: 3
};
