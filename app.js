const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

let frases = [];

fs.readFile('frases.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo frases.json', err);
    return;
  }

  frases = JSON.parse(data).frases;
});

app.get('/frase', (req, res) => {
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
  res.send(fraseAleatoria);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
