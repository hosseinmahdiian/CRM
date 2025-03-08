import Customer from "@/Models/cunstoner";
import ConnectDB from "@/utils/connectDB";
import { useRouter } from "next/router";

export default async function handler(req, res) {
  try {
    await ConnectDB();
  } catch (error) {
    res.status(500).json({ success: false, message: "can not conected to DB" });
  }

  if (req.method == "DELETE") {
    const ID = req.query.customerID;
    const data = req.body.data;

    try {
      const customer = await Customer.deleteOne({ _id: ID });
     
      res.json({
        success: true,
        message: "Customer deleted successfully",
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "can not delete customer" });
      return;
    }
  }
}
