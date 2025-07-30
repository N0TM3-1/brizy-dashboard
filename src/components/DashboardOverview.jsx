function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>

      {/* Website Preview Card */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Website Preview
        </h2>
        <div className="flex items-center space-x-4">
          <div className="w-32 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">🖼️ Thumbnail</span>
          </div>
          <div>
            <h3 className="font-medium text-lg text-white">
              My Awesome Website
            </h3>
            <p className="text-green-400 font-medium">✅ Published</p>
            <p className="text-sm text-gray-400">Last updated: 2 hours ago</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Traffic Summary
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">Visitors (30 days)</span>
              <span className="font-bold text-white">1,234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Page Views</span>
              <span className="font-bold text-white">5,678</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Recent Updates
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-300">• Updated homepage content</li>
            <li className="text-gray-300">• Added new blog post</li>
            <li className="text-gray-300">• Changed site colors</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-white">Next Steps</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-orange-400">• Connect your domain</li>
            <li className="text-blue-400">• Set up Google Analytics</li>
            <li className="text-green-400">• Add more pages</li>
          </ul>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Edit Website
          </button>
          <button className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Add New Page
          </button>
          <button className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Create Blog Post
          </button>
          <button className="bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
