import ClientGroup from "@/components/ClientList/ClientGroup";

function ClientList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Client List</h1>
        <input
          type="text"
          placeholder="Search clients..."
          className="px-4 py-2 border border-gray-300 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <ClientGroup />
    </div>
  );
}

export default ClientList;
