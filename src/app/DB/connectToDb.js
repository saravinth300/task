import mongoose from 'mongoose'
import config from '../config/config.js'

export async function connectToDatabase() {
     try{
        await mongoose.connect(config.databaseUrl)
        console.log('Database connected Successfuly')

     } catch(err){
        console.log('Failed to connect to database:', err)
        process.exit(1)


     }
}