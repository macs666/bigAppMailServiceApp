const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const createUser = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).send({ 'success': true });
});


module.exports = {
    createUser,
  };