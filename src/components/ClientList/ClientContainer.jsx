import Client from "./Client";
function WebsiteContainer({ searchQuery }) {
  return (
    <div className="bg-gray-200 rounded-xl">
      <div className="p-2">
        <Client searchQuery={searchQuery} />
      </div>
    </div>
  );
}
export default WebsiteContainer;
