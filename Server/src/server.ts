import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './mqttHandler';  
import taskRoutes from './taskRoutes';
import connectDB from './db';

dotenv.config();
connectDB()
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("Database Comnnected")
});










// import express from 'express';
// import cors from 'cors';
// import dotenv from "dotenv"
// import { fetchAllTasks } from './taskController';
// import './mqttHandler';  // Initialize MQTT connection
// import './db';  // Initialize MongoDB connection

// const app = express();
// dotenv.config()
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(cors());

// app.get('/fetchAllTasks', async (req, res) => {
//     const tasks = await fetchAllTasks();
//     res.json({ tasks });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
