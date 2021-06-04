import express from 'express';
import UserController from '../controllers/UserController';
import middlewares from '../middlewares';

const {
  signUp,
  login,
  fetchOwnProfile,
  updateProfile,
  fetchProfile,
  confirmEmail,
  resetPassword
} = UserController;

const userRoute = express();

userRoute.post('/register', signUp);
userRoute.post('/login', login);
userRoute.get('/:user_id', middlewares.verifyToken, fetchOwnProfile);
userRoute.patch('/:user_id', middlewares.verifyToken, updateProfile);
userRoute.get('/admin/:user_id', fetchProfile);
userRoute.get('/confirm-email', middlewares.verifyToken, confirmEmail);
userRoute.patch('/password-reset/:user_id',middlewares.verifyToken, resetPassword);

export default userRoute;
