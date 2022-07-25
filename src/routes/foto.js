import { Router } from 'express';
import foto from '../controllers/foto';
import loginRequired from '../middlewares/loginRequired';

const route = new Router();

route.post('/', loginRequired, foto.store);

export default route;
