import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController
} from "../controllers/authController.js";
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js";
// routing object need   for seperte route
const router = express.Router();

// routing perform
//1. register || method post
router.post("/register", registerController);

// login|| post
router.post("/login", loginController);

// forgot Password || post
router.post("/forgot-password", forgotPasswordController);

// test route ||get
router.get("/test", requireSignIn, isAdmin, testController);

// protected  user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ok: true});
})
// protected  Admin route auth
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ok: true});
})

// update profile
router.put("/profile", requireSignIn,updateProfileController)

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;
