import jsonServer from 'json-server';
const servidor = jsonServer.create();
const rota = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const porta = process.env.PORT || 3200; 

servidor.use(middlewares);
servidor.use(rota);


servidor.listen(porta);