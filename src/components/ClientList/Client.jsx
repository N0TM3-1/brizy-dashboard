import { useState, useEffect } from "react";

function Client({ searchQuery }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/clients");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // The API response is already in the correct format with id and name properties
        setClients(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching clients:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  // Handle search functionality
  useEffect(() => {
    const performSearch = async () => {
      if (!searchQuery || searchQuery.trim() === "") {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      try {
        setIsSearching(true);
        const response = await fetch(
          `/api/get-client/${encodeURIComponent(searchQuery.trim())}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            setSearchResults([]);
            return;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Check if response is "Not found" string or actual client data
        if (typeof data === "string" && data === "Not found") {
          setSearchResults([]);
        } else if (Array.isArray(data) && data.length === 2) {
          // New API format: [results_array, status_code]
          const [resultsArray, statusCode] = data;

          if (statusCode === 200 && Array.isArray(resultsArray)) {
            // Use the client results directly (they already have id and name)
            setSearchResults(resultsArray);
          } else {
            setSearchResults([]);
          }
        } else if (data.id && data.name) {
          // Handle single client object (backward compatibility)
          setSearchResults([data]);
        } else {
          setSearchResults([]);
        }
      } catch (err) {
        console.error("Error searching clients:", err);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    performSearch();
  }, [searchQuery]);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  // Determine which clients to display
  const displayedClients =
    searchQuery && searchQuery.trim() !== "" ? searchResults : clients;
  const showLoading =
    searchQuery && searchQuery.trim() !== "" ? isSearching : loading;

  if (showLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-600">
          {searchQuery && searchQuery.trim() !== ""
            ? "Searching..."
            : "Loading clients..."}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-red-600">Error loading clients: {error}</div>
      </div>
    );
  }

  if (displayedClients.length === 0) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-600">
          {searchQuery && searchQuery.trim() !== ""
            ? "No clients found matching your search."
            : "No clients found."}
        </div>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-300">
      {displayedClients.map((client, index) => (
        <div
          key={client.id}
          className={`bg-white grid grid-cols-3 items-center ${
            index === 0 ? "rounded-t-2xl" : ""
          } ${index === displayedClients.length - 1 ? "rounded-b-2xl" : ""}`}
        >
          <div className="w-30 h-30 m-2 bg-gray-200 rounded-2xl flex items-center justify-center text-xs mx-3">
            🖼️ Thumbnail
          </div>
          <h1 className="text-xl px-3 m-2">{client.name}</h1>
          <div className="flex justify-end pr-4 relative">
            <button
              className="p-2 hover:bg-gray-100 rounded"
              onClick={() => toggleMenu(client.id)}
            >
              <div className="flex flex-col space-y-1">
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </button>

            {openMenuId === client.id && (
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
