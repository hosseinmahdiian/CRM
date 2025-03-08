import DetailCustomer from "@/components/template/detailCustomer";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const details = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const {
    isReady,
    query: { customerID },
  } = router;
  const fetchCustomerData = async () => {
    if (!!isReady && !!customerID) {
      try {
        const res = await axios.get(`/api/customer/${customerID}`);
        const data = res.data; // axios automatically parses JSON
        setData(data);
      } catch (error) {
        console.log("Error fetching customer data");
      }
    }
  };

  useEffect(() => {
    fetchCustomerData();
  }, [isReady]);
  return (
    <div>
      <DetailCustomer data={data?.data} />
    </div>
  );
};

export default details;
