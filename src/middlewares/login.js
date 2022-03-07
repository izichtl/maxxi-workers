require('dotenv').config();

const jwt = require('jsonwebtoken');

const key = process.env.CHAVE_CLIENT;

async function login(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.sendStatus(401);
    }

    const decode = jwt.verify(token, key);
    req.usuario = decode;
    next();
  } catch (error) {
    return res.status(401).send({ error: 'Autenticação invalida, log novamente' });
  }
}

module.exports = login;
