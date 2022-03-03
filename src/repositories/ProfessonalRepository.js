// const db = require('../../database');

class AgendamentosRepository {
  async findAll() {
    // const rows = await db.query('SELECT * FROM nome_tabela');
    // return rows;
    return 'into db';
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
