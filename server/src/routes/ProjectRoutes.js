import { Router } from 'express';
import { ProjectCtrl } from '../controllers';
import { projectValidator } from '../helpers';

const projectRouter = Router();

projectRouter.get('/', ProjectCtrl.index);
projectRouter.post ('/', projectValidator, ProjectCtrl.create);
projectRouter.put('/:id', projectValidator, ProjectCtrl.update);
projectRouter.delete('/:id', ProjectCtrl.delete);

export default projectRouter;