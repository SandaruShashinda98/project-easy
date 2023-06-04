import mongoose from "mongoose";

async function connect() {
  const dbUri = "mongodb+srv://sshashinda19982:sandaru123@cluster0.quwtjdi.mongodb.net/"

  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (error) {
   console.log("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
