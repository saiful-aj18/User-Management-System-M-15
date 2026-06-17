const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/create-user", userController.createUser);
router.get("/read-user", userController.readUser);
router.put("/update-user", userController.updateUser);
router.delete("/delete-user", userController.deleteUser);
router.get("/all-users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);







module.exports = router;