# API Frases Dev

Bem-vindo à Documentação da API Frases Dev! Esta API fornece frases aleatórias relacionadas a dicas técnicas. Ela é bem simples e foi projetada para uso em projetos pessoais.

## Base URL

A base URL para todas as solicitações é:

https://api-frases-dev.vercel.app


## Endpoints

### Obter uma Frase Aleatória

Retorna uma frase aleatória com uma dica técnica.

```bash
GET /frase
```

**Exemplo de Resposta:**

```bash
A depuração é duas vezes mais difícil do que escrever o código em primeiro lugar. Portanto, se você escrever o código o mais inteligível possível, não estará trapaceando.
```
### Página Inicial
Exibe uma mensagem de boas-vindas e informações sobre a API.

```
GET /
```

Resposta:

```
Bem-vindo à API Frases Dev! Esta API é bem simples e foi construída, a princípio, apenas para uso em projetos pessoais simples. O endpoint /frase exibirá uma frase com uma dica tech!
``` 

## Erros
A API pode retornar os seguintes códigos de erro:

* 404 Not Found: O recurso solicitado não foi encontrado.
* 500 Internal Server Error: Ocorreu um erro interno no servidor.

## Exemplos de Uso

### Javascript (fetch)

```javascript
fetch('https://api-frases-dev.vercel.app/frase')
  .then(response => response.json())
  .then(data => {
    console.log(data.frase);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
```

### cURL

```bash
curl https://api-frases-dev.vercel.app/frase
```

## Considerações Finais

Considere se conectar ao meu LinkedIn: https://www.linkedin.com/in/andrelodeti/
