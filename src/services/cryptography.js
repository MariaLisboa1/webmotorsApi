const crypto = require("crypto");
const DATA_CRIPTOGRAPHY = require("../../config/cryptography");

function encryptPassword(password) {
  const cipher = crypto.createCipher(
    DATA_CRIPTOGRAPHY.algorithm,
    DATA_CRIPTOGRAPHY.secret
  );
  cipher.update(password);
  return cipher.final(DATA_CRIPTOGRAPHY.type);
}

function decryptPassword(password) {
  const decipher = crypto.createDecipher(
    DATA_CRIPTOGRAPHY.algorithm,
    DATA_CRIPTOGRAPHY.secret
  );
  decipher.update(password, DATA_CRIPTOGRAPHY.type);
  return decipher.final();
}

function verifyPassword(password, hashPassword) {
  return password === decryptPassword(hashPassword);
}

module.exports = { encryptPassword, decryptPassword, verifyPassword };
