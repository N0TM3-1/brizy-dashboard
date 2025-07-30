function WebsiteManagement() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Website Management</h1>

      {/* Edit Website Section */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Website Builder
        </h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
          🎨 Edit Website
        </button>
        <p className="text-gray-400 mt-2">
          Open the visual website builder to edit your site
        </p>
      </div>

      {/* Pages Management */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Pages</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            + Add Page
          </button>
        </div>
        <div className="space-y-3">
          {["Home", "About", "Services", "Contact", "Blog"].map(
            (page, index) => (
              <div
                key={page}
                className="flex items-center justify-between p-3 border border-gray-600 rounded-lg bg-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400">📄</span>
                  <span className="font-medium text-white">{page}</span>
                  {index === 0 && (
                    <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs">
                      Homepage
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-400 hover:text-blue-300">
                    Edit
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Media Library */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Media Library</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Upload Files
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="border border-gray-600 rounded-lg p-4 text-center bg-gray-700"
            >
              <div className="w-full h-20 bg-gray-600 rounded mb-2 flex items-center justify-center">
                <span className="text-gray-400">🖼️</span>
              </div>
              <p className="text-sm text-gray-300">image_{item}.jpg</p>
            </div>
          ))}
        </div>
      </div>

      {/* Themes and Style Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Themes & Templates
          </h2>
          <div className="space-y-3">
            <div className="border border-blue-600 rounded-lg p-3 bg-blue-900">
              <span className="font-medium text-white">Modern Business</span>
              <span className="bg-blue-800 text-blue-200 px-2 py-1 rounded text-xs ml-2">
                Active
              </span>
            </div>
            <div className="border border-gray-600 rounded-lg p-3 hover:bg-gray-700 cursor-pointer bg-gray-700">
              <span className="font-medium text-white">Creative Portfolio</span>
            </div>
            <div className="border border-gray-600 rounded-lg p-3 hover:bg-gray-700 cursor-pointer bg-gray-700">
              <span className="font-medium text-white">Minimal Blog</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Style Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Primary Color
              </label>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
                <span className="text-sm text-gray-400">#2563eb</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Font Family
              </label>
              <select className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white">
                <option>Inter</option>
                <option>Roboto</option>
                <option>Open Sans</option>
              </select>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Customize Styles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteManagement;
