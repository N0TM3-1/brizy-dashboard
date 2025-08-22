import WebsiteContainer from "./WebsiteContainer";
function WebsiteGroup({ searchQuery }) {
  return (
    <div className="bg-white shadow-2xl p-2 rounded-xl">
      <h1 className="text-2xl m-2">Group Name</h1>
      <WebsiteContainer searchQuery={searchQuery} />
    </div>
  );
}

export default WebsiteGroup;
