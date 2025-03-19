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
