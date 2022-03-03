const { Router } = require('express');

const router = Router();

const ProfessionalController = require('./controllers/ProfessionalController');
const AuthorizationController = require('./controllers/AuthorizationController');

router.get('/', (req, res) => {
  const { query } = req.params;
  res.send(query);
});

router.get('/professional', ProfessionalController.index);
router.get('/token', AuthorizationController.getToken);
router.get('/oauth/redirect', AuthorizationController.Oauth);

module.exports = router;
