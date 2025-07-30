import { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardOverview from "./DashboardOverview";
import WebsiteManagement from "./WebsiteManagement";
import DomainHosting from "./DomainHosting";
import BlogCMS from "./BlogCMS";
import SEOMarketing from "./SEOMarketing";
import Settings from "./Settings";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />;
      case "website":
        return <WebsiteManagement />;
      case "domain":
        return <DomainHosting />;
      case "blog":
        return <BlogCMS />;
      case "seo":
        return <SEOMarketing />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 p-6">{renderContent()}</main>
    </div>
  );
}

export default Dashboard;
