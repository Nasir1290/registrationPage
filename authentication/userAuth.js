const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

exports.verifyToken=(req, res, next)=> {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token verification failed' });
    }

    // The token is valid, and you can proceed to the next middleware or route.
    req.user = decoded;
    next();
  });
}
