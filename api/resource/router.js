const express = require("express");
const router = express.Router();
const ResourceModel = require("./model");

router.get("/", (req, res) => {
  ResourceModel.getAll().then((data) => {
    res.status(200).json(data);
  });
});

router.post("/", (req, res) => {
  ResourceModel.create(req.body)
    .then((data) => {
      return ResourceModel.getById(data);
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

module.exports = router;
