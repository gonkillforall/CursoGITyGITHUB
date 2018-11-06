firebase.initializeApp({
  apiKey: "AIzaSyAT3GaQmezgLXEB4RV3jnStb8c4kH_jG_A",
  authDomain: 'mi-fabuloso-proyectuki.firebaseapp.com',
  projectId: 'mi-fabuloso-proyectuki'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function guardarUsuario(){

	var nombre = document.getElementById('Nombre').value;
	var apellido = document.getElementById('Apellido').value;
	var fecha = document.getElementById('Fecha').value;

	db.collection("users").add({
	    first: nombre,
	    last: apellido,
	    born: fecha
	})
	.then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	    limpiarUsuario();			

	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});	
}

function limpiarUsuario(){
	document.getElementById('nombre').value = '';
	document.getElementById('apellido').value = '';
	document.getElementById('fecha').value = '';
}








