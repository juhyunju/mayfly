const express = require("express");
const router = express.Router();

const imageRouter = require("./imageRouter")
router.use('/images',imageRouter)


module.exports = router;