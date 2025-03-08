import React from "react";
import ItemList from "./itemList";
import FormInput from "./formInput";

const Form = ({ form, setForm }) => {
  console.log(form);

  const chengHandler = (e) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };
  return (
    <div className="h-full">
      <FormInputs chengHandler={chengHandler} form={form} />

      <ItemList form={form} setForm={setForm} />
    </div>
  );
};

export default Form;
export const FormInputs = ({ chengHandler, form }) => {
  return (
    <div
      className=" w-full border border-gray-400 my-2 rounded-lg p-2"
      // key={index}
    >
      <FormInput
        name="name"
        label="Name"
        type="text"
        value={form.name}
        chenchHandeler={(e) => chengHandler(e)}
      />
      <FormInput
        name="lastName"
        label="Last Name"
        type="text"
        value={form.lastName}
        chenchHandeler={(e) => chengHandler(e)}
      />
      <FormInput
        name="email"
        label="Email"
        type="text"
        value={form.email}
        chenchHandeler={(e) => chengHandler(e)}
      />
      <FormInput
        name="phone"
        label="Phone"
        type="naumber"
        value={form.phone}
        chenchHandeler={(e) => chengHandler(e)}
      />
      <FormInput
        name="address"
        label="Address"
        type="text"
        value={form.address}
        chenchHandeler={(e) => chengHandler(e)}
      />
      <FormInput
        name="postalCode"
        label="Postal Code"
        type="naumber"
        value={form.postalCode}
        chenchHandeler={(e) => chengHandler(e)}
      />
      <FormInput
        name="date"
        label="Date"
        type="date"
        value={form.date}
        chenchHandeler={(e) => chengHandler(e)}
      />
    </div>
  );
};
