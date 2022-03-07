const db = require('../database/index');

class AgendamentosRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM users');
    return rows;
  }

  async findByEmail({ email }) {
    const [rows] = await db.query('SELECT * FROM users WHERE users.email = $1', [email]);
    return rows;
  }

  async create({
    email,
    hashPass,
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
      hashPass,
    ]);
    return row;
  }

  // async update(id,
  //   {
  //     nome,
  //     telefone,
  //     email,
  //     tipoprofissional,
  //     situacao,
  //   }) {
  //   const [row] = await db.query(`
  //     UPDATE professional
  //     SET
  //     nome = $2,
  //     telefone = $3,
  //     email = $4,
  //     tipoprofissional = $5,
  //     situacao = $6
  //     WHERE id = $1
  //     RETURNING *
  //     `, [
  //     id,
  //     nome,
  //     telefone,
  //     email,
  //     tipoprofissional,
  //     situacao]);

  //   return row;
  // }

  //  async findByID({
  //    id,
  //  }) {
  //    const rows = await db.query(`SELECT * FROM professional
  //    WHERE professional.id = $1`, [id]);
  //    return rows;
  //  }

//  async delete(
//    id,
//  ) {
//    const rows = await db.query(`DELETE FROM professional
//     WHERE professional.id = $1`, [id]);
//     return rows;
//   }
}

module.exports = new AgendamentosRepository();
