/* eslint-disable no-unused-vars */
require('dotenv').config();

const bcrypt = require('bcrypt');

const UsersRepository = require('../repositories/UsersRepository');

class ProfessionalController {
  async index(req, res) {
    const professionalList = await UsersRepository.findAll();
    res.json(professionalList);
  }

  async store(req, res) {
    const {
      email,
      password,
    } = req.body;
    if (email === undefined || password === undefined) return res.status(400).json({ error: 'Por favor, verifique todos os campos' });

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const user = await UsersRepository.create({
      email,
      hashPass,
    });

    if (!user) return res.status(400).json({ error: 'Error ao cadastrar profissional' });

    res.json('user');
  }
}

module.exports = new ProfessionalController();
