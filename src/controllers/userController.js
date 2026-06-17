const userService = require("../services/userService");
const { successResponse } = require("../utils/responseHandler");

exports.createUser = (req, res) =>
  successResponse(res, userService.createUser());

exports.readUser = (req, res) =>
  successResponse(res, userService.readUser());

exports.updateUser = (req, res) =>
  successResponse(res, userService.updateUser());

exports.deleteUser = (req, res) =>
  successResponse(res, userService.deleteUser());

exports.getAllUsers = (req, res) =>
  successResponse(res, userService.getAllUsers());

exports.getUserById = (req, res) =>
  successResponse(res, userService.getUserById());

exports.loginUser = (req, res) =>
  successResponse(res, userService.loginUser());

exports.logoutUser = (req, res) =>
  successResponse(res, userService.logoutUser());

exports.changePassword = (req, res) =>
  successResponse(res, userService.changePassword());

exports.updateProfile = (req, res) =>
  successResponse(res, userService.updateProfile());

exports.makeAdmin = (req, res) =>
  successResponse(res, userService.makeAdmin());

exports.removeAdmin = (req, res) =>
  successResponse(res, userService.removeAdmin());




