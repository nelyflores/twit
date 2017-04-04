
	var contarletras=document.getElementById("escribirmensaje");
	contarletras.addEventListener("keyup",contarCaracteres);
	var botonEnviarMensaje=document.getElementById("enviar");
	botonEnviarMensaje.addEventListener("click",enviarComentario);

	function contarCaracteres () {
		var longitud= document.getElementById("escribirmensaje").value.length ;
		document.getElementById('numeroCaracteres').innerText="140/"+ longitud ;
		console.log(longitud)
	}

	function enviarComentario(){
		var comentario=document.getElementById("escribirmensaje").value;
		var autor=document.getElementById("creado").value;
		var twiter=document.getElementById("mensajeFinal");
		console.log(comentario);
		console.log(autor);
		var li=document.createElement("p");
	    li.innerHTML= comentario+ "<br>" + "por: "+ autor;
		document.getElementById("mensajeFinal").appendChild(li);
		console.log(comentario);
		console.log(autor);
		document.getElementById('escribirmensaje').value="";
		document.getElementById('creado').value="";
	}
