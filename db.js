import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Charge les variables d'environnement
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Créer le client Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
