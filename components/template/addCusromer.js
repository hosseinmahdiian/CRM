import React, { useState } from "react";
import Form from "../module/form";
import { useRouter } from "next/router";
import axios from "axios";

const AddCusromer = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const saveHandler = async () => {
    try {
      const res = await axios.post("/api/customer", { data: form });
      console.log(res.data);
      router.push("/");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const canselHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
    router.push("/");
  };
  return (
    <div className="container mx-auto  w-full border ">
      <h2 className="text-white font-semibold ">Add New Customer</h2>
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
          onClick={() => saveHandler()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCusromer;
