import { Router } from 'express';
import user from '../controllers/user';
import loginRequired from '../middlewares/loginRequired';

const route = new Router();

route.get('/', user.index);
route.get('/:id', user.show);

route.post('/', user.store);
route.put('/', loginRequired, user.update);
route.delete('/', loginRequired, user.delete);

export default route;
