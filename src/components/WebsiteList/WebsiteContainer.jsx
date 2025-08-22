import Website from "./Website";
function WebsiteContainer({ searchQuery }) {
  return (
    <div className="bg-gray-200 rounded-xl">
      <div className="p-2">
        <Website searchQuery={searchQuery} />
      </div>
    </div>
  );
}
export default WebsiteContainer;
