const express = require("express");
const router = express.Router();
const Model = require("./model");

router.get("/resources", (req, res) => {
  Model.getResource()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Resources" });
    });
});

router.post("/", (req, res) => {
  Model.create(req.body)
    .then((data) => {
      return Model.getById(data);
    })
    .then((data) => {
      res.status(200).json(data);
    });
});

module.exports = router;
