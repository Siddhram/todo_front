import { useContext } from "react";
import { Contextdata } from "./context/contextdata";
import { Link } from "react-router-dom";

function App() {
  const { todo, deletetodo } = useContext(Contextdata);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          My Todos
        </h1>

        <div className="space-y-4">
          {todo.map((each, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg flex justify-between items-center"
            >
              <Link to={`/app/${each._id}`} className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {each.text}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{each.dis}</p>
                <button
                  className={`mt-2 px-4 py-1 rounded-full text-sm font-medium ${
                    each.iscompleted
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {each.iscompleted ? "Completed" : "Pending"}
                </button>
              </Link>

              <button
                onClick={() => {
                  deletetodo({ id: each._id }).then(() => {
                    alert("Todo deleted");
                  });
                }}
                className="ml-4 bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
