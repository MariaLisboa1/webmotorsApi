const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ auth: false, message: "token not provided" });
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ auth: false, message: "Failed to authenticate token." });
      }

      req.userId = decoded.id;
      next();
    });
  } else {
    return res
      .status(401)
      .json({ auth: false, message: "Failed to authenticate token." });
  }
}

module.exports = verifyJWT;
