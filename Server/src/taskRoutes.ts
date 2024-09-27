import express from 'express';
import { addTaskToCache, getTasksFromRedis } from './taskController';

const router = express.Router();

router.post('/add', async (req, res) => {
    const { task } = req.body;
    try {
        await addTaskToCache(task);
        res.status(201).json({ message: "Task added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to add task" });
    }
});

router.get('/fetchAllTasks', async (req, res) => {
    try {
        const tasks = await getTasksFromRedis();
        res.json({ tasks });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch tasks" });
    }
});

export default router;
