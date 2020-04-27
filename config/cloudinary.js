const utils = require("util");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "ddtdxeaxl",
  api_key: "961647835262185",
  api_secret: "EFTk-0Dm_rPAOTxcLBgGAGcPJ-0",
});

const upload = utils.promisify(cloudinary.uploader.upload);

module.exports = { upload };
