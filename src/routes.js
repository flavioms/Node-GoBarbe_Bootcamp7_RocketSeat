import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import ProvidersController from './app/controllers/ProvidersController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import AppointmentController from './app/controllers/AppointmentController';
import NotificationController from './app/controllers/NotificationController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.get('/providers', ProvidersController.index);
routes.get('/appointment', AppointmentController.index);
routes.post('/appointment', AppointmentController.store);
routes.get('/schedule', ScheduleController.index);
routes.get('/notifications', NotificationController.index);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
