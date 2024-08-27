import { Router } from 'express';
import { registerUser , LoginUser } from '../controllers/authController';
import { validateRegiseter, validateLogin } from '../middlewares/authMiddleware';

const authRouter = Router();


// register a user

authRouter.post('/register', validateRegiseter, registerUser);

//login user
authRouter.post('/login', validateLogin, LoginUser);


export default authRouter;