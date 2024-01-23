const express = require("express");

const router = express.Router();
const { getAlltasks,
    Createtacks,
    getSingletask,
    Updatetask,
    Deltetask } = require("../controllers/tasks")
router.get("/", getAlltasks)
router.post("/", Createtacks)
router.get("/:id", getSingletask)
router.patch("/:id", Updatetask)
router.delete("/:id", Deltetask)

module.exports = router;