import express from 'express';
import './db/connections';
import { projectRouter } from './routes';

const PORT = 4444;
const app = express();
app.use(express.json());

app.use('/api/projects', projectRouter);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING: http://localhost:${PORT}`);
});
