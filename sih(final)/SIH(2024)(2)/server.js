const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

// Handle login request
app.post('/login', (req, res) => {
    const user = req.body;
    fs.writeFileSync('user.json', JSON.stringify(user)); // Save user data to a file
    res.json({ success: true });
});

// Fetch mentor details
app.get('/get-mentors', (req, res) => {
    const mentorData = [
        { name: "John Doe", expertise: "Web Development", experience: "5 years", img: "mentor1.png" },
        { name: "Jane Smith", expertise: "Data Science", experience: "3 years", img: "mentor2.png" },
        { name: "Robert Brown", expertise: "Cybersecurity", experience: "7 years", img: "mentor3.png" },
        // More mentors can be added here
    ];

    res.json(mentorData);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
