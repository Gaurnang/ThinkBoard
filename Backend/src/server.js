import "dotenv/config";
import express from 'express';
import notesRoutes from "./routes/notes.Routes.js";
import connectDB from './config/db.js';
import dotenv from "dotenv";
import rateLimiter from "./middlewares/rateLimiter.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;



app.use(express.json());

app.use(rateLimiter);

app.use("/api/notes", notesRoutes);


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
});

