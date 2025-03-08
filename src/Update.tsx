import React, { useContext, useState } from "react";
import { Contextdata, Todo } from "./context/contextdata";
import { useParams, Link } from "react-router-dom";

const Updatate: React.FC = () => {
  const { id } = useParams();
  const { todo, updatetodo } = useContext(Contextdata);
  const mytodo = todo.filter((each) => each._id === id);
  const [data, setData] = useState<Todo>(mytodo[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Update Todo
        </h2>

        {/* Text Input */}
        <input
          type="text"
          name="text"
          placeholder="Todo Title"
          value={data.text}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />

        {/* Description Input */}
        <input
          type="text"
          name="dis"
          placeholder="Description"
          value={data.dis}
          onChange={handleChange}
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

        {/* Buttons */}
        <div className="flex justify-between">
          <Link to={"/app"} className="w-full">
            <button
              onClick={() => updatetodo(data)}
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Update Todo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Updatate;
