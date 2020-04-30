import { Router } from 'express';
import { uuid } from 'uuidv4';

const appintments = [];

const appintmentsRouter = Router();

appintmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;
  console.log(request.body)
  /*
  console.log(request.body)

  const appintment = {
    id: uuid(),
    provider,
    date,
  }

  appintments.push(appintment);

  return response.json(appintment);*/
  return response.json({m:"sdfs"})
});

export default appintmentsRouter;
