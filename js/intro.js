// Escopo - amplo - público
var num = 10;

// Escopo do bloco que foi criado
let nome = "Marcos";

// Constante
const lotacao = "Petrópolis";

idade = 29;

if (num == 10) {
  var teste = "oi";
}

//console.log(idade);

const a = { nome: "Maria", sobrenome: "Silva", idade: 55 };
console.log(10 === 10);

let media = 7.5;

//media < 7 reprovado - > 7 aprovado - > 9 aprovado com excelência
console.log(
  media >= 9 ? "Aprovado com excelência" : media >= 7 ? "Aprovado" : "Reprovado"
);

let statusPedido = "Aguardando envio";
let statusPagamento = "Pago";

// Se statusPedido == aguardando envio e statusPagamento == pago - entrega liberada senão entrega não liberada
console.log(
  statusPedido == "Aguardando envio" && statusPagamento == "Pago"
    ? "Entrega liberada"
    : "Entrega não liberada"
);

//Vetor

var times = new Array();
let cores = [];
let cursos = ["JavaScript", "HTML", "CSS", "React", "Angular"];

cores.push("Azul");
cores.push("Preto");
cores.push("Vermelho");
cores.unshift("Amarelo");
cores.sort();
cores.reverse();

cores.forEach((f) => console.log(f));

//console.log(cores[0]);

const livros = [
  {
    titulo: "Redes",
    autor: "Laércio de Vasconcelos",
    paginas: 200,
    lingua: "Português",
    disponivel: true,
  },

  {
    titulo: "Java",
    autor: "Deitel",
    paginas: 300,
    lingua: "Português",
    disponivel: true,
  },
];
