import { useState } from "react";
import "./css/App.css";
import AssetMap from "./pages/AssetMap";
import RescueResponse from "./pages/RescueResponse";
import LiveFeeds from "./pages/LiveFeeds";
import RescueLogs from "./pages/RescueLogs";
import { Page } from "./types";

type PageComponentProps = {
  onNavigate: (page: Page) => void;
};

const PAGES: Record<Page, { label: string; component: React.ComponentType<PageComponentProps> }> = {
  "asset-map": { label: "Asset Map", component: AssetMap },
  "rescue-response": { label: "Rescue Response", component: RescueResponse },
  "live-feeds": { label: "Live Feeds", component: LiveFeeds },
  "rescue-logs": { label: "Rescue Logs", component: RescueLogs },
};

function App() {
  const [page, setPage] = useState<Page>("asset-map");
  const ActivePage = PAGES[page].component;

  return (
    <div className="dark">
      <ActivePage onNavigate={setPage} />
    </div>
  );
}

export default App;