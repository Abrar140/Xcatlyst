const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    title: {
      type: Number,
      required: true,
    },
    description:{
      type: String,
      required: true,
    },
    status:{
      type: String,
      required: true,
    },
    owner:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    }
},
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = TaskModel;







const router = require("express").Router();
const TaskModel = require("../Modals/Task");

router.get("/all", async (req, res) => {
  try {
    const userId=req.user_.id
    const task = await User.find({owner:userId});
    res.status(200).json({tasks:allTasks, message:"Task access sucessfully"});
  } catch (error) {
    res.status(500).json({ error: "Failed to get  all Tasks" });
  }
});

module.exports = router;

