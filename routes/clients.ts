import {Router} from 'express';
import cientsContoller from '../controllers/clientController';

const router = Router();

router.get('/', cientsContoller.home);;

router.get("/clientes", cientsContoller.index);
router.post("/clientes", cientsContoller.store);
router.get("/clientes/create", cientsContoller.create);
router.get("/clientes/:id", cientsContoller.show);
router.put("/clientes/:id", cientsContoller.update);
router.delete("/clientes/:id", cientsContoller.destroy);
router.get("/clientes/:id/edit", cientsContoller.edit);


export default router;