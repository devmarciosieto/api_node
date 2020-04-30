import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

const appintmentsRouter = Router();

const appintments: Appointment[] = [];

appintmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));



const horaDisponivel = appintments.find(vairavel =>
    isEqual(parseDate, vairavel.date),
    );



  const appintment = new Appointment(provider, parseDate)

  if (horaDisponivel){
    return response.status(400).json({ message: 'Este horario já está marcado!'})
  }

  appintments.push(appintment);

  return response.json(appintment);
});

export default appintmentsRouter;
