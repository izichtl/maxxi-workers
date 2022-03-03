const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('Raiz do Servidor');
});

module.exports = router;
