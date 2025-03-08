import Customer from "@/Models/cunstoner";
import React from "react";
import Card from "../module/card";

const HomePage = ({ customers }) => {

  return (
    <div className="container mx-auto mt-6">
      {customers.map((item) => (
        <Card key={item._id} customer={item} />
      ))}
    </div>
  );
};

export default HomePage;
