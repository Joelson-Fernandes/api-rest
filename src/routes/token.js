import { Router } from 'express';
import token from '../controllers/token';

const route = new Router();

route.post('/', token.store);

export default route;
