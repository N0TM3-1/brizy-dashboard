function Sidebar({ activeSection, setActiveSection }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "🏠" },
    { id: "website", label: "Website Management", icon: "🌐" },
    { id: "domain", label: "Domain & Hosting", icon: "🔗" },
    { id: "blog", label: "Blog / CMS", icon: "📝" },
    { id: "seo", label: "SEO & Marketing", icon: "📈" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="w-64 bg-gray-800 shadow-lg">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">Brizy Dashboard</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-700 transition-colors ${
              activeSection === item.id
                ? "bg-gray-700 text-blue-400 border-r-2 border-blue-500"
                : "text-gray-300"
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
