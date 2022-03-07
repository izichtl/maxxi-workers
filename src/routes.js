/* eslint-disable no-unused-vars */
const { Router } = require('express');

const router = Router();

const TypeProfessionalController = require('./controllers/TypeProfessionalController');
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
router.get('/professional/:id', ProfessionalController.findById);
router.post('/professional', ProfessionalController.store);
router.put('/professional/:id', ProfessionalController.update);
router.delete('/professional', ProfessionalController.delete);

router.get('/type', TypeProfessionalController.index);
router.post('/type', TypeProfessionalController.store);
router.put('/type', TypeProfessionalController.update);
router.delete('/type', TypeProfessionalController.delete);

router.get('/token', AuthorizationController.getToken);
router.get('/oauth/redirect', AuthorizationController.Oauth);

module.exports = router;
