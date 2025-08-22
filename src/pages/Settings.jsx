function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

      {/* Language & Localization */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Language & Localization
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Primary Language
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900">
              <option>English (US)</option>
              <option>English (UK)</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Italian</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Time Zone
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900">
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+1 (Central European)</option>
              <option>UTC+9 (Japan Standard)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Date Format
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900">
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Currency
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>JPY (¥)</option>
            </select>
          </div>
        </div>
      </div>

      {/* User Permissions */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            User Permissions
          </h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            + Invite Collaborator
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-medium">JD</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">John Doe</h3>
                <p className="text-sm text-gray-500">john@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                Owner
              </span>
              <button className="text-gray-500 hover:text-gray-600">⋯</button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-700 font-medium">JS</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Jane Smith</h3>
                <p className="text-sm text-gray-500">jane@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white text-gray-900">
                <option>Editor</option>
                <option>Viewer</option>
                <option>Admin</option>
              </select>
              <button className="text-red-600 hover:text-red-700">
                Remove
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-700 font-medium">MW</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Mike Wilson</h3>
                <p className="text-sm text-gray-500">mike@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white text-gray-900">
                <option>Viewer</option>
                <option>Editor</option>
                <option>Admin</option>
              </select>
              <button className="text-red-600 hover:text-red-700">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-500">
        <h2 className="text-xl font-semibold mb-4 text-red-600">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
            <div>
              <h3 className="font-medium text-red-700">Reset Website</h3>
              <p className="text-sm text-red-600">
                Remove all content and return to default template
              </p>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Reset Site
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
            <div>
              <h3 className="font-medium text-red-700">Delete Website</h3>
              <p className="text-sm text-red-600">
                Permanently delete this website and all its data
              </p>
            </div>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors">
              Delete Forever
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
