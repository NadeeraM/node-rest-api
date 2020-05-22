const express = require('express');
const app = express();

const details = require('./api/routes/details.js');
const health = require('./api/routes/health.js');
const metadata = require('./api/routes/metadata.js');

// requests coming to details resource route to details router.
app.use('/api/v1/details', details);

// requests coming to health resource route to health router.
app.use('/api/v1/health', health);

// requests coming to metadata resource route to metadata router.
app.use('/api/v1/metadata', metadata);

app.use((req, res, next) => {
    res.status(404).json({
            error : {
                message : "Not Found"
            }
        });
})


module.exports = app;