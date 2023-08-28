# API Frases Dev

Bem-vindo à Documentação da API Frases Dev! Esta API fornece frases aleatórias relacionadas a dicas técnicas. Ela é bem simples e foi projetada para uso em projetos pessoais.

**Disclaimer:** Boa parte das frases foram geradas por IA. Caso encontre alguma que seja passível de correção, sinta-se livre para corrigir. 

## Base URL

A base URL para todas as solicitações é:

https://api-frases-dev.vercel.app


## Endpoints

### Página Inicial
Exibe uma mensagem de boas-vindas e informações sobre a API.

```
GET /
```

Resposta:

```
Bem-vindo à API Frases Dev! Esta API é bem simples e foi construída, a princípio, apenas para uso em projetos pessoais simples. O endpoint /frase exibirá uma frase com uma dica tech!
```

### Obter uma Frase Aleatória

Retorna uma frase aleatória com uma dica técnica.

```bash
GET /dica
```

**Exemplo de Resposta:**

```bash
A depuração é duas vezes mais difícil do que escrever o código em primeiro lugar. Portanto, se você escrever o código o mais inteligível possível, não estará trapaceando.
```

### Paginação ###

Para obter uma quantidade específica de frases, utilize:

```bash
GET /frases?pagina=1&quantidade=10
```
No exemplo acima, se obterá as 10 primeiras frases (página 1). Você pode alterar a página e a quantidade de frases exibidas em cada uma delas conforme quiser.

## Erros
A API pode retornar os seguintes códigos de erro:

* 404 Not Found: O recurso solicitado não foi encontrado.
* 500 Internal Server Error: Ocorreu um erro interno no servidor.

## Exemplos de Uso

### Javascript
Exemplo 1:
```javascript
fetch('https://api-frases-dev.vercel.app/dica')
  .then(response => response.json())
  .then(data => {
    console.log(data.frase);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
```
Exemplo 2:
```javascript
async function obterFraseAleatoria() {
  try {
    const response = await fetch('https://api-frases-dev.vercel.app/dica');
    const data = await response.json();
    console.log(data.frase);
  } catch (error) {
    console.error('Erro:', error);
  }
}

obterFraseAleatoria();
```

### cURL

```bash
curl https://api-frases-dev.vercel.app/frase
```

## Considerações Finais

Considere se conectar ao meu LinkedIn: https://www.linkedin.com/in/andrelodeti/
