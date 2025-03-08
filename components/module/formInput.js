import React from "react";

const FormInput = ({ name, label, type, value, chenchHandeler }) => {
  return (
    <div className="relative w-[calc(100%-40px)] mx-auto my-2 mt-5 bg-gray-900  rounded-[8px]">
      <input
        className="peer border px-5 rounded-[8px] outline-0 h-10 w-full text-white"
        id={name}
        name={name}
        type={type}
        value={value}
        //   inputMode="numeric"
        onChange={(e) => chenchHandeler(e)}
      />
      <label
        htmlFor={name}
        className={`absolute start-1 text-sm z-20  transition-all ease-linear peer-focus:border-x  peer-focus:start-2.5 peer-focus:-top-2 peer-focus:text-sm bg-gray-900 text-white px-2 ${
          !!value ? `start-2.5 -top-2 !text-sm border-x` : `top-2`
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
