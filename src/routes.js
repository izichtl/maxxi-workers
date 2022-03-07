const { Router } = require('express');

const Login = require('./middlewares/login');

const router = Router();

const TypeProfessionalController = require('./controllers/TypeProfessionalController');
const UsersController = require('./controllers/UsersController');
const ProfessionalController = require('./controllers/ProfessionalController');
const AuthorizationController = require('./controllers/AuthorizationController');

// Rotas abertas.
router.post('/user', UsersController.store);
router.post('/login', AuthorizationController.login);

// Rotas protegidas.
router.get('/user', Login, UsersController.index);

router.get('/professional', Login, ProfessionalController.index);
router.get('/professional/:id', Login, ProfessionalController.findById);
router.post('/professional', Login, ProfessionalController.store);
router.put('/professional/:id', Login, ProfessionalController.update);
router.delete('/professional', Login, ProfessionalController.delete);

router.get('/type', Login, TypeProfessionalController.index);
router.post('/type', Login, TypeProfessionalController.store);
router.put('/type', Login, TypeProfessionalController.update);
router.delete('/type', Login, TypeProfessionalController.delete);

module.exports = router;
