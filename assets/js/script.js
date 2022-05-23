let imagem = document.querySelector("#imagem");
let button = document.querySelector("#proximo");
let situacao = document.querySelector("#situacao");
let info = document.querySelector("#info");
let nomePersonagem = document.querySelector("#nomePersonagem");
let index = 0;

let listaImagens = [];
for (let i = 0; i <= 7; i++) {
  listaImagens.push(`./assets/img/seteAnoes/${i}.png`);
}

const atchim =
  "Ele sabe que seus espirros incomodam os outros e tenta controlá-los sempre que possível, inclusive recebendo a ajuda de seus companheiros que colocam o dedo em seu nariz, mas quase nunca isso dá certo.";
const dengoso =
  "Ele é o mais sentimental dos anões e tem uma aparência muito parecida com a do Soneca e a do Atchim – a túnica roxa e a capa magenta o diferenciam. Ele também é tímido e se esconde atrás da barba ao ser elogiado pela princesa.";
const dunga =
  "Chamado de Mudo em Portugal, o Dunga era careca e sem barba, sendo um dos anões mais lembrados e queridos de todos. Por ser o caçula, ele acaba sendo bem mais infantil que os outros, agradando as crianças que se identificam com sua inocência.";
const feliz =
  "É o mais alegre de todos os anões, não ficando temeroso nem mesmo quando o “Monstro da Limpeza”, isto é, a Branca de Neve, aparece de supetão dentro da casa dos anões e começa a arrumar tudo. Ele só muda de comportamento quando a princesa morde a maçã envenenada e “morre”, mas daí ninguém consegue segurar, não é mesmo? ";
const mestre =
  "Por ser o mais experiente, ele é o líder dos anões. Sua experiência é vista nos cabelos brancos e nas palavras atrapalhadas quando ele pensa mais rápido do que consegue se expressar. Os óculos são acessórios fundamentais em sua caracterização.";
const soneca =
  "Apesar de ser o mais preguiçoso dos anões, sempre procurando dar uma cochiladinha, ele não mede esforços para minerar tanto quanto seus companheiros. Ele é visto bocejando e com os olhos pesados durante boa parte do tempo.";
const zangado =
  "O mais mal-humorado dos anões, Zangado torce o nariz quando eles encontram a Branca de Neve. 'Todas as mulheres são venenosas e cheias de maldades', ele chega a declarar. Porém, é a sua teimosia que acaba ajudando seus companheiros durante o resgate da princesa.";

const infoAnoes = [atchim, dengoso, dunga, feliz, mestre, soneca, zangado];

let listInfo = [];
for (let i = 0; i <= 7; i++) {
  listInfo.push(infoAnoes[i]);
}

let listaModos = [
  "Atchim",
  "Dengoso",
  "Dunga",
  "Feliz",
  "Mestre",
  "Soneca",
  "Zangado",
];

function mudar() {
  imagem.src = `${listaImagens[index]}`
  nomePersonagem.innerText = listaModos[index];
  info.innerText = `${listInfo[index]}`;
  index++;
  if (index > 7) {
    index = 0;
    imagem.src = "";
    nomePersonagem.innerText = "Clique no botão para ver os Personagens";
    info.innerText = "";
  }
}

button.addEventListener("click", mudar);
