export function mostrarAlerta(mensaje) {
  const alerta = document.querySelector(".form-text");
  alerta.classList.add("error", "text-center", "mt-5");
  alerta.innerHTML = `
  <span>${mensaje}</span>
  `;
}
  export function validar(obj) {
  // true cdo falten campos
  //false cdo esten todos los campos
  //console.log(!Object.values(obj).every( input => input !== "" ));
return !Object.values(obj).every( input => input !== "" );
}