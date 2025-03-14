import dotenv from 'dotenv';
import path from 'path';


dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export default {
  NODE_ENV: process.env.NODE_ENV,  
  databaseUrl: process.env.DATABASE_URL,      
  port: process.env.PORT || 5000,     
};


