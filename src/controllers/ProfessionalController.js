/* eslint-disable no-unused-vars */
require('dotenv').config();
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
    // const {
    //   idclinic,
    //   idemployee,
    //   idpatient,
    //     event_,
    //     name_employee,
    //     name_patient,
    //     phone,
    //     status_,
    //     confirmation,
    //     date,
    //   } = req.body;

    //   const id_clinica = idclinic;
    //   const id_especialista = idemployee;
    //   const id_paciente = idpatient;
    //   const evento = event_;
    //   const nome_especialista = name_employee;
    //   const nome_paciente = name_patient;
    //   const telefone = phone;
    //   const recebimento = status_;
    //   const confirmar = confirmation;
    //   const data = date;

    //   const agendamento = await AgendamentosRepository.create({
    //     id_clinica,
    //     id_especialista,
    //     id_paciente,
    //     evento,
    //     nome_especialista,
    //     nome_paciente,
    //     telefone,
    //     recebimento,
    //     confirmar,
    //     data,
    //   });
    //   res.json(agendamento);
  }
}

module.exports = new ProfessionalController();
