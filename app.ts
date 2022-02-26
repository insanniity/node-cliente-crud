import express from "express";
import ClientsRouter from "./routes/clients";
import db from './db';
import methodOverride from 'method-override';

const app = express();
const port = parseInt(process.env.PORT || "3000");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(ClientsRouter);
app.set('view engine','pug');
app.set('views','./views');

db.sync()
  .then(() => {console.log(`Database Conectada com sucesso!`)})
  .then(() => {app.listen(port, () => {console.log(`Servidor rodando na porta ${port}`)})})
  .catch(err => { console.log(`Erro ao conectar com o banco de dados: ${err}`)});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });