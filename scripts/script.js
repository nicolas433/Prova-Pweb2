//Primeira
let creditInput = document.getElementById("number").childNodes;
let showHideBtn = document.getElementsByTagName("label")[0];

let data = document.getElementsByTagName("input");


let creditCardBox = document.getElementsByClassName("wrapper active")[0];

let hideControl = false;

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
submitBtn.preventDefault;

function addBlock(e) {
  e.preventDefault;
  for (let i = 0; i < creditInput.length; i++) {
    if (creditInput[i].value.size < 4) {
      console.log("foi");
    }
  }
}
submitBtn.addEventListener("click", () => addBlock(e));

//Terceira
submitBtn.type = "button";

function cleanInput() {
    /*
  for (let i = 0; i < creditInput.length; i++) {
    creditInput[i].value = "";
  }
*/
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
  let final = document.createTextNode(`MarterCard final ${creditInput[3].value}`);
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
  let vencimento = document.createTextNode("Vencimento");
  let span = document.createElement("span");
  let vencimento2 = document.createTextNode(`${data[6].value}/${data[7].value}`);
  span.appendChild(vencimento2);
  small2.appendChild(vencimento);
  small2.appendChild(span);
  p.appendChild(small2);

  let br3 = document.createElement("br");
  p.appendChild(br3);

  newCreditCard.appendChild(p);
  creditCardBox.appendChild(newCreditCard);
}

submitBtn.addEventListener("click", cleanInput);

//Quarta
let creditCards = document();
