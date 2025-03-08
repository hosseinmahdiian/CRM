import React, { useEffect, useState } from "react";
import { useRouter } from "next/router.js";
import EditCustomer from "../../components/template/editCustomer"
import axios from "axios";
const index = () => {
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
  // console.log(data);

  return (
    <div>
      <EditCustomer data={data} />
    </div>
  );
};

export default index;
