import React from "react";
import { Controller } from "react-hook-form";

const SubjectInput = ({ index, removeSubject, control }) => {
  return (
    <div className="mb-2 flex" key={index}>
      <Controller
        name={`subjects[${index}].className`}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Class name"
          />
        )}
      />
      <button
        className="ml-2 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700"
        type="button"
        onClick={() => removeSubject(index)}
      >
        Remove
      </button>
    </div>
  );
};

export default SubjectInput;
