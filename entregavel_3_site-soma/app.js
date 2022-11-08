var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3001;
app.use(bodyParser.json());

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

// Api's
app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

app.post('/via-post', function (req, res) {
    var body = req.body;
    console.log(body);
    res.send('via post');
});

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = operacao(body.a, body.b, "+");
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/sub', function (req, res) {
    var body = req.body;
    var resultado = operacao(body.a, body.b, "-");
    res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/mult', function (req, res) {
    var body = req.body;
    var resultado = operacao(body.a, body.b, "*");
    res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/div', function (req, res) {
    var body = req.body;
    var resultado = operacao(body.a, body.b, "/");
    res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});

// functions
function operacao(a, b, sinal) {
    let resultado;

    switch (sinal) {
        case "+":
            resultado = a + b;
            break;
        case "-":
            resultado = a - b;
            break;

        case "/":
            resultado = a / b;
            break;
            
        case "*":
            resultado = a * b;
            break;
    
        default:
            break;
    }
    return resultado;
}
