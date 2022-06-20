const express = require('express');
const app = express();
const { port } = require('./config/config')
const verifyJWT = require('./middleware/verifyJWT');
const path = require('path')
// Implement Middleware
require('./middleware/express')(app);

// route variables
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const refreshRoute = require('./routes/refresh')

// using the routes
app.use('/api', authRoute)
// Add refresh token route
// app.use('/api/refresh', refreshRoute)
// You can either use verifyJWT above the routes to select all 
// or within the routes to select seperately 
// app.use(verifyJWT);
app.use('/api/users/', verifyJWT, userRoute)

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    console.log("I reached number 1")
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
        console.log("I reached number 2")
    });
}

app.listen(port, () => { console.log(`Server listening on port ${port}`) })