const express = require('express');
const childProcess = require('child_process');

const router = express.Router();

const gitCommit = 'git rev-parse HEAD';
const latestCommit = childProcess.execSync(gitCommit).toString().trim();

const package = require('../../package.json');

router.get('/', (req, res, next) => {
    res.status(200).json({
        "myapplication": [
          {
            "version": package.version,
            "description" : package.description,
            "lastcommitsha": latestCommit
          }
        ]
    });
})

module.exports = router;