/* eslint-disable no-unused-vars */
require('dotenv').config();

const bcrypt = require('bcrypt');

const ProfessionalRepository = require('../repositories/ProfessonalRepository');

class ProfessionalController {
  async index(req, res) {
    const professionalList = await ProfessionalRepository.findAll();
    res.json(professionalList);
  }

  async findById(req, res) {
    const {
      id,
    } = req.params;

    const professional = await ProfessionalRepository.findByID({
      id,
    });
    res.json(professional);
  }

  async store(req, res) {
    const {
      nome,
      telefone,
      email,
      tipoprofissional,
      situacao,
    } = req.body;
    console.log('marcador');
    console.log(req.body);
    if (nome === undefined || telefone === undefined || tipoprofissional === undefined || situacao === undefined) return res.status(400).json({ error: 'Por favor, verifique todos os campos' });

    const professional = await ProfessionalRepository.create({
      nome,
      telefone,
      email,
      tipoprofissional,
      situacao,
    });
    console.log(professional);

    if (!professional) return res.status(400).json({ error: 'Error ao cadastrar profissional' });

    res.json('professional');
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      nome,
      telefone,
      email,
      tipoprofissional,
      situacao,
    } = req.body;

    const type = await ProfessionalRepository.update(id, {
      nome,
      telefone,
      email,
      tipoprofissional,
      situacao,
    });
    if (!type) res.status(400).json('error');
    res.json(type);
  }

  async delete(req, res) {
    const {
      id,
    } = req.body;
    const type = await ProfessionalRepository.delete(
      id,
    );
    res.json(type);
  }
}

module.exports = new ProfessionalController();
