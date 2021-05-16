const jwt =require( 'jsonwebtoken');
const config =require( '../config/index.js');

const { JWT_SECRET } = config;
 (req, res, next) => {
  const token = req.header('x-auth-token');
  next();
  // Check for token
  // if (!token)
  //   return res.status(401).json({ msg: 'No token, authorization denied' });

  // try {
  //   // Verify token
  //   const decoded = jwt.verify(token, JWT_SECRET);
  //   // Add user =require( payload
  //   req.user = decoded;
  //   next();
  // } catch (e) {
  //   res.status(400).json({ msg: 'Token is not valid' });
  // }
};
