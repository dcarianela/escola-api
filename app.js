import express from 'express';

const app = express();
const porta = 3000;

/* CONFIGURANDO ROTAS */

// raiz da API
app.get('/', (req, res) => {
    res.send('API utilizando Node.js, Express e MySQL');
});

// Exibindo TODOS os alunos
app.get('/alunos', (req, res) => {
    res.send('Exibindo todos os alunos');
})

// Exibindo UM aluno
app.get('/alunos/1', (req, res) => {
    res.send('Exibindo dados de UM aluno');
})

// INSERINDO/CADASTRANDO/ADICIONANDO um aluno
app.post('/alunos', (req, res) => {
    res.send(`Exibindo dados de UM aluno`);
})

// ATUALIZANDO aluno
app.patch('alunos/1', (req, res) => {
    res.send(`Atualizando dados do aluno`);
})

// EXCLUINDO aluno
app.delete('aluno')

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});