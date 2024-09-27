import { createClient } from 'redis';
import mongoose from 'mongoose';

// Redis client setup
const redisClient = createClient({
  url: `redis://${process.env.REDIS_CACHE}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

// MongoDB Task Schema
const taskSchema = new mongoose.Schema({
  task: { type: String, required: true },
}, { timestamps: true });

const Task = mongoose.model('assignment_guru', taskSchema);

// Redis-related functions
export const getTasksFromRedis = async (): Promise<string[]> => {
  const tasks = await redisClient.get(`FULLSTACK_TASK_${process.env.REDIS_USERNAME}`);
  return tasks ? JSON.parse(tasks) : [];
};

export const setTasksInRedis = async (tasks: string[]): Promise<void> => {
  await redisClient.set(
    `FULLSTACK_TASK_${process.env.REDIS_USERNAME}`,
    JSON.stringify(tasks)
  );
};

export const addTaskToCache = async (task: string) => {
  const tasks = await getTasksFromRedis();
  tasks.push(task);

  if (tasks.length > 50) {
    await Task.insertMany(tasks.map(t => ({ task: t })));
    console.log(`Moved ${tasks.length} tasks to MongoDB.`);
    await redisClient.del(`FULLSTACK_TASK_${process.env.REDIS_USERNAME}`);  // Flush cache
  } else {
    await setTasksInRedis(tasks);
  }
};