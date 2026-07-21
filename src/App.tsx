import { useState } from "react";
import "./css/App.css";
import AssetMap from "./pages/AssetMap";
import RescueResponse from "./pages/RescueResponse";
import LiveFeeds from "./pages/LiveFeeds";
import RescueLogs from "./pages/RescueLogs";

type Page = "asset-map" | "rescue-response" | "live-feeds" | "rescue-logs";

const PAGES: Record<Page, { label: string; component: React.ComponentType }> = {
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
      {/* Simple dev-only page switcher so every converted screen is reachable.
          Each page already ships its own fixed header/nav from the original design. */}
      <div className="fixed top-1 right-4 z-[999] flex gap-1 bg-black/60 rounded px-2 py-1">
        {(Object.keys(PAGES) as Page[]).map((key) => (
          <button
            key={key}
            onClick={() => setPage(key)}
            className={`text-[10px] px-2 py-1 rounded ${
              page === key ? "bg-primary text-on-primary" : "text-white/60 hover:text-white"
            }`}
          >
            {PAGES[key].label}
          </button>
        ))}
      </div>
      <ActivePage />
    </div>
  );
}

export default App;
