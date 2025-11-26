// backend/src/middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * auth(requiredRole?)
 * - If no role is provided, it just checks for a valid JWT and attaches payload to req.user.
 * - If requiredRole is provided (e.g., 'admin'), it enforces role-based access.
 */
function auth(requiredRole) {
  return (req, res, next) => {
    try {
      const header = req.headers.authorization;
      if (!header) return res.status(401).json({ message: 'Authorization header missing' });

      const parts = header.split(' ');
      if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Invalid authorization format' });
      }

      const token = parts[1];
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      // attach user payload to request for controllers to use
      req.user = payload;

      // role enforcement (if required)
      if (requiredRole && payload.role !== requiredRole) {
        return res.status(403).json({ message: 'Forbidden — insufficient privileges' });
      }

      next();
    } catch (err) {
      // Token verification errors should be explicit
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired' });
      }
      if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Invalid token' });
      }
      next(err);
    }
  };
}

module.exports = auth;
