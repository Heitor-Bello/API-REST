
//servidor http escutando o get com o jason:

import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';
//express é o gerenciador de rotas, os permite receber as coisas e devolvelas sobre o protocolo http

const app = express();

//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuração das rotas
app.use(statusRoute);
app.use(usersRoute);

//inicialização do servidor
app.listen(3000, () => {
  console.log('Aplicação executando na porta 3000!');
}); //subindo uma porta para requisição