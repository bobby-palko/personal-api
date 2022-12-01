import express, { Application } from 'express';
import morgan from 'morgan';
import router from './routes';

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
  console.log('Server is listening on port', PORT);
});
