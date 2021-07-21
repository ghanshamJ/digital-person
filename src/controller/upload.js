const upload = require("../db/upload");

const uploadFile = async (req, res) => {
  try {

    console.log(req.body.ghansham);

    await upload(req, res);

    console.log(req.file);
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    return res.send(`File has been uploaded.`);
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload image: ${error}`);
  }
};
module.exports = uploadFile;