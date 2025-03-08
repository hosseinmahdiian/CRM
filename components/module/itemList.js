import React from "react";
import FormInput from "./formInput";

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const chengHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];

    newProducts[index][name] = value;
    setForm({
      ...form,
      products: newProducts,
    });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    console.log("hgf");

    setForm({
      ...form,
      products: newProducts,
    });
  };
  return (
    <div>
      <p>Purchased products</p>

      {products.map((product, index) => (
        <FormInputs
          key={index}
          deleteHandler={deleteHandler}
          index={index}
          chengHandler={chengHandler}
          item={product}
        />
      ))}

      <buuton
        className="text-green-500 border border-green-500 bg-gray-900 h-10 items-center text-center my-2 pt-2 inline-block w-full rounded-sm px-2"
        onClick={() => addHandler()}
      >
        Add Item
      </buuton>
    </div>
  );
};

export default ItemList;

 export const FormInputs = ({ chengHandler, deleteHandler, index, item }) => {
   return (
     <div
       className=" w-full border border-gray-400 my-2 rounded-lg p-2"
       // key={index}
     >
       <div className="w-full  py-5">
         <FormInput
           name="name"
           label="product Name"
           type="text"
           value={item.name}
           chenchHandeler={(e) => chengHandler(e, index)}
         />
         <div className="items-center flex gap-4 justify-between px-5 ">
           <FormInput
             name="price"
             label="peice"
             type="number"
             value={item.price}
             chenchHandeler={(e) => chengHandler(e, index)}
           />
           <FormInput
             name="qty"
             label="quantity"
             type="number"
             value={item.qty}
             chenchHandeler={(e) => chengHandler(e, index)}
           />
         </div>
       </div>
       <button
         className="text-red-500 border-red-500 border bg-gray-900 h-10 px-2 rounded-sm font-semibold w-full "
         onClick={() => deleteHandler(index)}
       >
         Remove
       </button>
     </div>
   );
 };
