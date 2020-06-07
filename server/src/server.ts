import express, { response } from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());

//GET: busca
//POST: Cria
//PUT: Atualiza td
//DELETE: Remove

//request param vem na propria rota que indica um recurso
//query param (?...) nao sao obrigatorios,para filtro,etc
//request body: parametros para criacao/atualizacao

//Select * from .. where name = 'Diego'
//knex('users').where('name,'Diego').select('*)

const users = [ 
  'Diego',
  'Cleiton',
  'Cristiane',
  'Daniel',
  'Robson'
];

app.get('/', (req,res) => {
  return response.json('hi');
});



app.listen(3333);