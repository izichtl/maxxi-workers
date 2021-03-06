const { Client } = require('pg');

const client = new Client(
  process.env.DATABASE_URL,
);
client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
