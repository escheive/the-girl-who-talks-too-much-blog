// supabase.tsx
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import db from './localDatabaseConfig';

dotenv.config();

const isLocal = process.env.NODE_ENV === 'development';

let supabase;

if (isLocal) {
    supabase = db;
} else {
    const supabaseUrl = process.env.DATABASE_URL;
    const supabaseKey = process.env.API_KEY;

    supabase = createClient(supabaseUrl, supabaseKey);
}


export default supabase;