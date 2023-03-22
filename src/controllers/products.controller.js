import { productService } from "../services/index.service.js";

const getAll = async (req, res) => {
  let result = await productService.get();
  res.send(result);
};
const getById = async (req, res) => {
  let { id } = req.params;
  let result = await productService.getById(id);
  res.send(result);
};
const create = async (req, res) => {
  let { name, price, thumbnail } = req.body;
  let result = await productService.save({ name, price, thumbnail });
  res.send(result);
};
const deleteById = async (req, res) => {
  let { id } = req.params;
  let result = await productService.delete(id);
  res.send(result);
};
const deleteAll = (req, res) => {};

const updateById = async (req, res) => {
  let { id } = req.params;
  let { body } = req;
  let result = await productService.update(id, body);
  res.send(result);
};

export default { getAll, getById, create, deleteById, deleteAll, updateById };
