const socket = io();

socket.on("mensagem", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  document.getElementById("chat").appendChild(li);
});


eventListener("keydown", function (event) {
  if (event.key === "Enter") {
    send();
  }
});

function send() {
  const input = document.getElementById("msg");
  if (input.value.trim() === "") {
    alert("Digite uma mensagem antes de enviar.");
    return;
  }
  socket.emit("mensagem", input.value);
  input.value = "";
}
function setNome() {
  const input = document.getElementById("Nome");
  socket.emit("setNome", input.value);
}
