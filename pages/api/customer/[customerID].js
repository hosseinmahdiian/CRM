import Customer from "@/Models/cunstoner";
import ConnectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await ConnectDB();
  } catch (error) {
    res.status(500).json({ success: false, mesage: "con not connect to DB" });
    return;
  }

  const ID = req.query.customerID;
  if (req.method == "GET") {
    try {
      const customer = await Customer.findOne({ _id: ID });
      res
        .status(200)
        .json({ success: true, message: "get data", data: customer });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, mesage: "con not get data to DB" });
      return;
    }
  } else if (req.method == "PATCH") {
    const data = req.body.data;
    console.log("kkkkk");
    
    try {
      const customer = await Customer.findOne({ _id: ID });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.postalCode = data.postalCode;
      customer.address = data.address;
      customer.products = data.products;
      customer.updataAt = Date.now();
      customer.save();
      res.json({
        success: true,
        message: "Customer updated successfully",
        data: customer,
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "can not update customer" });
      return;
    }
  }
}
