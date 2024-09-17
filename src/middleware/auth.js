import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  const { token } = req.headers;
  jwt.verify(token, "exam1", (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "invalid Token", err });
    }
    req.user = decoded;
    next();
  });
};
export default verifyToken
