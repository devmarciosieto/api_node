import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello Word DEV!' }));

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('✅ Sevidor Rodando na porta 3333'));
