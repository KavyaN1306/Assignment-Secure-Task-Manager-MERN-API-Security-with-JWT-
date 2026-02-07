// const express = require("express");
// const verifyToken = require("../middleware/verifyToken");

// const router = express.Router();

// router.get("/tasks", verifyToken, (req, res) => {
//   res.json({
//     message: "Tasks fetched successfully",
//     userId: req.userId
//   });
// });

// module.exports = router;

const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const Task = require("../models/Task");

const router = express.Router();

router.post("/tasks", verifyToken, async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    userId: req.userId
  });

  await task.save();
  res.json(task);
});

router.get("/tasks", verifyToken, async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
});

module.exports = router;
