//Primeira
let creditInput = document.getElementById("number").childNodes;
let showHideBtn = document.getElementsByTagName("label")[0];
let data = document.getElementsByTagName("input");
let creditCardBox = document.getElementsByClassName("wrapper active")[0];

let hideControl = false;

//Primeira
function showHide() {
  if (hideControl == false) {
    for (let i = 0; i < creditInput.length; i++) {
      creditInput[i].type = "text";
    }
    hideControl = true;
  } else {
    for (let i = 0; i < creditInput.length; i++) {
      creditInput[i].type = "password";
    }
    hideControl = false;
  }
}
showHideBtn.addEventListener("click", showHide);

//Segunda
let submitBtn = document.getElementsByTagName("input")[9];
submitBtn.type = "button";

function validInput() {
  if (data[5].value == "") {
    alert("Insira o nome no cartão");
    return false;
  }
  if (parseFloat(data[6].value) < 0 || parseFloat(data[6].value) > 12) {
    alert("Mês inserido é inválido");
    return false;
  }
  if (parseFloat(data[7].value) < 0 || parseFloat(data[7].value) > 31) {
    alert("Dia inserido é inválido");
    return false;
  }
  if (parseFloat(data[9].value) < 100) {
    alert("Insira um CVV válido");
    return false;
  }
  for (let i = 0; i < creditInput.length; i++) {
    if (parseFloat(creditInput[i].value) < 1000) {
      alert("Insira todos os digitos do cartão");
      return false;
    }
  }
  return true;
}

//Terceira
function submitCreditCard() {
  if (validInput() == true) {
    let newCreditCard = document.createElement("div");
    newCreditCard.className = "item";

    let logo = document.createElement("div");
    logo.className = "logo";
    let img = document.createElement("img");
    img.src = "assets/logo.png";
    logo.appendChild(img);
    newCreditCard.appendChild(logo);

    let p = document.createElement("p");
    let strong = document.createElement("strong");
    let final = document.createTextNode(
      `MarterCard final ${creditInput[3].value}`
    );
    strong.appendChild(final);
    p.appendChild(strong);
    let br = document.createElement("br");
    p.appendChild(br);

    let small = document.createElement("small");
    let nome = document.createTextNode(data[5].value);
    small.appendChild(nome);
    p.appendChild(small);
    let br2 = document.createElement("br");
    p.appendChild(br2);

    let small2 = document.createElement("small");
    let vencimento = document.createTextNode("Vencimento ");
    let span = document.createElement("span");
    let vencimento2 = document.createTextNode(
      `${data[6].value}/${data[7].value}`
    );

    span.appendChild(vencimento2);
    small2.appendChild(vencimento);
    small2.appendChild(span);
    p.appendChild(small2);

    let br3 = document.createElement("br");
    p.appendChild(br3);
    newCreditCard.appendChild(p);

    let close = document.createElement("div");
    close.className = "close";
    newCreditCard.appendChild(close);

    creditCardBox.appendChild(newCreditCard);
    newCreditCard.addEventListener("click", () => swap(newCreditCard));
    creditCards = document.getElementsByClassName("item");
    for (let i = 0; i < data.length; i++) {
      if (data[i].type != "button") {
        data[i].value = "";
      }
    }
  }
}
submitBtn.addEventListener("click", submitCreditCard);

//Quarta
let creditCards = document.getElementsByClassName("item");
let selectedCreditCard = document.getElementsByClassName(
  "item active margin"
)[0];

let selectedRemoveBtn = document.getElementsByClassName("close show");

function swap(creditCard) {
  creditCard.className = "item active margin";
  if (!!selectedCreditCard) {
    selectedCreditCard.className = "item";
    selectedCreditCard.children[2].className = "close";
    selectedCreditCard.children[2].removeEventListener("click", () =>
      removeCreditCard(creditCard)
    );
  }

  selectedCreditCard = creditCard;
  selectedCreditCard.children[2].className = "close show";
  selectedCreditCard.children[2].addEventListener("click", () =>
    removeCreditCard(creditCard)
  );
}

for (let i = 0; i < creditCards.length; i++) {
  creditCards[i].addEventListener("click", () => swap(creditCards[i]));
}

//Quinta
function removeCreditCard(creditCard) {
  creditCard.parentNode.removeChild(creditCard);
  creditCards = document.getElementsByClassName("item");
  selectedCreditCard = creditCards[0];
}
