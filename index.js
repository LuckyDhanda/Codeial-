const express = require('express'); // Import Express framework
const app = express(); // Create an instance of Express
const port = 3000; // Define the port to run the server

const cookieParser = require('cookie-parser'); // Import cookie-parser middleware

const db = require('./config/mongoose'); // Import database configuration

// Step 1: Set up the view engine, layout middleware, and other middlewares
const expressLayouts = require('express-ejs-layouts'); // Import express-ejs-layouts middleware
app.use(expressLayouts); // Use the layout middleware for EJS

app.set("layout extractStyles", true); // Extract styles from the layout
app.set("layout extractScripts", true); // Extract scripts from the layout

// Middleware to parse URL-encoded data (from forms)
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Middleware to parse JSON data
app.use(express.json()); // For parsing application/json

// Set the view engine to EJS
app.set('view engine', 'ejs'); // Set EJS as the templating engine
// app.set('views', './views'); // Optional: Specify the views directory if not default

app.use(express.static('assets')); // Serve static files from the 'assets' directory
app.use(cookieParser()); // Use cookie-parser to parse cookies from request headers

// Step 2: Define your routes
const router = require('./routes/index'); // Import your route definitions
app.use('/', router); // Use the imported routes for requests to the root path

// Step 3: Start the server
app.listen(port, (err) => {
    if (err) {
        console.log(`Error occurred while connecting to port ${port}`); // Log error if server fails to start
    } else {
        console.log(`Successfully connected to port ${port}`); // Log success message
    }
});
