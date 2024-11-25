import { Pool } from 'pg';


const pool = new Pool({
    user: 'postgres.xajgqatmlarqhwqairwn',
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    database: 'postgres',
    password: 'Sandbox 12345*',
    port: 6543,
});

export default pool;
