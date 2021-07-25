
const express = require("express");
const PersonService = require("../services/person-service");
const AuthService = require("../services/auth-service");
const app = express();
const personService = new PersonService();
const authService = new AuthService();
const cors = require("cors");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());
app.use(express.static(process.cwd() + "/frontend/public/"));
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/frontend/public/index.html");
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
app.post("/api/v1/auth", (req, res) => {
  res.send(authService.login(req.body));
});
app.get(
  "/api/v1/statistics-by-country",
  authService.verifyToken,
  (req, res) => {
    personService
      .getPersonCountByCountry()
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((rej) => {
        res.statusCode(501);
      });
  }
);

const fs = require("fs");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname + "/uploads")); //"/src/controller/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({ storage: storage });
const imgModel = require("../models/imageschema");

app.get("/api/v1/image/:id", (req, res) => {
  imgModel.find({ userId: req.params.id }, (err, items) => {
    if (err) {
      res.sendFile(process.cwd() + "/frontend/public/assets/logo.png");
      // res.status(500).send("An error occurred", err);
    } else {
      if (items[0]?.img?.contentType) {
        res.contentType(items[0]?.img?.contentType).send(items[0]?.img?.data);
      } else {
        res.sendFile(process.cwd() + "/frontend/public/assets/logo.png");
      }
    }
  });
});

app.post(
  "/api/v1/person",
  authService.verifyToken,
  upload.single("image"),
  (req, res) => {
    personService
      .insert(req.body)
      .then((doc) => {
        const obj = {
          userId: doc._id,
          img: {
            data: fs.readFileSync(
              path.join(__dirname + "/uploads/" + req.file.filename)
            ),
            contentType: "image/png",
          },
        };
        imgModel.create(obj, (err, item) => {
          if (err) {
            console.log(err);
          } else {
            res.send(doc);
          }
        });
      })
      .catch((err) => {
        res.sendStatus(501);
      });
  }
);

app.put(
  "/api/v1/person/:id",
  authService.verifyToken,
  upload.single("image"),
  (req, res) => {
    personService
      .update(req.params.id, req.body)
      .then((doc) => {
        if (req.file) {
          const obj = {
            userId: req.params.id,
            img: {
              data: fs.readFileSync(
                path.join(__dirname + "/uploads/" + req.file.filename)
              ),
              contentType: "image/png",
            },
          };
          imgModel.findOneAndUpdate(
            { userId: req.params.id },
            obj,
            (err, item) => {
              if (err) {
                console.log("error");
                res.send(doc);
              } else {
                if (!item) {
                  console.log("not item");
                  imgModel.create(obj, (err, item) => {
                    if (err) {
                      console.log("err")
                      res.send(doc);
                    } else {
                      console.log("success")
                      res.send(doc);
                    }
                  });
                }else{

                  imgModel.create(obj, (err, item) => {
                    if (err) {
                      res.send(doc);
                    } else {
                      res.send(doc);
                    }
                  });
                }
              }
            }
          );
        } else {
          res.send(doc);
        }
      })
      .catch((err) => {
        console.log("welocome" + err);
        res.sendStatus(501);
      });
  }
);

module.exports = app;
