function DomainHosting() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Domain & Hosting</h1>

      {/* Domain Management */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Domain Management
        </h2>
        <div className="space-y-4">
          <div className="border border-gray-600 rounded-lg p-4 bg-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Current Domain</h3>
                <p className="text-gray-300">mysite.brizy.com</p>
                <span className="bg-orange-900 text-orange-300 px-2 py-1 rounded text-xs">
                  Temporary
                </span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Connect Custom Domain
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-blue-400 transition-colors bg-gray-700">
              <div className="text-2xl mb-2">🔗</div>
              <h3 className="font-medium text-white">
                Connect Existing Domain
              </h3>
              <p className="text-sm text-gray-400">
                Use a domain you already own
              </p>
            </button>

            <button className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-blue-400 transition-colors bg-gray-700">
              <div className="text-2xl mb-2">🛒</div>
              <h3 className="font-medium text-white">Buy New Domain</h3>
              <p className="text-sm text-gray-400">
                Register a new domain name
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* DNS Settings */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">DNS Settings</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-gray-600 rounded-lg bg-gray-700">
            <div>
              <span className="font-medium text-white">A Record</span>
              <p className="text-sm text-gray-400">@ → 192.168.1.1</p>
            </div>
            <button className="text-blue-400 hover:text-blue-300">Edit</button>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-600 rounded-lg bg-gray-700">
            <div>
              <span className="font-medium text-white">CNAME Record</span>
              <p className="text-sm text-gray-400">www → mysite.brizy.com</p>
            </div>
            <button className="text-blue-400 hover:text-blue-300">Edit</button>
          </div>
          <button className="w-full border-2 border-dashed border-gray-600 rounded-lg p-3 text-center hover:border-blue-400 transition-colors bg-gray-700 text-gray-300">
            + Add DNS Record
          </button>
        </div>
      </div>

      {/* SSL Status */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          SSL Certificate
        </h2>
        <div className="flex items-center space-x-4 p-4 bg-green-900 border border-green-700 rounded-lg">
          <div className="text-green-400 text-2xl">🔒</div>
          <div>
            <h3 className="font-medium text-green-300">SSL Active</h3>
            <p className="text-sm text-green-400">
              Your site is secure with HTTPS
            </p>
            <p className="text-xs text-green-500">Expires: Dec 15, 2025</p>
          </div>
        </div>
      </div>

      {/* Hosting Plan */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">Hosting Plan</h2>
        <div className="border border-gray-600 rounded-lg p-4 bg-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-medium text-white">Professional Plan</h3>
              <p className="text-gray-300">$19/month</p>
            </div>
            <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs">
              Current Plan
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Storage Used</span>
              <span className="text-gray-300">2.3 GB / 10 GB</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "23%" }}
              ></div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Bandwidth</span>
              <span className="text-gray-300">45 GB / 100 GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Email Accounts</span>
              <span className="text-gray-300">3 / 10</span>
            </div>
          </div>

          <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default DomainHosting;
