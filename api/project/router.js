const express = require("express");
const router = express.Router();
const Projectsmodel = require("./model");

router.get("/", (req, res) => {
  Projectsmodel.getAll().then((data) => {
    const newArr = [];
    for (let i in data) {
      if (data[i]["completed"] === 0) {
        newArr.push({
          id: data[i].id,
          name: data[i].name,
          description: data[i].description,
          completed: false,
        });
      } else {
        newArr.push({
          id: data[i].id,
          name: data[i].name,
          description: data[i].description,
          completed: true,
        });
      }
    }
    res.status(200).json(newArr);
  });
});

router.post("/", (req, res) => {
  Projectsmodel.create(req.body)
    .then((data) => {
      return Projectsmodel.getById(data);
    })
    .then((data) => {
      if (data["completed"] === 0) {
        res.status(200).json({
          id: data.id,
          name: data.name,
          description: data.description,
          completed: false,
        });
      } else {
        res.status(200).json({
          id: data.id,
          name: data.name,
          description: data.description,
          completed: true,
        });
      }
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

module.exports = router;
