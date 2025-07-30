function DomainHosting() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Domain & Hosting</h1>

      {/* Domain Management */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Domain Management
        </h2>
        <div className="space-y-4">
          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Current Domain</h3>
                <p className="text-gray-600">mysite.brizy.com</p>
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">
                  Temporary
                </span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Connect Custom Domain
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors bg-gray-50">
              <div className="text-2xl mb-2">🔗</div>
              <h3 className="font-medium text-gray-900">
                Connect Existing Domain
              </h3>
              <p className="text-sm text-gray-500">
                Use a domain you already own
              </p>
            </button>

            <button className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors bg-gray-50">
              <div className="text-2xl mb-2">🛒</div>
              <h3 className="font-medium text-gray-900">Buy New Domain</h3>
              <p className="text-sm text-gray-500">
                Register a new domain name
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* SSL Status */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          SSL Certificate
        </h2>
        <div className="flex items-center space-x-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="text-green-600 text-2xl">🔒</div>
          <div>
            <h3 className="font-medium text-green-700">SSL Active</h3>
            <p className="text-sm text-green-600">
              Your site is secure with HTTPS
            </p>
            <p className="text-xs text-green-500">Expires: Dec 15, 2025</p>
          </div>
        </div>
      </div>

      {/* Hosting Plan */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Hosting Plan
        </h2>
        <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-medium text-gray-900">Professional Plan</h3>
              <p className="text-gray-600">$19/month</p>
            </div>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
              Current Plan
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Storage Used</span>
              <span className="text-gray-600">2.3 GB / 10 GB</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "23%" }}
              ></div>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Bandwidth</span>
              <span className="text-gray-600">45 GB / 100 GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email Accounts</span>
              <span className="text-gray-600">3 / 10</span>
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
