const { Router } = require('express');

const router = Router();

const ProfessionalController = require('./controllers/ProfessionalController');

router.get('/', (req, res) => {
  res.send('Raiz do Servidor');
});

router.get('/professional', ProfessionalController.index);

module.exports = router;
