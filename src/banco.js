import mysql from 'mysql2'; // imortando o modulo

// dados da conexão
const conexao = mysql.createConnection ({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'escola-api' 
});

// conectando e passando mensagem de erro
conexao.connect( erro => {
    if (erro){
        console.log(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado com sucesso.`);
        
    }
});

// exportanto
export default conexao