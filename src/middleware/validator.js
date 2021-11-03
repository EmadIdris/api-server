'use strict';

// Validator Middleware
module.exports = (req, res, next) => {
  const id = req.query.id;
  if (!id) {
    next('An id is required!'); // Throw a 500 error
  } else {
    next(); // Pass to next middleware
  }
};