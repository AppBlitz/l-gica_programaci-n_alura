// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listFriend = [];


// función que permite agregar al amigo a la lista
function agregarAmigo() {
  let friend = document.getElementById("amigo").value;
  if (friend === "") alert("Campo no puede estar vacio") /* Verifica que el campo no este vacio */
  listFriend.push((friend));
  listFriendst();
}

// función que  nos da una posicion de pseudoaleatorio de la lista de amigos
function positionFriend() {
  return Math.floor(Math.random() * listFriend.length);
}
// Con esta función se van mostrando todos los amigos que vamos agregando a la lista de amigos
// Modificamos la lista de amigos
function listFriendst() {
  let listFriends = document.getElementById("listaAmigos");
  let li = document.createElement("li");
  let friends = document.createTextNode(listFriend[listFriend.length - 1] + "\n");
  li.appendChild(friends);
  listFriends.appendChild(li);
}

//  Se aortea el amigo caundo se queire saber el amigo y nos muestra un amigo  con una posición
function sortearAmigo() {
  let result = document.getElementById("resultado");
  let li = document.createElement("li");
  let text = document.createTextNode(listFriend[positionFriend()]);
  li.appendChild(text);
  result.appendChild(li);
}
