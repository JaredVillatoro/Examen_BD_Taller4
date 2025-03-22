import { Router } from "express";
import { eliminar, getAll, insertar, modificar } from "../controllers/productos.controller.ts";


const router = Router();

// Definir la ruta correctamente
router.get("/all", getAll);

router.post ("/insertar", insertar);

router.put("/modificar/:id", modificar);


router.delete("/eliminar/:id", eliminar);


export default router;
