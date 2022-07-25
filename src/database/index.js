/* eslint-disable import/no-import-module-exports */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [User, Aluno, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => (model.init(connection)));
models.forEach((model) => model.associate && model.associate(connection.models));
