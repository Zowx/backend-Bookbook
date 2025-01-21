import supabase from '../db.js';

export const createUser = async (userData) => {
  try {
    // Normaliser l'email
    const email = userData.email.trim().toLowerCase();

    // Vérifier si l'email existe déjà
    const { data: existingUser, error: existingUserError } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .limit(1);

    if (existingUserError) {
      console.error("Supabase error:", existingUserError);
      throw existingUserError;
    }

    if (existingUser && existingUser.length > 0) { // Vérifie si une entrée existe
      console.log("Existing user found:", existingUser[0]);
      throw new Error('Email already in use');
    }

    // Insertion de l'utilisateur
    const { data, error } = await supabase
      .from('users')
      .insert([{
        email: email,
        username: userData.username,
        password_hash: userData.password_hash,
        role_id: userData.role_id || null,
        created_at: userData.created_at || new Date().toISOString(),
        sub: userData.sub || null
      }])
    .select('*');

    if (error) {
      throw error; // Propagation des erreurs d'insertion
    }

    return data;
  } catch (error) {
    throw new Error(error.message || 'Error creating user');
  }
};

export const getUserByEmail = async (email) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error) throw error;
  return data;
};

export const getUserById = async (id) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};
