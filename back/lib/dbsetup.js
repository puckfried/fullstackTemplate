import mongoose from "mongoose";
import 'dotenv/config'


export const connectDB = async () => {
    try {
      const dbURI = process.env.MONGO_URI;
      if (!dbURI) {
        throw new Error('MONGO_URI missing');
      }
  
      await mongoose.connect(dbURI);
  
      console.log('Mit der MongoDB verbunden.');
    } catch (error) {
      console.error('Fehler beim Verbinden mit MongoDB:', error.message);
      process.exit(1); // Beendet die Anwendung bei Verbindungsfehler
    }
  };
