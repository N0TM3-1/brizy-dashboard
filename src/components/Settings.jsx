function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Settings</h1>

      {/* Site Language & Localization */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Site Language & Localization
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Primary Language
            </label>
            <select className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white">
              <option>English (US)</option>
              <option>English (UK)</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Italian</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Time Zone
            </label>
            <select className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white">
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+1 (Central European)</option>
              <option>UTC+9 (Japan Standard)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Date Format
            </label>
            <select className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white">
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Currency
            </label>
            <select className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>JPY (¥)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cookie Consent Banner */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Cookie Consent Banner
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="cookie-banner"
              className="rounded"
              defaultChecked
            />
            <label htmlFor="cookie-banner" className="font-medium text-white">
              Enable cookie consent banner
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Banner Message
            </label>
            <textarea
              className="w-full border border-gray-600 rounded-lg px-3 py-2 h-20 bg-gray-700 text-white"
              defaultValue="We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Accept Button Text
              </label>
              <input
                type="text"
                className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white"
                defaultValue="Accept All"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Decline Button Text
              </label>
              <input
                type="text"
                className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white"
                defaultValue="Decline"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Privacy Policy Link
            </label>
            <input
              type="url"
              className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white"
              placeholder="https://yoursite.com/privacy"
            />
          </div>
        </div>
      </div>

      {/* User Permissions */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">User Permissions</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            + Invite Collaborator
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-300 font-medium">JD</span>
              </div>
              <div>
                <h3 className="font-medium text-white">John Doe</h3>
                <p className="text-sm text-gray-400">john@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-xs">
                Owner
              </span>
              <button className="text-gray-400 hover:text-gray-300">⋯</button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center">
                <span className="text-green-300 font-medium">JS</span>
              </div>
              <div>
                <h3 className="font-medium text-white">Jane Smith</h3>
                <p className="text-sm text-gray-400">jane@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select className="border border-gray-600 rounded px-2 py-1 text-sm bg-gray-600 text-white">
                <option>Editor</option>
                <option>Viewer</option>
                <option>Admin</option>
              </select>
              <button className="text-red-400 hover:text-red-300">
                Remove
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-orange-900 rounded-full flex items-center justify-center">
                <span className="text-orange-300 font-medium">MW</span>
              </div>
              <div>
                <h3 className="font-medium text-white">Mike Wilson</h3>
                <p className="text-sm text-gray-400">mike@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select className="border border-gray-600 rounded px-2 py-1 text-sm bg-gray-600 text-white">
                <option>Viewer</option>
                <option>Editor</option>
                <option>Admin</option>
              </select>
              <button className="text-red-400 hover:text-red-300">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backup & Restore */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Backup & Restore
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3 text-white">Automatic Backups</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="auto-backup"
                  className="rounded"
                  defaultChecked
                />
                <label htmlFor="auto-backup" className="text-sm text-gray-300">
                  Enable automatic backups
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Backup Frequency
                </label>
                <select className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Retention Period
                </label>
                <select className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white">
                  <option>30 days</option>
                  <option>90 days</option>
                  <option>1 year</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-white">Manual Backup</h3>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4">
              Create Backup Now
            </button>

            <h4 className="font-medium mb-2 text-white">Recent Backups</h4>
            <div className="space-y-2">
              {[
                { date: "Jan 30, 2025 - 2:30 PM", type: "Automatic" },
                { date: "Jan 29, 2025 - 2:30 PM", type: "Automatic" },
                { date: "Jan 25, 2025 - 4:15 PM", type: "Manual" },
              ].map((backup, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 border border-gray-600 rounded text-sm bg-gray-700"
                >
                  <div>
                    <span className="font-medium text-white">
                      {backup.date}
                    </span>
                    <span className="text-gray-400 ml-2">({backup.type})</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-400 hover:text-blue-300">
                      Download
                    </button>
                    <button className="text-green-400 hover:text-green-300">
                      Restore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border-l-4 border-red-500">
        <h2 className="text-xl font-semibold mb-4 text-red-400">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-900 rounded-lg border border-red-700">
            <div>
              <h3 className="font-medium text-red-300">Reset Website</h3>
              <p className="text-sm text-red-400">
                Remove all content and return to default template
              </p>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Reset Site
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-red-900 rounded-lg border border-red-700">
            <div>
              <h3 className="font-medium text-red-300">Delete Website</h3>
              <p className="text-sm text-red-400">
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
