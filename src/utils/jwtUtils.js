import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '7d' });
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

export default {
  generateToken,
  verifyToken
};