function msg() {
  console.log("Teste de função");
}

function soma(a, b) {
  return a + b;
}
msg();
console.log("Soma:", soma(10, 50));

const numeros = [10, 20, 60, 10, 30];
let total = 0;

function media(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return total / numeros.length;
}

console.log("A Média do vetor é:", media(numeros));
