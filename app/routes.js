const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.post('/registeruser', async (req, res) => {
    res.render('/registeruser', { } )
    
    });