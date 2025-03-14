import mongoose from 'mongoose';
import app from "./app.js"
import config from './app/config/config.js';

async function main() {
    try {
      console.log("Database URL:", config.databaseUrl);
      if (!config.databaseUrl) {
        throw new Error("DATABASE_URL is undefined. Check your .env file.");
      }
      await mongoose.connect(config.databaseUrl);
      app.listen(config.port, () => {
        console.log(` app listening on port ${config.port}`);
      });
    } catch (error) {
      console.log(`Error: Not able to connect to DB: ${error.message}`);
    }
  }
  
main().catch((err) => console.log(err));