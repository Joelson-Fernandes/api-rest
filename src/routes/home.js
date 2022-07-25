import { Router } from 'express';
import home from '../controllers/home';

const route = new Router();

route.get('/', home.index);

export default route;
