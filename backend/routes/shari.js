var express = require("express");
var router = express.Router();
var Shari = require("../models/shari.js");

/* GET users listing. */
router.post("/", async function (req, res) {
  console.log("hit");
  try {
    var shari = new Shari(req.body);
    await shari.save();
    res.send(shari);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async function (req, res) {
  const use = await Shari.find();
  res.send(use);
});
router.get("/:id", async function (req, res) {
  console.log("getting");
  const use = await Shari.find();
  res.send(use);
});

router.delete("de/:id", async function (req, res) {
  console.log("delete");
  let sharF = await sharF.findById(req.params.id);
  await sharF.delete();
  return res.send("deleted");
});
module.exports = router;
