import { Router, Request, Response } from 'express';
import { CreateUserController } from '../moda/src/controllers/user/CreateUserController';
const router = Router();

//rotas da controller 
const routerUsers = Router();

router.post('/userinsert',new CreateUserController().handle)
export { router };
