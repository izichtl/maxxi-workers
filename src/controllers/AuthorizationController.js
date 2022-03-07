require('dotenv').config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UsersRepository = require('../repositories/UsersRepository');

const key = process.env.CHAVE_CLIENT;

class AuthorizationController {
  async login(req, res) {
    const { email, password } = req.body;
    const user = await UsersRepository.findByEmail({ email });
    if (!user) return res.status(400).json({ error: 'Usuário não encontrado' });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Senha incorreta, por favor tente novamente' });
    const time = 60 * 4 * 70;
    const token = jwt.sign({
      id: user.id,
      email: user.email,
    }, key, { algorithm: 'HS256', expiresIn: time });
    return res.json(token);
  }
}

module.exports = new AuthorizationController();
