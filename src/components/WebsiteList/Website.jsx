import { useState, useEffect } from "react";

function Website({ searchQuery }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/websites");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Transform the API response to include status color and label
        const transformedWebsites = data.map((website) => ({
          id: website.id,
          name: website.name,
          status: getStatusLabel(website.status),
          statusColor: getStatusColor(website.status),
        }));

        setWebsites(transformedWebsites);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching websites:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebsites();
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
          `/api/get-website/${encodeURIComponent(searchQuery.trim())}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            setSearchResults([]);
            return;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Check if response is "Not found" string or actual website data
        if (typeof data === "string" && data === "Not found") {
          setSearchResults([]);
        } else if (Array.isArray(data) && data.length === 2) {
          // New API format: [results_array, status_code]
          const [resultsArray, statusCode] = data;

          if (statusCode === 200 && Array.isArray(resultsArray)) {
            // Transform the website results
            const transformedWebsites = resultsArray.map((website) => ({
              id: website.id,
              name: website.name,
              status: getStatusLabel(website.status),
              statusColor: getStatusColor(website.status),
            }));
            setSearchResults(transformedWebsites);
          } else {
            setSearchResults([]);
          }
        } else if (data.id && data.name) {
          // Handle single website object (backward compatibility)
          const transformedWebsite = {
            id: data.id,
            name: data.name,
            status: getStatusLabel(data.status),
            statusColor: getStatusColor(data.status),
          };
          setSearchResults([transformedWebsite]);
        } else {
          setSearchResults([]);
        }
      } catch (err) {
        console.error("Error searching websites:", err);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    performSearch();
  }, [searchQuery]);

  const getStatusLabel = (status) => {
    switch (status) {
      case 1:
        return "Active";
      case 2:
        return "Pending";
      case 3:
        return "Inactive";
      default:
        return "Unknown";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 1:
        return "bg-green-500";
      case 2:
        return "bg-yellow-500";
      case 3:
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  // Determine which websites to display
  const displayedWebsites =
    searchQuery && searchQuery.trim() !== "" ? searchResults : websites;
  const showLoading =
    searchQuery && searchQuery.trim() !== "" ? isSearching : loading;

  if (showLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-600">
          {searchQuery && searchQuery.trim() !== ""
            ? "Searching..."
            : "Loading websites..."}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-red-600">Error loading websites: {error}</div>
      </div>
    );
  }

  if (displayedWebsites.length === 0) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-600">
          {searchQuery && searchQuery.trim() !== ""
            ? "No websites found matching your search."
            : "No websites found."}
        </div>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-300">
      {displayedWebsites.map((website, index) => (
        <div
          key={website.id}
          className={`bg-white grid grid-cols-4 items-center ${
            index === 0 ? "rounded-t-2xl" : ""
          } ${index === displayedWebsites.length - 1 ? "rounded-b-2xl" : ""}`}
        >
          <div className="w-48 h-27 m-2 bg-gray-200 rounded-2xl flex items-center justify-center text-xs mx-3">
            🖼️ Thumbnail
          </div>
          <h1 className="text-xl px-3 m-2">{website.name}</h1>
          <h1
            className={`text-center ${website.statusColor} text-white rounded-2xl w-fit mx-auto px-2 py-1`}
          >
            {website.status}
          </h1>
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

export default Website;
