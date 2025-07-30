import { useState } from "react";

function Client() {
  const [openMenuId, setOpenMenuId] = useState(null);

  const websites = [
    {
      id: 1,
      name: "Client 1",
    },
    {
      id: 2,
      name: "Client 2",
    },
    { id: 3, name: "Client 3" },
  ];

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className="divide-y divide-gray-300">
      {websites.map((website, index) => (
        <div
          key={website.id}
          className={`bg-white grid grid-cols-3 items-center ${
            index === 0 ? "rounded-t-2xl" : ""
          } ${index === websites.length - 1 ? "rounded-b-2xl" : ""}`}
        >
          <div className="w-30 h-30 m-2 bg-gray-200 rounded-2xl flex items-center justify-center text-xs mx-3">
            🖼️ Thumbnail
          </div>
          <h1 className="text-xl px-3 m-2">{website.name}</h1>
          <div className="flex justify-end pr-4 relative">
            <button
              className="p-2 hover:bg-gray-100 rounded"
              onClick={() => toggleMenu(website.id)}
            >
              <div className="flex flex-col space-y-1">
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </button>

            {openMenuId === website.id && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-32">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-lg">
                  Edit
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Publish
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Migrate
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Change workspace
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Leads
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 rounded-b-lg">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Client;
