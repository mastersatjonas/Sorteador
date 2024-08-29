// Seleciona os elementos HTML que vamos precisar
const smallerInput = document.querySelector('.smaller');
const biggerInput = document.querySelector('.bigger');
const sortButton = document.querySelector('button');

// Adiciona um evento de clique ao botão "Sortear"
sortButton.addEventListener('click', () => {
  // Obtém os valores inseridos pelo usuário
  const smallerValue = parseInt(smallerInput.value);
  const biggerValue = parseInt(biggerInput.value);

  // Verifica se os valores são válidos
  if (isNaN(smallerValue) || isNaN(biggerValue)) {
    alert('Por favor, insira valores válidos!');
    return;
  }

  // Sorteia um número aleatório entre os dois valores
  const randomNumber = Math.floor(Math.random() * (biggerValue - smallerValue + 1)) + smallerValue;

  // Exibe o resultado em uma caixa de diálogo
  alert(`O número sorteado é: ${randomNumber}`);
});