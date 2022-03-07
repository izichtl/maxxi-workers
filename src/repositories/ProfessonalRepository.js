const db = require('../database/index');

class AgendamentosRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM professional');
    return rows;
  }

  async create({
    nome,
    telefone,
    email,
    tipoprofissional,
    situacao,
  }) {
    const [row] = await db.query(`
      INSERT INTO professional(
        nome,
        telefone,
        email,
        tipoprofissional,
        situacao
        ) 
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `, [
      nome,
      telefone,
      email,
      tipoprofissional,
      situacao,
    ]);
    return row;
  }

  async update(id,
    {
      nome,
      telefone,
      email,
      tipoprofissional,
      situacao,
    }) {
    const [row] = await db.query(`
      UPDATE professional
      SET
      nome = $2,
      telefone = $3,
      email = $4,
      tipoprofissional = $5,
      situacao = $6
      WHERE id = $1
      RETURNING *
      `, [
      id,
      nome,
      telefone,
      email,
      tipoprofissional,
      situacao]);

    return row;
  }

  async findByID({
    id,
  }) {
    const rows = await db.query(`SELECT * FROM professional
    WHERE professional.id = $1`, [id]);
    return rows;
  }

  async delete(
    id,
  ) {
    const rows = await db.query(`DELETE FROM professional
    WHERE professional.id = $1`, [id]);
    return rows;
  }
}

module.exports = new AgendamentosRepository();
