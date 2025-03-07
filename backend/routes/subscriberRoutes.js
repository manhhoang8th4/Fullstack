const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

router.post("/subcriber", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  try {
    let subscriber = await Subscriber.findOne({ email });
    if (subscriber) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }
    subscriber = new Subscriber({ email });
    await subscriber.save();

    res
      .status(200)
      .json({ message: "Successfully subscribed to the newletter" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
