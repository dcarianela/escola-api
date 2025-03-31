import express from 'express';
import { ler, inserir, lerUM, excluir } from './src/alunos.js';

const app = express();
const porta = 3000;

// habilitando para dar suporte ao formato JSON
app.use(express.json());

// habilitando para dar suporte a dados inseridos a partir de inputs de formulário
app.use(express.urlencoded({extended:true}));

/* CONFIGURANDO ROTAS */

// raiz da API
app.get('/', (req, res) => {
    res.send('API utilizando Node.js, Express e MySQL');
});

// Exibindo TODOS os alunos
app.get('/alunos', (req, res) => {
   ler(res);
})

// Exibindo UM aluno
app.get('/alunos/:id', (req, res) => {
    // res.send('Exibindo dados de UM aluno');

    // capturando o ID que vem do endpoint
    const id = parseInt(req.params.id);

    // chamando a função
    lerUM(id, res);
})

// INSERINDO/CADASTRANDO/ADICIONANDO um aluno
app.post('/alunos', (req, res) => {
    // res.send(`INSERINDO um aluno`);

    // capturando os dados a partir do corpo da requisição
    const novoAluno = req.body;

    // executando a função inserir e passando os parâmetro novoAluno e res
    inserir(novoAluno, res);
})

// ATUALIZANDO aluno
app.patch('alunos/1', (req, res) => {
    res.send(`Atualizando dados do aluno`);
})

// EXCLUINDO aluno
app.delete('/alunos/:id', (req, res) => {
    //capturando o id
    const id = parseInt(req.params.id);
    excluir(id, res);
})


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});