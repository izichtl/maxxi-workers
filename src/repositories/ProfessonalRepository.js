const db = require('../database/index');

class AgendamentosRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM users');
    return rows;
  }

  async create({
    email,
    hashPassword,
  }) {
    const [row] = await db.query(`
      INSERT INTO users(
        email,
        password
        ) 
      VALUES ($1, $2)
      RETURNING *
      `, [
      email,
      hashPassword,
    ]);
    return row;
  }

  //   async findByID({
  //     id,
  //   }) {
  //     const rows = await db.query(`SELECT * FROM nome_tabela
  //     WHERE nome_tabela.id = $1`, [id]);
  //     return rows;
  //   })

  //   async delete(
  //     id,
  //   ) {
  //     const rows = await db.query(`DELETE FROM nome_tabela
  //     WHERE agendamentos.id = $1`, [id]);
  //     return rows;
  //   }
}

module.exports = new AgendamentosRepository();
