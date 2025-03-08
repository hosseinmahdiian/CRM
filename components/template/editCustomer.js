import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "../module/form";
import moment from "moment";

const EditCustomer = ({ data }) => {
  console.log(data);

  const router = useRouter();
  const date = data?.data?.date ? moment(data?.data?.date).utc().format("YYYY-MM-DD") : "";
  const [form, setForm] = useState({
    name: data?.data?.name ?data?.data?.name: "",
    lastName: data?.data?.lastName ?data?.data?.lastName : "",
    email: data?.data?.email ?data?.data?.email: "",
    phone: data?.data?.phone ?data?.data?.phone: "",
    address: data?.data?.adress ?data?.data?.adress: "",
    postalCode: data?.data?.postalCode ?data?.data?.postalCode: "",
    date,
    products: data?.data?.products ?data?.data?.products: [],
  });
  useEffect(() => {
   setForm({
     name: data?.data?.name ? data?.data?.name : "",
     lastName: data?.data?.lastName ? data?.data?.lastName : "",
     email: data?.data?.email ? data?.data?.email : "",
     phone: data?.data?.phone ? data?.data?.phone : "",
     address: data?.data?.adress ? data?.data?.adress : "",
     postalCode: data?.data?.postalCode ? data?.data?.postalCode : "",
     date,
     products: data?.data?.products ? data?.data?.products : [],
   });
  }, [data?.data]);

  const editHandler = async () => {
    try {
      const res = await axios .patch(`/api/customer/${data?.data._id}`, {
        data: form,
      });
      console.log(res.data);
      router.push("/");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const canselHandler = () => {
    router.push("/");
  };
  return (
    <div className="container mx-auto  w-full border ">
      <h2 className="text-white font-semibold ">Edit Customer</h2>
      <Form form={form} setForm={setForm} />
      <div className="flex items-center justify-between">
        <button
          className=" border rounded-sm px-2 border-red-500 text-red-500  bg-gray-900 h-10"
          onClick={() => canselHandler()}
        >
          Cansel
        </button>
        <button
          className="border rounded-sm px-2 border-green-500 text-green-500  bg-gray-900 h-10"
          onClick={() => editHandler()}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditCustomer;
