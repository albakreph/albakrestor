const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const config = require('../config');

class AuthService {
  async signin(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });

    return { user: payload, token };
  }

  async signup(userData) {
    try {
      const { name, email, password, address, user_type } = userData;

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create the user
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        address,
        user_type,
      });

      // Don't return the password hash
      user.password = undefined;

      return user;
    } catch (error) {
      // It's a good practice to throw a custom error or handle it
      // For now, we'll re-throw the original error
      throw error;
    }
  }
}

module.exports = new AuthService();
