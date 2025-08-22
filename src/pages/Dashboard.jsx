import { useState } from "react";
import Sidebar from "../components/Sidebar";
import WebsiteList from "./WebsiteList";
import ClientList from "./ClientList";
import Settings from "./Settings";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "websites":
        return <WebsiteList />;
      case "clients":
        return <ClientList />;
      case "settings":
        return <Settings />;
      default:
        return <WebsiteList />;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 p-6 bg-gray-50">{renderContent()}</main>
    </div>
  );
}

export default Dashboard;
