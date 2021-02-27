//const formulario = document.getElementById('formulario')
const formInput = document.getElementById('form-input');
const lista = document.querySelector('lista');
const addItem = document.getElementById('add-item');

addItem.addEventListener('click', crearLista);

function crearLista() {
    const li = document.createElement("li"); 
	li.appendChild(document.createTextNode(formInput.value)); 
	
	formInput.value = ""; 
}
lista.appendChild(li); 