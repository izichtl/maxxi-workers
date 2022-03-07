/*
*Autor:     Ivan Zichtl - 03/03/2022
*Objetivo:  Index da aplicação / roda o servidor.
*
*/

const app = require('./server');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Port -> http://localhost:${PORT}`));
