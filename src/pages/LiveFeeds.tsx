import "./LiveFeeds.css";
import { Page } from "../types";

interface LiveFeedsProps {
  onNavigate: (page: Page) => void;
}

export default function LiveFeeds({ onNavigate }: LiveFeedsProps) {

  return (
    <div className="live-feeds-page h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 bg-surface/70 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(185,199,228,0.1)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary active:scale-95 duration-100 cursor-pointer" data-icon="menu">
            menu
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">SeaYou</h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <a className="font-label-caps text-label-caps text-on-surface-variant hover:bg-white/5 transition-colors px-2 py-1" href="#">
              Dashboard
            </a>
            <a className="font-label-caps text-label-caps text-primary border-b-2 border-primary px-2 py-1" href="#"onClick={() => onNavigate?.("live-feeds")}>
              Live Feeds
            </a>
            <a className="font-label-caps text-label-caps text-on-surface-variant hover:bg-white/5 transition-colors px-2 py-1" href="#" onClick={() => onNavigate?.("asset-map")}>
              Asset Map
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-surface-variant hover:bg-white/5 transition-colors p-2 rounded cursor-pointer" data-icon="notifications">
            notifications
          </span>
          <span className="material-symbols-outlined text-on-surface-variant hover:bg-white/5 transition-colors p-2 rounded cursor-pointer" data-icon="settings">
            settings
          </span>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex flex-1 pt-16 h-full overflow-hidden">
        {/* SideNavBar */}
        <aside className="hidden md:flex flex-col h-full w-64 py-6 gap-4 bg-surface-container-low/80 backdrop-blur-2xl border-r border-white/10 shadow-2xl shrink-0">
          <div className="px-6 mb-4">
            <h2 className="font-headline-md text-headline-md text-primary">Sector Alpha</h2>
            <p className="font-label-caps text-label-caps text-on-surface-variant opacity-70">Active Ops</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-3 mx-2 rounded-lg hover:bg-surface-variant/50 transition-all cursor-pointer" onClick={() => onNavigate?.("asset-map")}>
              <span className="material-symbols-outlined" data-icon="dashboard">
                dashboard
              </span>
              <span className="font-label-caps text-label-caps">Dashboard</span>
            </div>
            <div className="bg-secondary-container text-on-secondary-container rounded-lg mx-2 flex items-center gap-3 px-4 py-3 shadow-[0_0_10px_rgba(184,57,0,0.3)] cursor-pointer active:brightness-125">
              <span className="material-symbols-outlined" data-icon="videocam">
                videocam
              </span>
              <span className="font-label-caps text-label-caps">Live Feeds</span>
            </div>
            <div className="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-3 mx-2 rounded-lg hover:bg-surface-variant/50 transition-all cursor-pointer" onClick={() => onNavigate?.("asset-map")}>
              <span className="material-symbols-outlined" data-icon="explore" >
                explore
              </span>
              <span className="font-label-caps text-label-caps">Asset Map</span>
            </div>
            <div className="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-3 mx-2 rounded-lg hover:bg-surface-variant/50 transition-all cursor-pointer" onClick={() => onNavigate?.("rescue-logs")}>
              <span className="material-symbols-outlined" data-icon="history">
                history
              </span>
              <span className="font-label-caps text-label-caps" onClick={() => onNavigate?.("rescue-logs")}>Rescue Logs</span>
            </div>
          </div>
          <div className="mt-auto px-4 flex flex-col gap-4">
            <button className="w-full bg-[#FF6B35] text-white font-label-caps py-3 rounded shadow-[0_0_10px_rgba(255,107,53,0.4)] active:scale-95 transition-transform flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" data-icon="emergency">
                emergency
              </span>
              SOS EMERGENCY
            </button>
            <div className="flex flex-col gap-1 pt-4 border-t border-white/5">
              <div className="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-2 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-sm" data-icon="help">
                  help
                </span>
                <span className="font-label-caps text-[10px] tracking-wider">Support</span>
              </div>
              <div className="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-2 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-sm" data-icon="dns">
                  dns
                </span>
                <span className="font-label-caps text-[10px] tracking-wider">System Status</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Surveillance Canvas */}
        <main className="flex-1 flex flex-col overflow-hidden bg-background">
          {/* Surveillance Split View */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 overflow-hidden">
            {/* Left Panel: 4K Drone Feed */}
            <div className="relative bg-black overflow-hidden group">
              <img
                alt="A high-altitude aerial view of a turquoise ocean meeting a white sandy coastline"
                className="w-full h-full object-cover opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq7wPmlIeKjkHsZHTMfNMWxDHQTYOB6jVEoXdv09T8rBFPyxtchas3gNTHFIs8ZHMN3571dYaSsCdoTW2gVO9cYJN2NH2J3O7nMK53gRncCnpE8mY9wCJcUvAiEwA4IEWsd6yVORc-lkG-aEXMBhkv_qB-o4NNJvwa4FLQQO1hwd1swA9NV4NWQxfGIE0Ns0CJjvRZP7UkZmWft1s5H6JO5ELzkfkx2oQfOe_xCr0aQ8Mv5UbfgXscOOv7eEI8jSqTuZkzKRNzThw"
              />
              {/* Drone Telemetry Overlay */}
              <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="glass-panel p-4 rounded-lg flex flex-col gap-2">
                    <span className="font-label-caps text-label-caps text-tertiary">DRONE-04 // SECTOR ALPHA</span>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <span className="font-label-caps text-[10px] text-on-surface-variant">ALTITUDE</span>
                        <span className="font-telemetry-lg text-telemetry-lg text-white">42.5M</span>
                      </div>
                      <div className="w-px h-8 bg-white/10"></div>
                      <div className="flex flex-col">
                        <span className="font-label-caps text-[10px] text-on-surface-variant">BATTERY</span>
                        <span className="font-telemetry-lg text-telemetry-lg text-[#00E676]">84%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <div className="bg-secondary-container/80 backdrop-blur-md px-3 py-1 rounded border border-secondary/20 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      <span className="font-telemetry-sm text-telemetry-sm text-white">LIVE REC 4K</span>
                    </div>
                    <div className="glass-panel px-3 py-1 rounded flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-tertiary" data-icon="thermostat">
                        thermostat
                      </span>
                      <span className="font-telemetry-sm text-telemetry-sm text-white">THERMAL: OFF</span>
                    </div>
                  </div>
                </div>
                {/* Center HUD Elements */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="w-64 h-64 border border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-1 h-16 bg-white/40 absolute top-0"></div>
                    <div className="w-1 h-16 bg-white/40 absolute bottom-0"></div>
                    <div className="w-16 h-1 bg-white/40 absolute left-0"></div>
                    <div className="w-16 h-1 bg-white/40 absolute right-0"></div>
                  </div>
                </div>
                {/* Bottom Telemetry */}
                <div className="flex justify-between items-end">
                  <div className="glass-panel p-3 rounded flex gap-4">
                    <div className="flex flex-col">
                      <span className="font-label-caps text-[9px] text-on-surface-variant">LAT</span>
                      <span className="font-telemetry-sm text-telemetry-sm text-white">34.0194° N</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-[9px] text-on-surface-variant">LONG</span>
                      <span className="font-telemetry-sm text-telemetry-sm text-white">118.4912° W</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 glass-panel rounded hover:bg-white/10 transition-colors pointer-events-auto">
                      <span className="material-symbols-outlined text-white" data-icon="videocam_off">
                        videocam_off
                      </span>
                    </button>
                    <button className="p-2 glass-panel rounded hover:bg-white/10 transition-colors pointer-events-auto">
                      <span className="material-symbols-outlined text-white" data-icon="zoom_in">
                        zoom_in
                      </span>
                    </button>
                    <button className="p-2 glass-panel rounded hover:bg-white/10 transition-colors pointer-events-auto">
                      <span className="material-symbols-outlined text-white" data-icon="screenshot">
                        screenshot
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: CCTV Grid */}
            <div className="bg-surface-container flex flex-col overflow-hidden">
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-surface-container-high">
                <span className="font-label-caps text-label-caps text-primary">CCTV GRID // SHORELINE MONITORING</span>
                <div className="flex items-center gap-2">
                  <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">6 NODES ACTIVE</span>
                  <span className="material-symbols-outlined text-sm text-[#00E676]" data-icon="check_circle">
                    check_circle
                  </span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-1 p-1 overflow-y-auto">
                {/* Zone 1 */}
                <div className="relative bg-black group overflow-hidden">
                  <img
                    alt="A CCTV camera angle over a crowded public beach with blue umbrellas, with an AI detection box highlighting swimmers"
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWJ1xBj4ts1AjauqBXohFMrysiCuEoHpOY4AgvN3QNduCI4qu9o5Opx5QfKa2pp8kJNm9xORovzVPWNr3HLqyDu4ktwZ-IUZuvrB_OjBewiIb2I70VUwhFhp9RRO1Jx1fqq3eWokdghSNAXSzodg5o_kBgFHlK0MHBQKAIRjI1hx2ePWbcTM94T33TK15IRlN-Lx7WX9D6ordBcx0-2egOCe0kZhL34N_EgpJJELTUQHJtEDDTvGVByMpy0pk4XRS3MlkiFPBVZB4"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[10px] font-telemetry-sm text-white">
                    ZONE 01 - NORTH
                  </div>
                  <div className="absolute top-[30%] left-[45%] w-16 h-24 ai-detection-box pointer-events-none">
                    <span className="absolute -top-5 left-0 font-label-caps text-[8px] text-tertiary bg-black/80 px-1">
                      HUMAN 0.98
                    </span>
                  </div>
                </div>
                {/* Zone 2 */}
                <div className="relative bg-black group overflow-hidden">
                  <img
                    alt="A wide-angle security feed of a wooden beach pier extending into water, with an AI detection box highlighting a vessel"
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb7GgnBDnvxNJnEgMNOzC5-UdWUWfGkzKQTMiZEW7ofEG10rGSUfQBkvVULtL3x9bglkNI6I-XySqCJ7VluaWxFLtltM9RSI2gSZRw2_urbD8SlUEd_QiFpDov_5D5dv7YUHnyX7iO_xLeAqznuutJ7FVFf-ys2TysgISu0R2ZyEM6rnu_YIMiMjJHakskMJv9vbw3dClFpeH9rhHceWWkiD1Vtlt2bs5TbnH_fJ7TxpSA8vSTM2WLQeNOLJhRYzoODYa7nEuPND0"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[10px] font-telemetry-sm text-white">
                    ZONE 02 - PIER
                  </div>
                  <div className="absolute top-[50%] left-[20%] w-20 h-12 ai-detection-box pointer-events-none">
                    <span className="absolute -top-5 left-0 font-label-caps text-[8px] text-tertiary bg-black/80 px-1">
                      VESSEL 0.92
                    </span>
                  </div>
                </div>
                {/* Zone 3 */}
                <div className="relative bg-black group overflow-hidden">
                  <img
                    alt="A low-angle surveillance view from a shoreline post showing waves crashing on a sun-drenched beach"
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRpYbVekLs-0da3gtnK8E9NJPbIxBan8xow61s-Mwjy7shEeF2rWUDeQ3rsO6Uid-U4NKr-aBTgM2CKEODwDm8t7Q6RJNoneHnSMGhTlYeIRhyhVuWfcZtS_a5RBDZ-m-3v56dwbTObofWBoBdsRTiGfnB9WAjdAinOigYJKtXGfQlxC0tJc9oZ_OIIe9dJxUVPze32qb_LtfvUwVCTQIUbLiGpKwborA8-NgDou1RuJ7utBSA8w_Y4bCsS633YniduoKSOYc47Uo"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[10px] font-telemetry-sm text-white">
                    ZONE 03 - SHORE
                  </div>
                </div>
                {/* Zone 4 */}
                <div className="relative bg-black group overflow-hidden">
                  <div className="w-full h-full bg-[#050B14] flex flex-col items-center justify-center gap-4">
                    <span className="material-symbols-outlined text-4xl text-white/20 animate-pulse" data-icon="videocam_off">
                      videocam_off
                    </span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">SIGNAL LOST // ZONE 04</span>
                    <button className="px-4 py-2 border border-primary/30 rounded font-label-caps text-[10px] text-primary hover:bg-primary/10">
                      ATTEMPT RECONNECT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Log & Status Bar */}
          <footer className="h-48 border-t border-white/10 bg-surface-container-lowest flex flex-col md:flex-row overflow-hidden">
            {/* Incident Log */}
            <div className="flex-1 border-r border-white/10 flex flex-col overflow-hidden">
              <div className="p-3 bg-surface-container border-b border-white/5 flex justify-between items-center">
                <span className="font-label-caps text-label-caps text-on-surface-variant">INCIDENT LOG (LAST 60M)</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer" data-icon="filter_list">
                  filter_list
                </span>
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                <div className="flex items-center gap-4 px-3 py-2 rounded bg-surface/40 hover:bg-surface transition-colors border-l-2 border-tertiary">
                  <span className="font-telemetry-sm text-[10px] text-on-surface-variant">14:22:05</span>
                  <span className="font-body-md text-xs text-on-surface flex-1">Detection: Unidentified floating object Sector B-4</span>
                  <span className="font-label-caps text-[9px] px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary-container">WARNING</span>
                </div>
                <div className="flex items-center gap-4 px-3 py-2 rounded bg-surface/40 hover:bg-surface transition-colors border-l-2 border-secondary">
                  <span className="font-telemetry-sm text-[10px] text-on-surface-variant">14:18:12</span>
                  <span className="font-body-md text-xs text-on-surface flex-1">Patrol Team 02 responding to Zone 01 assistance request</span>
                  <span className="font-label-caps text-[9px] px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container">IN PROGRESS</span>
                </div>
                <div className="flex items-center gap-4 px-3 py-2 rounded bg-surface/40 hover:bg-surface transition-colors border-l-2 border-[#00E676]">
                  <span className="font-telemetry-sm text-[10px] text-on-surface-variant">14:05:30</span>
                  <span className="font-body-md text-xs text-on-surface flex-1">Drone-04 Battery Swap Complete. Relaunched.</span>
                  <span className="font-label-caps text-[9px] px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant">RESOLVED</span>
                </div>
                <div className="flex items-center gap-4 px-3 py-2 rounded bg-surface/40 hover:bg-surface transition-colors border-l-2 border-[#00E676]">
                  <span className="font-telemetry-sm text-[10px] text-on-surface-variant">13:55:12</span>
                  <span className="font-body-md text-xs text-on-surface flex-1">Automated System Health Check: All sensors Green.</span>
                  <span className="font-label-caps text-[9px] px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant">RESOLVED</span>
                </div>
              </div>
            </div>
            {/* Active Patrol Status */}
            <div className="w-full md:w-80 bg-surface-container flex flex-col">
              <div className="p-3 border-b border-white/5 flex justify-between items-center">
                <span className="font-label-caps text-label-caps text-on-surface-variant">PATROL STATUS</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#00E676]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#00E676]"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-primary-container">
                    <span className="material-symbols-outlined text-primary" data-icon="directions_boat">
                      directions_boat
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-white">SEA-GUARDIAN 01</span>
                    <span className="font-telemetry-sm text-[10px] text-tertiary">ON-STATION // ZONE 02</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-primary-container">
                    <span className="material-symbols-outlined text-primary" data-icon="helicopter">
                      helicopter
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] text-white">AIR-RESCUE 09</span>
                    <span className="font-telemetry-sm text-[10px] text-on-surface-variant">STANDBY // BASE ALPHA</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating Action Button for Emergency */}
      <button className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#FF6B35] text-white shadow-[0_0_25px_rgba(255,107,53,0.6)] flex items-center justify-center active:scale-95 transition-all z-50 md:hidden">
        <span className="material-symbols-outlined text-3xl" data-icon="emergency">
          emergency
        </span>
      </button>
    </div>
  );
}
