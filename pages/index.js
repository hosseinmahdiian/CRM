import HomePage from "@/components/template/homePage";
import Customer from "@/Models/cunstoner";
import ConnectDB from "@/utils/connectDB";

export default function Home({ customers }) {
  // console.log(customers);

  return (
   
    <HomePage customers={customers} />
  );
}
//SSR
export async function getServerSideProps() {
  try {
    await ConnectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
