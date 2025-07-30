function SEOMarketing() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">SEO & Marketing</h1>

      {/* SEO Checklist */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">SEO Checklist</h2>
        <div className="space-y-3">
          {[
            { item: "Meta titles and descriptions", completed: true },
            { item: "Alt text for images", completed: true },
            { item: "XML sitemap", completed: true },
            { item: "Google Search Console setup", completed: false },
            { item: "Page loading speed optimization", completed: false },
            { item: "Mobile responsiveness", completed: true },
            { item: "SSL certificate", completed: true },
          ].map((task, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 border border-gray-600 rounded-lg bg-gray-700"
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  task.completed
                    ? "bg-green-900 text-green-400"
                    : "bg-gray-600 text-gray-400"
                }`}
              >
                {task.completed ? "✓" : "○"}
              </div>
              <span className={task.completed ? "text-white" : "text-gray-400"}>
                {task.item}
              </span>
              {!task.completed && (
                <button className="ml-auto text-blue-400 hover:text-blue-300 text-sm">
                  Fix
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Meta Editor */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Meta Title & Description Editor
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Page
            </label>
            <select className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white">
              <option>Home</option>
              <option>About</option>
              <option>Services</option>
              <option>Contact</option>
              <option>Blog</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Meta Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-white"
              placeholder="Professional Web Design Services | Your Company"
              defaultValue="Professional Web Design Services | Your Company"
            />
            <p className="text-xs text-gray-400 mt-1">Character count: 52/60</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Meta Description
            </label>
            <textarea
              className="w-full border border-gray-600 rounded-lg px-3 py-2 h-20 bg-gray-700 text-white"
              placeholder="Create stunning websites with our professional web design services..."
              defaultValue="Create stunning websites with our professional web design services. Custom designs, responsive layouts, and SEO optimization included."
            />
            <p className="text-xs text-gray-400 mt-1">
              Character count: 128/160
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Social Media Integrations */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Social Media Integrations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { platform: "Facebook", connected: true, icon: "📘" },
            { platform: "Twitter", connected: false, icon: "🐦" },
            { platform: "Instagram", connected: true, icon: "📷" },
            { platform: "LinkedIn", connected: false, icon: "💼" },
          ].map((social) => (
            <div
              key={social.platform}
              className="flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{social.icon}</span>
                <span className="font-medium text-white">
                  {social.platform}
                </span>
              </div>
              <button
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  social.connected
                    ? "bg-green-900 text-green-300 hover:bg-green-800"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {social.connected ? "Connected" : "Connect"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Integration */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Analytics & Tracking
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="font-medium text-white">Google Analytics</h3>
                <p className="text-sm text-gray-400">
                  Track website visitors and behavior
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-xs">
                Connected
              </span>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Configure
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📘</span>
              <div>
                <h3 className="font-medium text-white">Facebook Pixel</h3>
                <p className="text-sm text-gray-400">
                  Track conversions and optimize ads
                </p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Connect
            </button>
          </div>
        </div>
      </div>

      {/* Email Marketing */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Email Marketing
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-600 rounded-lg bg-gray-700">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-medium text-white">Newsletter Subscribers</h3>
              <p className="text-2xl font-bold text-blue-400">1,234</p>
            </div>
            <div className="text-center p-4 border border-gray-600 rounded-lg bg-gray-700">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="font-medium text-white">Open Rate</h3>
              <p className="text-2xl font-bold text-green-400">24.5%</p>
            </div>
            <div className="text-center p-4 border border-gray-600 rounded-lg bg-gray-700">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-medium text-white">Click Rate</h3>
              <p className="text-2xl font-bold text-purple-400">3.2%</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Create Campaign
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              View Reports
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Manage Subscribers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SEOMarketing;
