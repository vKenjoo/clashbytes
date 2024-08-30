// Use import instead of require
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kenjo', // Replace with your MySQL root password
    database: 'language_learning_app'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Fetch all languages
app.get('/api/languages', (req, res) => {
    const sql = 'SELECT * FROM Languages';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Fetch topics for a specific language
app.get('/api/languages/:id/topics', (req, res) => {
    const languageId = req.params.id;
    const sql = 'SELECT * FROM Topics WHERE language_id = ?';
    db.query(sql, [languageId], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Update user progress
app.post('/api/progress', (req, res) => {
    const { userId, topicId, completed } = req.body;
    const sql = `INSERT INTO Progress (user_id, topic_id, completed) VALUES (?, ?, ?)
                ON DUPLICATE KEY UPDATE completed = ?`;

    db.query(sql, [userId, topicId, completed, completed], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Progress updated!', result });
    });
});

// Fetch user progress
app.get('/api/progress/:userId', (req, res) => {
    const { userId } = req.params;
    const sql = `SELECT Topics.id, Topics.title, Progress.completed 
                FROM Topics 
                JOIN Progress ON Topics.id = Progress.topic_id 
                WHERE Progress.user_id = ?`;

    db.query(sql, [userId], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result);
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
