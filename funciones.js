/*
function encriptar(){
    let texto = document.getElementById("texto").value
    let cifrado = texto
                       .replace(/a/gi,"ai")
                       .replace(/e/gi,"enter")
                       .replace(/i/gi,"imes")
                       .replace(/o/gi,"ober")
                       .replace(/u/gi,"ufat");

    return cifrado;
   
}
*/

let texto = document.getElementById("texto");
let mensaje = document.querySelector(".mensaje");

function activarBtn() {
  let encriptado = encriptar(texto.value);
  mensaje.value = encriptado;
}

function encriptar(stringEncriptar) {
  let regla = [
    ["e", "enter"],
    ["a", "ai"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
  ];

  stringEncriptar = stringEncriptar.toLowerCase();

  for (let i = 0; i < regla.length; i++) {
    if (stringEncriptar.includes(regla[i][0])) {
      stringEncriptar = stringEncriptar.replaceAll(regla[i][0], regla[i][1]);
    }
  }
  return stringEncriptar;
}
