function BlogCMS() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Blog / CMS</h1>

      {/* Blog Posts Management */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Blog Posts</h2>
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
              className="flex items-center justify-between p-4 border border-gray-600 rounded-lg hover:bg-gray-700 bg-gray-700"
            >
              <div className="flex-1">
                <h3 className="font-medium text-white">{post.title}</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      post.status === "Published"
                        ? "bg-green-900 text-green-300"
                        : post.status === "Draft"
                        ? "bg-yellow-900 text-yellow-300"
                        : "bg-blue-900 text-blue-300"
                    }`}
                  >
                    {post.status}
                  </span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <span className="text-sm text-gray-400">
                    {post.views} views
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-400 hover:text-blue-300">
                  Edit
                </button>
                <button className="text-gray-400 hover:text-gray-300">
                  Preview
                </button>
                <button className="text-red-400 hover:text-red-300">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories and Tags */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Categories</h2>
            <button className="text-blue-400 hover:text-blue-300">+ Add</button>
          </div>
          <div className="space-y-2">
            {["Web Design", "SEO", "Marketing", "Development"].map(
              (category) => (
                <div
                  key={category}
                  className="flex items-center justify-between p-2 border border-gray-600 rounded bg-gray-700"
                >
                  <span className="text-white">{category}</span>
                  <div className="flex space-x-2">
                    <button className="text-blue-400 hover:text-blue-300 text-sm">
                      Edit
                    </button>
                    <button className="text-red-400 hover:text-red-300 text-sm">
                      Delete
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Tags</h2>
            <button className="text-blue-400 hover:text-blue-300">+ Add</button>
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
                className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Post Scheduling */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Post Scheduling
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-blue-500 rounded-lg bg-blue-900">
            <div>
              <h3 className="font-medium text-white">
                Advanced CSS Techniques
              </h3>
              <p className="text-sm text-gray-400">
                Scheduled for Jan 25, 2025 at 9:00 AM
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-400 hover:text-blue-300">
                Edit Schedule
              </button>
              <button className="text-green-400 hover:text-green-300">
                Publish Now
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border border-blue-500 rounded-lg bg-blue-900">
            <div>
              <h3 className="font-medium text-white">
                WordPress vs Custom Development
              </h3>
              <p className="text-sm text-gray-400">
                Scheduled for Feb 1, 2025 at 10:00 AM
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-400 hover:text-blue-300">
                Edit Schedule
              </button>
              <button className="text-green-400 hover:text-green-300">
                Publish Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Moderation */}
      <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Comment Moderation
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-gray-600 rounded-lg bg-gray-700">
            <div>
              <h4 className="font-medium text-white">
                Great article! Very helpful tips.
              </h4>
              <p className="text-sm text-gray-400">
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
          <div className="flex items-center justify-between p-3 border border-gray-600 rounded-lg bg-gray-700">
            <div>
              <h4 className="font-medium text-white">
                How often should I update my website?
              </h4>
              <p className="text-sm text-gray-400">
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
