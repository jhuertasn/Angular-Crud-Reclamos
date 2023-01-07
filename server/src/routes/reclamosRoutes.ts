import {Router} from 'express';

import {reclamosController} from '../controllers/reclamosController';

class ReclamosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', reclamosController.list);
        this.router.get('/:id', reclamosController.getOne);
        this.router.post('/',reclamosController.create);
        this.router.delete('/:id',reclamosController.delete);
        this.router.put('/:id',reclamosController.update);
    }
}
const reclamosRoutes = new ReclamosRoutes();
export default reclamosRoutes.router;