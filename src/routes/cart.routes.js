import { Router } from "express";
import { logger } from "../middlewares/loggers.middleware.js";
//import { auth } from "../middlewares/middlewares.js";
import cartController from "../controllers/cart.controller.js";

const router = Router();

router
  .get("/:id", logger, cartController.getById)
  .post("/", logger, cartController.create)
  .post("/:id_cart/products/:id_prod", logger, cartController.addProductCart)
  .post("/:id_cart/products/:id_prod/delete", logger, cartController.deleteProductCart);

export default router;
