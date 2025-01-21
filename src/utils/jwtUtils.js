const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your-secret-key';

exports.generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '7d' });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};
