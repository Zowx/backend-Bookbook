import * as userService from '../services/userService.js';
import * as jwtUtils from '../utils/jwtUtils.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUsers = await userService.createUser({ 
      email, 
      username, 
      password_hash: hashedPassword,
      created_at: new Date(),
      role_id: 1,
      sub: false
    });

    // Vérifie si un utilisateur a été créé
    if (!createdUsers || createdUsers.length === 0) {
      throw new Error('User creation failed');
    }

    const user = createdUsers[0]; // Récupère le premier utilisateur
    const { password_hash, ...userWithoutPassword } = user;

    res.status(201).json({ 
      message: 'User created successfully', 
      user: userWithoutPassword 
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwtUtils.generateToken({ id: user.id, email: user.email });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await userService.getUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};
