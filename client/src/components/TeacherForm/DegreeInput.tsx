import React from "react";
import { Controller } from "react-hook-form";

const DegreeInput = ({ removeDegree, index, control }) => {
  return (
    <div className="mb-2 flex gap-2" key={index}>
      <Controller
        name={`degrees[${index}].degreeName`}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Degree Name"
          />
        )}
      />
      <Controller
        name={`degrees[${index}].university`}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="University"
          />
        )}
      />
      <Controller
        name={`degrees[${index}].year`}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Year"
          />
        )}
      />
      <button
        className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700"
        type="button"
        onClick={() => removeDegree(index)}
      >
        Remove
      </button>
    </div>
  );
};

export default DegreeInput;
