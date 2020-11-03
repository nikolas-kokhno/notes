import express from 'express';
import './db/connections';
import { projectRouter, taksRouter } from './routes';

const PORT = 4444;
const app = express();
app.use(express.json());

app.use('/api/projects', projectRouter);
app.use('/api/tasks', taksRouter);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING: http://localhost:${PORT}`);
});
