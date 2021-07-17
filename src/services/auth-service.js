const jwt = require("jsonwebtoken");
const secret = "Secret@123!looooooongSecreeeeet";
class AuthService {
  login(data) {
    if (data.username === "admin" && data.password === "admin") {
      return this.generateAccessToken({
        username: data.username,
        email: "admin@gmail.com",
      });
    } else {
      return "invalid user";
    }
  }
  generateAccessToken(data) {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        userInfo: data,
      },
      secret
    );
    return { accessToken: token, expiresIn: 60 * 60 };
  }
  verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      jwt.verify(bearerToken, secret, (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          req.authData = authData;
          next();
        }
      });
    } else {
      res.sendStatus(403);
    }
  }
}
module.exports = AuthService;
