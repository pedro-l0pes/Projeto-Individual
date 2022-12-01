var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarPontos", function (req, res) {
    usuarioController.cadastrarPontos(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
router.post("/verificarQtd", function (req, res) {
    usuarioController.verificarQtd(req, res);
});

router.post("/verificarGrafico", function (req, res) {
    usuarioController.verificarGrafico(req, res);
});

module.exports = router;