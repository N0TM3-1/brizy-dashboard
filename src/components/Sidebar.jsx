function Sidebar({ activeSection, setActiveSection }) {
  const menuItems = [
    { id: "websites", label: "Website List", icon: "🌐" },
    { id: "clients", label: "Client List", icon: "👨🏼‍🦱" },
    { id: "domain", label: "Domain & Hosting", icon: "🔗" },
    { id: "blog", label: "Blog / CMS", icon: "📝" },
    { id: "seo", label: "SEO & Marketing", icon: "📈" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Brizy Dashboard</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-100 transition-colors ${
              activeSection === item.id
                ? "bg-blue-50 text-blue-600 border-r-2 border-blue-500"
                : "text-gray-700"
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
