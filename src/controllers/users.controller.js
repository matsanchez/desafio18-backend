import { logger } from "../middlewares/loggers.middleware.js";

const getUser = (req, res) => {};
const getById = (req, res) => {};
const create = (req, res) => {};
const deleteById = (req, res) => {};
const deleteAll = (req, res) => {};
const updateById = (req, res) => {};
const renderRegister = (req, res) => {
  res.render("pages/register");
};
const renderLogin = (req, res) => {
  res.render("pages/login");
};

export default {
  getUser,
  getById,
  create,
  deleteById,
  deleteAll,
  updateById,
  renderLogin,
  renderRegister,
};
