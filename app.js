import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();
import './src/database';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import home from './src/routes/home';
import user from './src/routes/user';
import aluno from './src/routes/aluno';
import token from './src/routes/token';
import foto from './src/routes/foto';

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, calback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      calback(null, true);
    } else {
      calback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users/', user);
    this.app.use('/alunos/', aluno);
    this.app.use('/tokens/', token);
    this.app.use('/foto/', foto);
  }
}

export default new App().app;
