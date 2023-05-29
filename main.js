const textArea = document.querySelector(".textArea");
const msgEncriptado = document.querySelector(".msgEncriptado");
const desencriptarContainer = document.querySelector(".desencriptarContainer");
const btnCopiar = document.querySelector(".btnCopiar");
const sectionDesencriptar = document.querySelector(".desencriptar");
/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

const matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function funcEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  desencriptarContainer.style.display = "none";
  msgEncriptado.style.display = "block";
  btnCopiar.style.display = "block";
  sectionDesencriptar.style.justifyContent = "space-between";
  msgEncriptado.value = textoEncriptado;
}

function encriptar(stringEncriptar) {
  stringEncriptar = stringEncriptar.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptar.includes(matrizCodigo[i][0])) {
      stringEncriptar = stringEncriptar.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptar;
}

function btnDesencriptar() {
  const textoEncriptado = desEncriptar(textArea.value);
  msgEncriptado.value = textoEncriptado;
  textArea.value = "";
}

function desEncriptar(stringDesencriptar) {
  stringDesencriptar = stringDesencriptar.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptar.includes(matrizCodigo[i][1])) {
      stringDesencriptar = stringDesencriptar.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptar;
}

function copiarTexto() {
  msgEncriptado.select();
  msgEncriptado.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(msgEncriptado.value);
}
