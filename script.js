const form = document.querySelector("#atividade");
const nomeAtividade = document.querySelector("#nome-atividade");
const notaAtividade = document.querySelector("#nota-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste">';
const atividades = [];
const notas = [];
const aprovado = '<span class="resultado aprovado">Aprovado</span>';
const reprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = +prompt("Digite a nota Mínima");

let linhas = "";

function addEventForm(event) {
  event.preventDefault();
  validaAtividade();
  atualizaTabela();
  atualizaMedia();
}

function validaAtividade() {
  const inputNomeAtividade = nomeAtividade.value;
  const inputNotaAtividade = +notaAtividade.value;

  if (atividades.includes(inputNomeAtividade)) {
    alert(`A atividade ${inputNomeAtividade} já foi inserida`);
  } else {
    atividades.push(inputNomeAtividade);
    notas.push(inputNotaAtividade);

    let linha = "<tr>";
    linha += `<td>${inputNomeAtividade}</td>`;
    linha += `<td>${inputNotaAtividade}</td>`;
    linha += `<td>${
      inputNotaAtividade >= notaMinima ? imgAprovado : imgReprovado
    }</td>`;
    linha += `</tr>`;

    linhas += linha;
  }
  nomeAtividade.value = "";
  notaAtividade.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
  const mediaFinal = calculaMedia();

  document.getElementById("media-final-valor").innerHTML = mediaFinal;
  document.getElementById("media-final-resultado").innerHTML =
    mediaFinal >= notaMinima ? aprovado : reprovado;
}

function calculaMedia() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return (media = somaDasNotas / notas.length);
}

form.addEventListener("submit", addEventForm);
