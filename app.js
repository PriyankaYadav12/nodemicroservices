// Import required modules
const express = require('express');
const axios = require('axios');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define the URL of the API you want to call
const apiUrl = 'http://192.168.159.136:9082/GetDepartmentListData';

// Route to fetch data from the API and render HTML view
app.get('/', async (req, res) => {
    try {
        // Fetch data from the API
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Render HTML view with data
        res.render('index', { data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
