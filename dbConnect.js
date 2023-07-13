const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://satyam:w9L0ORvxA9uTTJk8@cluster0.pcb1ghk.mongodb.net/?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
