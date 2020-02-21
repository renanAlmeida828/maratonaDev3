const express = require("express");
const server = express();

// definir o GET e configurar a apresentação da página
server.get("/", function(req, res){
    return res.send("hello")
})

// abrir a porta do servidor
server.listen(3000, function(){
    console.log("Servidor iniciado com Nodemon")
});