import express from 'express';

import routes from './routes';

const app = express();

app.routes(routes);

app.get('/', (request, response) => response.json({ message: 'Hello Word DEV!' }));

app.listen(3333, () => console.log('✅ Sevidor Rodando na porta 3333'));
