let creditInput = document.getElementById("number").childNodes;
let showHideBtn = document.getElementsByTagName("label")[0];

let hideControl = false;

function showHide(){
    if(hideControl==false){
        for (let i = 0; i < creditInput.length; i++) {
            creditInput[i].type = "text";
        }
        hideControl=true;
    }else{
        for (let i = 0; i < creditInput.length; i++) {
            creditInput[i].type = "password"; 
        }
        hideControl=false;
    }
}

showHideBtn.addEventListener("click", showHide);




//console.log(creditInput);