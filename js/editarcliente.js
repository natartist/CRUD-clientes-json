import { obtenerCliente, editarCliente } from "./api.js";
import { validar, mostrarAlerta } from "./funciones.js";

(() => {
  // inputs campos del formulario
  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const telefonoInput = document.querySelector("#telefono");
  const empresaInput = document.querySelector("#empresa");
  const idInput = document.querySelector("#id");

  document.addEventListener("DOMContentLoaded" , async () => {
    const parametroURL = new URLSearchParams(window.location.search);
    const idCliente = parseInt (parametroURL.get("id"));
    const cliente = await obtenerCliente(idCliente); //cliente del api
    console.log(cliente);
    mostrarCliente(cliente);

    //Acceder al formulario
    const formulario = document.querySelector ("#formulario");

    formulario.addEventListener("submit", validarCliente);
  });

  function mostrarCliente(cliente) {
    const {nombre, email, telefono, empresa, id } = cliente;

    nombreInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
    idInput.value = id;
    
  }
function validarCliente(event) {
  event.preventDefault();

  const cliente = {
    nombre: nombreInput.value,
    email: emailInput.value,
    telefono: telefonoInput,
    empresa: empresaInput.value,
    id: idInput.value
  }

 if(validar(cliente)) {
   mostrarAlerta("Todos los campos son obligatorios");
   return;
 }
 editarCliente(cliente);
}


})()