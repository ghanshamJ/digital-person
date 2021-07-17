const express = require("express");
const PersonService = require("../services/person-service");
const AuthService = require("../services/auth-service");
const app = express();
const personService = new PersonService();
const authService = new AuthService();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static(process.cwd()+"/frontend/public/"));
app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/frontend/public/index.html")
});
app.get("/api/v1/persons", authService.verifyToken, (req, res) => {
  personService
    .selectAll()
    .then((result) => {
      res.json(result);
    })
    .catch((rej) => {
      res.statusCode(501);
    });
});
app.get("/api/v1/person/:id", authService.verifyToken, (req, res) => {
  personService
    .selectOne(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((rej) => {
      res.status(501).send({ message: "internal server error!" });
    });
});
app.post("/api/v1/person", authService.verifyToken, (req, res) => {
  personService
    .insert(req.body)
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.sendStatus(501);
    });
});
app.put("/api/v1/person/:id", authService.verifyToken, (req, res) => {
  personService
    .update(req.params.id, req.body)
    .then((doc) => {
      res.status(200).send({ message: "record updated!" });
    })
    .catch((err) => {
      res.status(501).send({ message: "internal server error!" });
      //res.sendStatus(501);
    });
});
app.post("/api/v1/auth", (req, res) => {
  res.send(authService.login(req.body));
});
module.exports = app;
