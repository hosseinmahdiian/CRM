import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Card = ({ customer }) => {
  const router = useRouter();
  const deleteHandler = async () => {
    const res = await axios.delete(`/api/delete/${customer._id}`);
    const data = await res;
    if (data.status) {
      router.reload();
    }
    console.log(data);
  };
  return (
    <div className="bg-gray-900 my-2 flex items-center h-16 rounded-sm justify-between px-4">
      <div className="flex gap-4">
        <p className="text-white font-semibold block px-2">{customer.name}</p>
        <p className="text-white font-semibold block px-2">
          {customer.lastName}
        </p>

        <p className="text-white font-semibold block px-4">{customer.email}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => deleteHandler()}
          className="border rounded-sm px-2 border-red-500 text-red-500  bg-gray-900 h-10"
        >
          Delete
        </button>
        <Link
          href={`/edit/${customer._id}`}
          className="border rounded-sm px-2 border-green-500 text-green-500 pt-1.5 bg-gray-900 h-10"
        >
          Edit
        </Link>
        <Link
          href={`/customer/${customer._id}`}
          className="border rounded-sm px-2 border-green-500 text-green-500 pt-1.5 bg-gray-900 h-10"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
