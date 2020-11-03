import { Router } from 'express';
import { TaskCtrl } from '../controllers';
import { taskValidator } from '../helpers';

const taksRouter = Router();

taksRouter.get('/', TaskCtrl.index);
taksRouter.post('/', taskValidator, TaskCtrl.create);
taksRouter.put('/:id', taskValidator, TaskCtrl.update);
taksRouter.put('/:id/status', TaskCtrl.updateStatus);
taksRouter.delete('/:id', TaskCtrl.delete);

export default taksRouter;