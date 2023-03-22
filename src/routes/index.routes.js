import { Router } from "express";
//import { auth } from "../middlewares/middlewares.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("anda");
});
export default router;
