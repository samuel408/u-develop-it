const express = require('express');
const router = express.Router();

//routers
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));


module.exports = router;