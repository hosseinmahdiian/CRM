import Customer from "@/Models/cunstoner";
import ConnectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await ConnectDB();
  } catch (e) {
    res.status(500).json({ success: false, message: "can not connect to DB" });
    return;
  }

  if (req.method == "DELETE") {
    const ID = req.query.customerID;
    try {
      await Customer.findByIdAndDelete({ _id: ID });
      res
        .status(200)
        .json({ success: true, message: "deleted Customer in DB" });
    } catch (error) {
      res.status(500).json({ success: false, message: "can not deleted " });
      return;
    }
  }
}
