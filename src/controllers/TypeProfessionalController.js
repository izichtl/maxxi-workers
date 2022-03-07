/* eslint-disable no-unused-vars */
require('dotenv').config();

const bcrypt = require('bcrypt');

const TypeProfessionalRepository = require('../repositories/TypeProfessionalRepository');

class TypeProfessionalController {
  async index(req, res) {
    const typeprofessional = await TypeProfessionalRepository.findAll();
    res.json(typeprofessional);
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
      descricao,
      situacao,
    } = req.body;
    console.log(descricao);
    console.log(situacao);

    const type = await TypeProfessionalRepository.create({
      descricao,
      situacao,
    });
    res.json(type);
  }

  async delete(req, res) {
    const {
      id,
    } = req.body;
    console.log(id, 'delete');

    const type = await TypeProfessionalRepository.delete(
      id,
    );
    res.json(type);
  }

  async update(req, res) {
    const {
      id,
      descricao,
      situacao,
    } = req.body;
    console.log(id);
    console.log(descricao);
    console.log(situacao);

    const type = await TypeProfessionalRepository.update(id, {
      descricao,
      situacao,
    });
    res.json(type);
  }
}

module.exports = new TypeProfessionalController();
