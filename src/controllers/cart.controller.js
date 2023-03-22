import { cartService } from "../services/index.service.js";
import { productService } from "../services/index.service.js";
import loggerApp from "../utils/logger.utils.js";

const getById = async (req, res) => {
  let { id } = req.params;
  let result = await cartService.getById(id);
  res.send(result);
};
const create = async (req, res) => {};
const addProductCart = async (req, res) => {
  try {
    const {
      params: { id_cart, id_prod },
    } = req;
    const product = await productService.getById(id_prod);
    await cartService.saveProductInCart(id_cart, product);
    res.send("OKKKKKKK");
  } catch (error) {
    loggerApp.error(error);
  }
};
const deleteProductCart = async (req, res) => {
  try {
    const {
      params: { id_cart, id_prod },
    } = req;
    await cartService.deleteProductInCart(id_cart, id_prod);
    res.send("OKKKKKKK");
  } catch (error) {
    loggerApp.error(error);
  }
};
const deleteAll = (req, res) => {};
const updateById = (req, res) => {};

export default { getById, create, deleteAll, updateById, addProductCart, deleteProductCart };

/* class CartController {
  constructor() {}

  async getAll(req, res) {
    const products = await CartService.getProductsInCart(req.user.cart_id);
    res.render("pages/cart", { products, idCart: req.user.cart_id });
  }
  async getById(id) {
    try {
      return await this._table.findById({ _id: id });
    } catch (error) {
      loggerApp.error(error);
    }
  }
  async addProdToCart(req, res) {
    try {
      const {
        params: { id_cart, id_prod },
      } = req;
      const product = await ProductsService.findProductById(id_prod);
      await CartService.addProdToCart(id_cart, product);
      res.redirect("/");
    } catch (error) {
      loggerApp.error("Controlador", error);
    }
  }
  async deleteProdToCart(req, res) {
    try {
      const {
        params: { id_cart, id_prod },
      } = req;
      await CartService.deleteProdToCart(id_cart, id_prod);
      res.send("HOLA");
    } catch (error) {
      loggerApp.error(error);
    }
  }
} */

// export default new CartController();

//import { CartPersist } from "../persistence/index.persistence.js";
// import loggerApp from "../utils/logger.utils.js";

// const cartPersist = new CartPersist();

/* class CartService {
  constructor() {}

  async findCartById(id_cart) {
    let result = await cartPersist.getById(id_cart);
    return result;
  }
  async addProdToCart(id_cart, product) {
    try {
      const result = await cartPersist.addProdToCart(id_cart, product);
      return result;
    } catch (error) {
      loggerApp.error(error);
    }
  }
  async deleteProdToCart(id_cart, id_prod) {
    try {
      const result = await cartPersist.deleteProdToCart(id_cart, id_prod);
      return result;
    } catch (error) {
      loggerApp.error(error);
    }
  }

  async deleteAllProdToCart(id_cart) {
    try {
      await cartPersist.deleteAllProdToCart(id_cart);
      return;
    } catch (error) {
      loggerApp.error(error);
    }
  }

  async getProductsInCart(id) {
    try {
      const data = await cartPersist.getAll(id);
      const result = data[0].products;
      return result;
    } catch (error) {
      loggerApp.error(error);
    }
  }
}

export default new CartService();*/
