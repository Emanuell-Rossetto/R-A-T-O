const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve arquivos estáticos (HTML, CSS, JS)
app.use(express.static(__dirname)); // <-- isso vai dentro do server.js

io.on("connection", (socket) => {
  console.log("Usuário conectado:", socket.id);

  socket.on("mensagem", (msg) => {
    msg = socket.Nome + ": " + msg;
    console.log("Mensagem recebida:", msg);
    io.emit("mensagem", msg);
  });

  socket.on("disconnect", () => {
    console.log("Usuário desconectou:", socket.id);
  });

  socket.on("setNome", (Nome) => {
    console.log("Dado de teste recebido:", Nome);
    socket.Nome = Nome;
  });
});

server.listen(3000,"0.0.0.0", () => {
  console.log("Servidor rodando em http://localhost:3000");
});
