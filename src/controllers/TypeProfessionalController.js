/* eslint-disable no-unused-vars */
require('dotenv').config();

const bcrypt = require('bcrypt');

const TypeProfessionalRepository = require('../repositories/TypeProfessionalRepository');

class TypeProfessionalController {
  async index(req, res) {
    const typeprofessional = await TypeProfessionalRepository.findAll();
    res.json(typeprofessional);
  }

  async store(req, res) {
    const {
      descricao,
      situacao,
    } = req.body;
    if (descricao === undefined || situacao === undefined) return res.status(400).json({ error: 'Por favor, verifique todos os campos' });

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

    const type = await TypeProfessionalRepository.update(id, {
      descricao,
      situacao,
    });
    res.json(type);
  }
}

module.exports = new TypeProfessionalController();
