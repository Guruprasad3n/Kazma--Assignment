import mqtt from 'mqtt';
import { addTaskToCache } from './taskController';

const client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', () => {
    console.log('Connected to MQTT Broker');
    client.subscribe('/add', (err) => {
        if (err) {
            console.error('Failed to subscribe to /add');
        }
    });
});

client.on('message', async (topic, message) => {
    if (topic === '/add') {
        const task = message.toString();
        try {
            await addTaskToCache(task); 
        } catch (error) {
            console.error("Error adding task:", error);
        }
    }
});






// import mqtt from 'mqtt';
// import { addTaskToCache } from './taskController';

// const client = mqtt.connect('mqtt://broker.hivemq.com');

// client.on('connect', () => {
//     console.log('Connected to MQTT Broker');
//     client.subscribe('/add', (err) => {
//         if (err) {
//             console.error('Failed to subscribe to /add');
//         }
//     });
// });

// client.on('message', (topic, message) => {
//     if (topic === '/add') {
//         const task = message.toString();
//         addTaskToCache(task);  // Store task in Redis cache
//     }
// });

// export default client;
