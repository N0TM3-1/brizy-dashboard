import { useState } from "react";
import WebsiteGroup from "@/components/WebsiteList/WebsiteGroup";

function WebsiteList() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Website List</h1>
        <input
          type="text"
          placeholder="Search websites..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <WebsiteGroup searchQuery={searchQuery} />
    </div>
  );
}

export default WebsiteList;
