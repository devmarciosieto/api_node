import { Router } from 'express';
import appointments from './appointments.routes'
import appintmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appintmentsRouter)

export default routes;
