const express = require("express");
const cors = require("cors");
const app = express();
const { getFeed } = require("./feedController");

app.use(cors());

app.get("/feed", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const result = await getFeed(page);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error - app.js", error);
    res.send(null);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
