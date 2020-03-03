const path = require("path");

const express = require("express");

const shopAdminController = require("../controllers/shop-admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/", shopAdminController.getIndex);

router.get("/products", shopAdminController.getProducts);

router.get("/products/:productId", shopAdminController.getProduct);

router.get("/admin-cart", isAuth, shopAdminController.getCart);

router.post("/admin-cart", isAuth, shopAdminController.postCart);

router.post(
  "/cart-delete-item",
  isAuth,
  shopAdminController.postCartDeleteProduct
);

router.post("/admin-create-order", isAuth, shopAdminController.postOrder);

router.get("/admin-orders", isAuth, shopAdminController.getOrders);

router.get("/admin-orders/:orderId", isAuth, shopAdminController.getInvoice);

module.exports = router;
