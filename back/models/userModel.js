import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true, // Pflichtfeld
        unique: true, // Muss eindeutig sein
        trim: true, // Entfernt Leerzeichen am Anfang und Ende
      },
      password: {
        type: String,
        required: true, // Pflichtfeld
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [
          /^\S+@\S+\.\S+$/,
          'Bitte gib eine gültige E-Mail-Adresse ein.', // Validierungsnachricht
        ],
      },
      createdAt: {
        type: Date,
        default: Date.now, // Automatisch mit aktuellem Datum gefüllt
      },
    },
    {
      timestamps: true, // Erstellt automatisch `createdAt` und `updatedAt` Felder
    }
  );

export const User = mongoose.model("User", userSchema)