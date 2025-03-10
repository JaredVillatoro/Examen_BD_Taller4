import { Router } from "express";
import { getAll } from "../controllers/productos.controller.ts";


const router = Router();

// Definir la ruta correctamente
router.get("/all", getAll);

export default router;
