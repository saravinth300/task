import { connectToDatabase } from './app/DB/connectToDb.js'
import app from "./app.js"
import config from './app/config/config.js';

async function main() {
    try {
      await connectToDatabase()
      app.listen(config.port, () => {
        console.log(` app listening on port ${config.port}`);
      });
    } catch (error) {
      console.log(`Error: Not able to connect to DB: ${error.message}`);
      process.exit(1)
    }
  }
  
main()