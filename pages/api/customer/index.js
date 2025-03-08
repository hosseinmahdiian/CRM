import Cusomer from "@/Models/cunstoner";
import ConnectDB from "@/utils/connectDB";

export default async function handeler(req, res) {
  try {
    await ConnectDB();
  } catch (error) {
     res
      .status(500)
      .json({ success: false, message: "erorr in connect to DB" });
      return;
  }

  if (req.method == "POST") {
    const data = req.body.data;

    // console.log(data);
    if (!data?.name || !data?.lastName || !data?.email) {
      res.status(400).json({ success: false, message: "invalid data" });
      return;
    }

    try {
      const customer = await Cusomer.create(data);
      await res
        .status(201)
        .json({ success: true, message: "data created in DB", data: customer });
    } catch (error) {
       res
        .status(500)
        .json({ success: false, message: "erorr in create data to DB" });
        return;
    }
  }
}
