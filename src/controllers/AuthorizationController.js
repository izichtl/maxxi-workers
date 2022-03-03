/* eslint-disable no-unused-vars */
require('dotenv').config();
const jwt = require('jsonwebtoken');
const axios = require('axios');
const ProfessionalRepository = require('../repositories/ProfessonalRepository');

const clientID = '20a70bf43019f5229a00';
const clientSecret = 'd7ba5dea59e4b8ba94fa3ce50e4250b5ae52c7b8';

class AuthorizationController {
  async getToken(req, res) {
    console.log('pass');
    const id = '19ac9be6-86ad-479a-93ef-433019095786';
    const key = process.env.CHAVE_CLIENT;
    const time = 60 * 4 * 7;
    const token = jwt.sign({
      id,
    },
    key,
    { algorithm: 'HS256', expiresIn: time });
    console.log(token);
    res.json({ token });
  }

  async Oauth(req, res) {
    const { query } = req;
    const requestToken = query.code;
    axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
      headers: {
        accept: 'application/json',
      },
    }).then((response) => {
      const accessToken = response.data.access_token;
      console.log(accessToken);
      res.json(accessToken);
    });
  }
}

module.exports = new AuthorizationController();
