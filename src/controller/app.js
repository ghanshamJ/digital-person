const express = require("express");
const PersonService = require("../services/person-service");
const AuthService = require("../services/auth-service");
const uploadFile = require("../controller/upload");
const multer = require('multer');
const upload = multer();

const app = express();
const personService = new PersonService();
const authService = new AuthService();
const cors = require('cors');
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
app.get('/uploadFile', (req,res) => {
  res.sendFile(process.cwd()+"/frontend/public/latest.html")
});

app.use(cors());
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


app.get("/api/v1/statistics-by-country", authService.verifyToken, (req, res) => {
  personService
    .getPersonCountByCountry()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((rej) => {
      res.statusCode(501);
    });
});

app.post("/upload", uploadFile);

// app.post("/upload", (req,res)=>{
//   const formData = req.body;
//   console.log('form data', formData);
//   res.sendStatus(200);
// });

// app.post('/upload', upload.single('file'), (req, res) => {
//   console.log(req.body);
//   console.log(req.file);
//   res.send("ok");
// });

module.exports = app;
