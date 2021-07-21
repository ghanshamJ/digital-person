
const util = require("util");
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");


const uname = "admin";
const pass = "admin";
const prefix = "mongodb+srv";
const url = `${prefix}://${uname}:${pass}@cluster0.clvp4.mongodb.net/images?retryWrites=true&w=majority`;
 
var storage = new GridFsStorage({
    url: url,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
      const match = ["image/png", "image/jpeg"];
  
      if (match.indexOf(file.mimetype) === -1) {
        const filename = `${Date.now()}-${file.originalname}`;
        return filename;
      }
  
      return {
        bucketName: "photos",
        filename: `${Date.now()}-${file.originalname}`
      };
    }
  });
  
  var uploadFile = multer({ storage: storage }).single("file");
  var uploadFilesMiddleware = util.promisify(uploadFile);
  module.exports = uploadFilesMiddleware;