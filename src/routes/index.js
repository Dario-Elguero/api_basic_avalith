const { Router } = require("express");
const fs = require("fs");

const router = Router();

router.get("/date", (req, res, next) => {
  const date = new Date();

  res.status(200).json({
    Date:
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
  });
});

router.get("/fs", async (req, res, next) => {
  try {
    let textFile = await fs.readFile("texto.txt", "utf8");
    res.status(200).json({ text: textFile });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err });
  }
});

router.post("/greeting", (req, res, next) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json({ greeting: "Good Moorning " + name });
  } else {
    res.status(400).json({ error: "missing enter name" });
  }
});

module.exports = router;
