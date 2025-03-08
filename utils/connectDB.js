import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) return;
    // console.log(process.env.MNGO_URI);
    
    await mongoose.connect(
      "mongodb+srv://hosseinmahdiian:Lbm616eaAM1sZlq3@cluster0.xown3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      console.log("Connected DB")
    );
  } catch (e) {
    console.log("error to Connected",e);
  }
};
export default ConnectDB;
