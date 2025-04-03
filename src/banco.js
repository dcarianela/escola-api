import mysql from 'mysql2'; // importando o modulo

// dados da conexão
const conexao = mysql.createConnection ({
   host: 'db4free.net',
   user: 'namiiiiis',
   password: 'taeHYUNG<3',
   database: 'banco_banco75' 
});

// conectando e passando mensagem de erro
conexao.connect( erro => {
    if (erro){
        console.log(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}`); // apresenta o host no qual estamos conectado.
        
    }
});

// exportanto
export default conexao