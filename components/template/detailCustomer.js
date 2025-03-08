import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DetailCustomer = ({ data }) => {
  const date = moment(data?.date).utc().format("YYYY-MM-DD");
  const router =useRouter()
  const deleteHandler = async () => {
      const res = await axios.delete(`/api/delete/${data?._id}`);
      if (res.status) {
        router.push("/");
      }
    };
  return (
    <div>
      <p className="text-white font-semibold container mx-auto my-5 text-xl">
        Customer Details
      </p>

      <div className="grid md:grid-cols-3 grid-cols-1  bg-gray-900 container  mx-auto rounded-sm px-5 text">
        <div className="flex gap-2 my-2">
          <p className="text-blue-600 font-semibold">Name</p>
          <p className="text-white">{data?.name}</p>
        </div>
        <div className="flex gap-2 my-2">
          <p className="text-blue-600 font-semibold">Last Name</p>
          <p className="text-white">{data?.lastName}</p>
        </div>
        <div className="flex gap-2 my-2">
          <p className="text-blue-600 font-semibold">Email</p>
          <p className="text-white">{data?.email}</p>
        </div>
        <div className="flex gap-2 my-2">
          <p className="text-blue-600 font-semibold">Phone</p>
          <p className="text-white">{data?.phone}</p>
        </div>
        <div className="flex gap-2 my-2">
          <p className="text-blue-600 font-semibold ">Address</p>
          <p className="text-white line-clamp-1 text-ellipsis overflow-hidden">
            {data?.address}
          </p>
        </div>
        <div className="flex gap-2 my-2">
          <p className="text-blue-600 font-semibold">Postal Code</p>
          <p className="text-white">{data?.postalCode}</p>
        </div>{" "}
        <div className="flex gap-2 my-2">
          <p className="text-blue-600 font-semibold">Date</p>
          <p className="text-white">{date}</p>
        </div>
      </div>

      <div className="grid grid-cols-3   mt-10 bg-gray-900 container  mx-auto rounded-sm ">
        <p className="text-blue-600 font-semibold  text-center bord">
          Products Name
        </p>
        <p className="text-blue-600 font-semibold  text-center bord">Price</p>
        <p className="text-blue-600 font-semibold  text-center bord">Quntity</p>
        {data?.products.map((i, index) => (
          <React.Fragment key={index}>
            <p className="text-white my-3 font-semibold  text-center bord">
              {i.name}
            </p>
            <p className="text-white my-3 font-semibold  text-center bord">
              {i.price} $
            </p>{" "}
            <p className="text-white my-3 font-semibold  text-center bord">
              {i.qty}
            </p>
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-between  gap-2 container mx-auto mt-5">
        <button
          onClick={() => deleteHandler()}
          className="border rounded-sm px-2 border-red-500 text-red-500  bg-gray-900 h-10"
        >
          Delete
        </button>
        <Link
          href={`/edit/${data?._id}`}
          className="border rounded-sm px-2 border-green-500 text-green-500 pt-1.5 bg-gray-900 h-10"
        >
          Edit
        </Link>
       
      </div>
    </div>
  );
};

export default DetailCustomer;
