import { Router } from 'express';
import aluno from '../controllers/aluno';
import loginRequired from '../middlewares/loginRequired';

const route = new Router();

route.get('/', aluno.index);
route.get('/:id', aluno.show);
route.post('/', loginRequired, aluno.store);
route.delete('/:id', loginRequired, aluno.delete);
route.put('/:id', loginRequired, aluno.update);

export default route;
