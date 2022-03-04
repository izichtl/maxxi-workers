/* eslint-disable no-unused-vars */
require('dotenv').config();

const bcrypt = require('bcrypt');

const ProfessionalRepository = require('../repositories/ProfessonalRepository');

class ProfessionalController {
  async index(req, res) {
    const professionalList = await ProfessionalRepository.findAll();
    res.json(professionalList);
  }

  async selectById(req, res) {
    // const {
    //   id,
    // } = req.body;

    // const agendamento = await AgendamentosRepository.findById({
    //   id,
    // });
    // res.json(agendamento);
  }

  async store(req, res) {
    const {
      email,
      password,
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    console.log(email);
    console.log(hashPassword);

    // const cliente = await ProfessionalRepository.create({
    //   email,
    //   hashPassword,
    // });
    res.json('cliente');
  }
}

module.exports = new ProfessionalController();
