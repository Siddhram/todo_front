import React, { useContext, useState } from "react";
import { Contextdata } from "./context/contextdata";
import { Todo } from "./context/contextdata";
import { useNavigate } from "react-router-dom";

const Addtodo: React.FC = () => {
  const { addtodo } = useContext(Contextdata);
  const navi=useNavigate()
  const [data, setData] = useState<Todo>({
    text: "",
    dis: "",
    iscompleted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Add New Todo
        </h2>

        {/* Text Input */}
        <input
          type="text"
          onChange={handleChange}
          value={data.text}
          placeholder="Enter Todo Title"
          name="text"
          className="w-full px-4 py-2 mb-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />

        {/* Description Input */}
        <input
          type="text"
          onChange={handleChange}
          value={data.dis}
          placeholder="Enter Description"
          name="dis"
          className="w-full px-4 py-2 mb-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />

        {/* Checkbox */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            name="iscompleted"
            checked={data.iscompleted}
            onChange={handleChange}
            className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="text-gray-700 dark:text-white">Completed</label>
        </div>

        {/* Button */}
        <button
          onClick={() => {addtodo(data).then(()=>{
            navi("/app")
          })}}
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default Addtodo;
