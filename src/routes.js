/* eslint-disable no-unused-vars */
const { Router } = require('express');

const router = Router();

const ProfessionalController = require('./controllers/ProfessionalController');
const AuthorizationController = require('./controllers/AuthorizationController');

router.get('/', (req, res) => {
  const {
    query,
    email,
  } = req.params;
  console.log(req.query.email);
  console.log(req.body);
  console.log(req.url);
  res.send('homepage');
});

router.get('/professional', ProfessionalController.index);
router.get('/token', AuthorizationController.getToken);
router.get('/oauth/redirect', AuthorizationController.Oauth);

module.exports = router;
