import { Router } from "express";
//import { auth } from "../middlewares/middlewares.js";
import productsController from "../controllers/products.controller.js";

const router = Router();

router.get("/", productsController.getAll);

export default router;
