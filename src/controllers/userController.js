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




