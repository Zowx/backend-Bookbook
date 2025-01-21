const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://your-supabase-url.supabase.co', 'your-supabase-key');

exports.createUser = async (user) => {
  const { data, error } = await supabase.from('users').insert(user).select().single();
  if (error) throw new Error(error.message);
  return data;
};

exports.getUserByEmail = async (email) => {
  const { data, error } = await supabase.from('users').select('*').eq('email', email).single();
  if (error) throw new Error(error.message);
  return data;
};

exports.getUserById = async (id) => {
  const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
  if (error) throw new Error(error.message);
  return data;
};
