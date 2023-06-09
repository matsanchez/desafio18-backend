import { Router } from "express";
import passport from "passport";
import { msgFlash } from "../middlewares/middlewares.js";
import { logger } from "../middlewares/loggers.middleware.js";
import { uploader } from "../middlewares/multer.middleware.js";
import usersController from "../controllers/users.controller.js";
//import { auth } from "../middlewares/middlewares.js";

const router = Router();

router
  .get("/login", logger, msgFlash, usersController.renderLogin)
  .get("/register", logger, msgFlash, usersController.renderRegister)
  .post(
    "/register",
    uploader,
    passport.authenticate("register", {
      failureRedirect: "/api/user/auth/register",
      successRedirect: "/",
      failureFlash: true,
    }),
    logger,
    (req, res) => {}
  )
  .post("/failedRegister", logger, (req, res) => {
    res.send({ message: "No se pudo proceder con el registro" });
  })
  .post(
    "/login",
    passport.authenticate("login", {
      failureRedirect: "/api/user/auth/login",
      successRedirect: "/",
      failureFlash: true,
    }),
    logger,
    (req, res) => {}
  )
  .post("/failedLogin", logger, (req, res) => {
    res.send({ message: "Error al iniciar sesion" });
  })
  .get("/logout", logger, (req, res) => {
    req.logout((err) => {
      if (err) return res.send({ message: "Hubo un error" });
      req.flash("success", "Cerraste Sesion Exitosamente");
      res.redirect("/");
    });
  });

export default router;
