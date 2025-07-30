function BlogCMS() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Blog / CMS</h1>

      {/* Blog Posts Management */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Blog Posts</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            + Create New Post
          </button>
        </div>

        <div className="space-y-3">
          {[
            {
              title: "Getting Started with Web Design",
              status: "Published",
              date: "Jan 15, 2025",
              views: "1.2k",
            },
            {
              title: "Best Practices for SEO",
              status: "Draft",
              date: "Jan 12, 2025",
              views: "-",
            },
            {
              title: "Mobile-First Design Principles",
              status: "Scheduled",
              date: "Jan 20, 2025",
              views: "-",
            },
            {
              title: "Color Theory in Web Design",
              status: "Published",
              date: "Jan 8, 2025",
              views: "890",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{post.title}</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      post.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : post.status === "Draft"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {post.status}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500">
                    {post.views} views
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-700">
                  Edit
                </button>
                <button className="text-gray-500 hover:text-gray-600">
                  Preview
                </button>
                <button className="text-red-600 hover:text-red-700">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories and Tags */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
            <button className="text-blue-600 hover:text-blue-700">+ Add</button>
          </div>
          <div className="space-y-2">
            {["Web Design", "SEO", "Marketing", "Development"].map(
              (category) => (
                <div
                  key={category}
                  className="flex items-center justify-between p-2 border border-gray-300 rounded bg-gray-50"
                >
                  <span className="text-gray-900">{category}</span>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-700 text-sm">
                      Delete
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Tags</h2>
            <button className="text-blue-600 hover:text-blue-700">+ Add</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "responsive",
              "mobile",
              "css",
              "javascript",
              "ui/ux",
              "tutorials",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Post Scheduling */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Post Scheduling
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-blue-300 rounded-lg bg-blue-50">
            <div>
              <h3 className="font-medium text-gray-900">
                Advanced CSS Techniques
              </h3>
              <p className="text-sm text-gray-500">
                Scheduled for Jan 25, 2025 at 9:00 AM
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-700">
                Edit Schedule
              </button>
              <button className="text-green-600 hover:text-green-700">
                Publish Now
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-blue-300 rounded-lg bg-blue-50">
            <div>
              <h3 className="font-medium text-gray-900">
                WordPress vs Custom Development
              </h3>
              <p className="text-sm text-gray-500">
                Scheduled for Feb 1, 2025 at 10:00 AM
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-700">
                Edit Schedule
              </button>
              <button className="text-green-600 hover:text-green-700">
                Publish Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Moderation */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Comment Moderation
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-gray-50">
            <div>
              <h4 className="font-medium text-gray-900">
                Great article! Very helpful tips.
              </h4>
              <p className="text-sm text-gray-500">
                by John Doe on "Getting Started with Web Design"
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                Approve
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                Reject
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-gray-50">
            <div>
              <h4 className="font-medium text-gray-900">
                How often should I update my website?
              </h4>
              <p className="text-sm text-gray-500">
                by Sarah Smith on "Best Practices for SEO"
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                Approve
              </button>
              <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCMS;
