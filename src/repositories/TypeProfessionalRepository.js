const db = require('../database/index');

class TypeProfessionalRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM professionaltypes');
    return rows;
  }

  async create({
    descricao,
    situacao,
  }) {
    const [row] = await db.query(`
      INSERT INTO professionaltypes(
        descricao,
        situacao
        ) 
      VALUES ($1, $2)
      RETURNING *
      `, [
      descricao,
      situacao,
    ]);
    return row;
  }

  async update(id,
    {
      descricao,
      situacao,
    }) {
    const [row] = await db.query(`
      UPDATE professionaltypes
      SET
      descricao = $2,
      situacao = $3
      WHERE id = $1
      RETURNING *
      `, [id, descricao, situacao]);

    return row;
  }

  async findByID({
    id,
  }) {
    const rows = await db.query(`SELECT * FROM professionaltypes
    WHERE nome_tabela.id = $1`, [id]);
    return rows;
  }

  async delete(
    id,
  ) {
    console.log(id);
    const rows = await db.query(`DELETE FROM professionaltypes
    WHERE professionaltypes.id = $1`, [id]);
    return rows;
  }
}

module.exports = new TypeProfessionalRepository();
