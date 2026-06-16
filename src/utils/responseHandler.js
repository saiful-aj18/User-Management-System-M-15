exports.successResponse = (res, message) => {
  return res.status(200).json({
    success: true,
    message,
  });
};