const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

let frases = [];

async function lerFrases() {
  try {
    const data = await fs.readFile(path.join(__dirname, 'frases.json'), 'utf8');
    frases = JSON.parse(data).frases;
  } catch (err) {
    console.error('Erro ao ler o arquivo frases.json', err);
    throw new Error('Erro ao ler as frases.');
  }
}

app.use(cors());


function selecionarFraseAleatoria() {
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
  return fraseAleatoria;
}

app.get('/frase', (req, res) => {
  const fraseAleatoria = selecionarFraseAleatoria();
  res.send(fraseAleatoria);
});

app.get('/', (req, res) => {
  res.send('Bem-vindo à API Frases Dev! Esta API é bem simples e foi construída, a princípio, apenas para uso em projetos pessoais simples. O endpoint /frase exibirá uma frase com uma dica tech!');
});

async function startServer() {
  await lerFrases();
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

startServer();