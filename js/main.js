function todoList() {


	var digitacaoUsu    = document.getElementById('todoInput').value

	

	var criandoTexto    = document.createTextNode(digitacaoUsu)


	var novoItem = document.createElement('li')


	novoItem.appendChild(criandoTexto)


	document.getElementById('todoList').appendChild(novoItem)

}