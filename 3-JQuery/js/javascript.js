//Funcion para cargar y mostrar los estudiantes
$(document).ready(function() {
		var contador;
		if (localStorage.length > 0) {
			contador = localStorage.length + 1;
		}else{
			contador = 1;
		}

		$("#id").val(contador);
		$("#registrar").click(function() {
			var id = $("#id").val();
			var nombre = $("#nombre").val();
			var nota = $("#nota").val();

			var codigo = {
				id:id,
				nombre:nombre,
				nota:nota
			};
			localStorage.setItem(id, JSON.stringify(codigo));
			contador = localStorage.length + 1;
			listarEstudiantes();
			limpiarCampos();
			});

		function limpiarCampos(){
		$("#id").val(contador);
		$("#nombre").val("");
		$("#nota").val("");
		}

		listarEstudiantes();
		$("#nota").val();
		});

//Mostrar Promedio
$(document).ready(function(){
	$("#promedio").click(function(){
		var suma = 0;
  		var numero = 0;
  		for (var i = 0; i < localStorage.length; i++) {
			var clave = localStorage.key(i);
			var codigo = $.parseJSON(localStorage.getItem(clave));
			numero = localStorage.length;
    	if (!isNaN(codigo.nota)) {
      	suma += parseFloat(codigo.nota);
    	}
  		}
  	if (numero > 0) {
    alert("La nota Promedio es: " + (suma / numero));
  }
	});
});

//Mostrar NotaAlta
$(document).ready(function() {
	$("#notaAlta").click(function() {
		var nota_mayor = 0;
		var nombre_estudiante = "";

		for (var i = 0; i < localStorage.length; i++) {
			var clave = localStorage.key(i);
			var codigo = $.parseJSON(localStorage.getItem(clave));

			if (nota_mayor < codigo.nota) {
				nota_mayor = codigo.nota;
				nombre_estudiante = codigo.nombre;
			}
		}
		alert("La nota mayor es: "+nota_mayor+" del/la estudiante: "+nombre_estudiante); 
	});
});

//Mostrar NotaBaja
$(document).ready(function() {
	$("#notaBaja").click(function() {
		var nota_menor = 100;
		var nombre_estudiante = "";

		for (var i = 0; i < localStorage.length; i++) {
			var clave = localStorage.key(i);
			var codigo = $.parseJSON(localStorage.getItem(clave));

		if (nota_menor > codigo.nota) {
				nota_menor = codigo.nota;
				nombre_estudiante = codigo.nombre;
			}
		}
		alert("La nota menor es: "+nota_menor+" del/la estudiante: "+nombre_estudiante); 
	});
});

function listarEstudiantes() {
		var tabla = "";
		var parrafo1 = $("#p1");

		tabla += '<table border = "1">';
		tabla += '<tr>';
		tabla += '<th>ID</th>';
		tabla += '<th>NOMBRE</th>';
		tabla += '<th>NOTA</th>';
		tabla += '<th>EDITAR</th>';
		tabla += '<th>ELIMINAR</th>';
		tabla += '</tr>';

		for (var i = 0; i < localStorage.length; i++) {
			var clave = localStorage.key(i);
			var codigo = $.parseJSON(localStorage.getItem(clave));
			tabla += '<tr>';
			tabla += '<td>'+codigo.id+'</td>';
			tabla += '<td>'+codigo.nombre+'</td>';
			tabla += '<td>'+codigo.nota+'</td>';
			tabla += '<td><button onclick="editarEstudiante(\''+codigo.id+'\');">Editar</button></td>';
			tabla += '<td><button onclick="eliminarEstudiante(\''+codigo.id+'\');">Eliminar</button></td>';
			tabla += '</tr>';
			}
			tabla += '</table>';
			$(parrafo1).html(tabla);
		}


//Eliminar Estudiante
function eliminarEstudiante(id) {

		localStorage.removeItem(id);
		listarEstudiantes();
}

//Editar Estudiante
function editarEstudiante(id) {
		var codigo;
		for (var i = 0; i < localStorage.length; i++) {
			var clave = localStorage.key(i);
			if (clave == id) {
				codigo = $.parseJSON(localStorage.getItem(clave));

				$("#id").val(codigo.id);
				$("#nombre").val(codigo.nombre);
				$("#nota").val(codigo.nota);
			}
		}
	}
 

