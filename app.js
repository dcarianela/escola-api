import express from 'express';
import { ler, inserir, lerUM, excluir, atualizar } from './src/alunos.js';
import cors from 'cors';

const app = express();
const porta = process.env.PORT || 3000;

// habilitando para dar suporte ao formato JSON
app.use(express.json());

// habilitando para dar suporte a dados inseridos a partir de inputs de formulário
app.use(express.urlencoded({extended:true}));

app.use(cors());

/* CONFIGURANDO ROTAS */

// raiz da API
app.get('/', (req, res) => {
    // res.send('API utilizando Node.js, Express e MySQL');
    res.redirect(`https://documenter.getpostman.com/view/43728819/2sB2cSi4Mf`);
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
app.patch('/alunos/:id', (req, res) => {
    // res.send(`Atualizando dados do aluno`);

    // capturar id
    const id = parseInt(req.params.id);

    // pegando as informações do body
    const aluno = req.body;
    
    atualizar(id, aluno, res);
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