const express = require('express');
const path = require('path');
const app = express();
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.listen(4000, () => {
 console.log('Server running on http://localhost:4000');
});