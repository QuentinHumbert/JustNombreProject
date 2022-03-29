const nombreCorrect = 10; //Math.round(Math.random() * 100 + 1);
let nombreInput; //= document.getElementById('test');
let nombreTentative = 3;
const btn = document.getElementById('btn');

console.log(nombreCorrect);
btn.addEventListener("click", getNumber);

function getNumber() {
    nInput = parseInt(document.getElementById('nombreInput').value);
    // nombreInput.innerHTML = nInput;
    return nInput;
}
nombreInput = getNumber();
console.log(nombreInput);