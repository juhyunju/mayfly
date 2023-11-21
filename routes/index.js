const express = require("express");
const router = express.Router();
  
const adminRouter = require("./adminRouter");
const userRouter = require("./userRouter");
const hostRouter = require("./hostRouter");
const classesRouter = require("./classesRouter");
const schedulesRouter = require("./schedulesRouter");
const imageRouter = require("./imageRouter")

router.use("/admins", adminRouter.router);
router.use("/users", userRouter.router);
router.use("/hosts", hostRouter.router);
router.use('/classes',classesRouter.router);
router.use('/schedules',schedulesRouter.router);

router.use('/images',imageRouter)

module.exports = router;


