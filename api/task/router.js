const express = require("express");
const router = express.Router();
const TaskModel = require("./model");

router.get("/", (req, res) => {
  TaskModel.getAll(req.params.id)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed" });
    });
});

router.post("/", (req, res) => {
  const newTask = { project_id: req.params.id, ...req.body };
  TaskModel.create(newTask)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed" });
    });
});

module.exports = router;
