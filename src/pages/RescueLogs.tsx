import "./RescueLogs.css";

export default function RescueLogs() {
  return (
    <div className="rescue-logs-page bg-background text-on-background font-body-md selection:bg-secondary selection:text-on-secondary">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 bg-surface/70 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(185,199,228,0.1)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">menu</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">SeaYou</h1>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <a className="font-label-caps text-on-surface-variant hover:bg-white/5 transition-colors px-2 py-1" href="#">
              DASHBOARD
            </a>
            <a className="font-label-caps text-on-surface-variant hover:bg-white/5 transition-colors px-2 py-1" href="#">
              LIVE FEEDS
            </a>
            <a className="font-label-caps text-primary border-b-2 border-primary px-2 py-1" href="#">
              RESCUE LOGS
            </a>
            <a className="font-label-caps text-on-surface-variant hover:bg-white/5 transition-colors px-2 py-1" href="#">
              ANALYTICS
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary cursor-pointer active:scale-95 duration-100">notifications</span>
            <span className="material-symbols-outlined text-primary cursor-pointer active:scale-95 duration-100">settings</span>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col h-full py-6 gap-4 fixed left-0 top-0 w-64 bg-surface-container-low/80 backdrop-blur-2xl border-r border-white/10 shadow-2xl z-40 mt-16">
        <div className="px-6 mb-4">
          <h2 className="font-headline-md text-headline-md text-primary">Sector Alpha</h2>
          <p className="text-on-surface-variant text-xs uppercase tracking-widest">Active Ops</p>
        </div>
        <nav className="flex flex-col gap-1">
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all flex items-center gap-3 px-4 py-3 mx-2" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-caps">Dashboard</span>
          </a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all flex items-center gap-3 px-4 py-3 mx-2" href="#">
            <span className="material-symbols-outlined">videocam</span>
            <span className="font-label-caps">Live Feeds</span>
          </a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all flex items-center gap-3 px-4 py-3 mx-2" href="#">
            <span className="material-symbols-outlined">explore</span>
            <span className="font-label-caps">Asset Map</span>
          </a>
          <a className="bg-secondary-container text-on-secondary-container rounded-lg mx-2 flex items-center gap-3 px-4 py-3 shadow-[0_0_10px_rgba(184,57,0,0.3)]" href="#">
            <span className="material-symbols-outlined">history</span>
            <span className="font-label-caps">Rescue Logs</span>
          </a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all flex items-center gap-3 px-4 py-3 mx-2" href="#">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="font-label-caps">Analytics</span>
          </a>
        </nav>
        <div className="mt-auto px-4">
          <button className="w-full py-4 bg-[#FF6B35] text-white rounded-lg font-bold shadow-[0_0_15px_rgba(255,107,53,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              emergency
            </span>
            SOS EMERGENCY
          </button>
        </div>
        <div className="mt-6 border-t border-white/5 pt-4">
          <a className="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-2 mx-2" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-caps">Support</span>
          </a>
          <a className="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-2 mx-2" href="#">
            <span className="material-symbols-outlined">dns</span>
            <span className="font-label-caps">System Status</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-64 pt-24 pb-12 px-margin-mobile md:px-margin-desktop min-h-screen">
        <header className="mb-8">
          <h3 className="font-headline-md text-headline-md text-primary-fixed mb-1">Rescue History &amp; Tactical Summary</h3>
          <p className="text-on-surface-variant">Fleet Intelligence Report — Last Updated: 09:42 UTC</p>
        </header>

        {/* Bento Grid Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* KPI Section */}
          <section className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-gutter mb-4">
            <div className="glass-panel p-6 rounded-xl flex flex-col gap-2">
              <span className="font-label-caps text-tertiary">TOTAL RESCUES (YTD)</span>
              <span className="font-telemetry-lg text-telemetry-lg text-white">1,248</span>
              <span className="text-xs text-secondary-fixed flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">trending_up</span> +12% from 2023
              </span>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col gap-2">
              <span className="font-label-caps text-tertiary">AVG RESPONSE TIME</span>
              <span className="font-telemetry-lg text-telemetry-lg text-white">
                04:12 <span className="text-sm font-body-md text-on-surface-variant">min</span>
              </span>
              <span className="text-xs text-[#00FF94] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">arrow_downward</span> -18s improvement
              </span>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col gap-2">
              <span className="font-label-caps text-tertiary">ACTIVE ASSETS</span>
              <span className="font-telemetry-lg text-telemetry-lg text-white">14/16</span>
              <span className="text-xs text-on-surface-variant">Ready for deployment</span>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col gap-2">
              <span className="font-label-caps text-tertiary">SAFETY KPI INDEX</span>
              <span className="font-telemetry-lg text-telemetry-lg text-white">98.4%</span>
              <span className="text-xs text-[#00FF94]">Critical Status: Green</span>
            </div>
          </section>

          {/* Monthly Trends Graph */}
          <section className="md:col-span-8 glass-panel rounded-xl p-6 min-h-[350px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-label-caps text-on-surface">Monthly Rescue Trends</h4>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-label-caps cursor-pointer hover:bg-white/10">
                  WEEK
                </span>
                <span className="px-3 py-1 rounded bg-secondary-container text-white text-xs font-label-caps cursor-pointer">
                  MONTH
                </span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-label-caps cursor-pointer hover:bg-white/10">
                  YEAR
                </span>
              </div>
            </div>
            <div className="flex-grow flex items-end justify-between gap-2 px-2">
              {/* Bar Chart Visual Mockup */}
              <div className="w-full flex items-end gap-2 h-48">
                <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[40%] rounded-t-sm relative group">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 font-telemetry-sm">
                    82
                  </span>
                </div>
                <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[55%] rounded-t-sm relative group">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 font-telemetry-sm">
                    114
                  </span>
                </div>
                <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[30%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[65%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[90%] rounded-t-sm relative group">
                  <div className="absolute inset-0 bg-secondary/30 blur-sm"></div>
                </div>
                <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[75%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[50%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[45%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors h-[60%] rounded-t-sm relative group"></div>
                <div className="flex-1 bg-secondary hover:brightness-125 transition-colors h-[100%] rounded-t-sm relative group shadow-[0_0_15px_rgba(255,107,53,0.3)]">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-telemetry-sm text-secondary">214</span>
                </div>
                <div className="flex-1 bg-primary/10 h-0 rounded-t-sm"></div>
                <div className="flex-1 bg-primary/10 h-0 rounded-t-sm"></div>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-label-caps text-on-surface-variant">
              <span>JAN</span>
              <span>FEB</span>
              <span>MAR</span>
              <span>APR</span>
              <span>MAY</span>
              <span>JUN</span>
              <span>JUL</span>
              <span>AUG</span>
              <span>SEP</span>
              <span className="text-secondary">OCT</span>
              <span>NOV</span>
              <span>DEC</span>
            </div>
          </section>

          {/* Hotspot Heatmap Mock */}
          <section className="md:col-span-4 glass-panel rounded-xl p-6 overflow-hidden relative group">
            <h4 className="font-label-caps text-on-surface mb-4">Incident Hotspots</h4>
            <div className="relative rounded-lg overflow-hidden h-[280px]">
              <img
                alt="A top-down satellite view of a wide sandy beach meeting the ocean, color-graded in a dark tactical monochromatic blue tone"
                className="w-full h-full object-cover grayscale opacity-50 contrast-125"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm0l7mGXp7mnXUu06Bgg4FTCGjDdrDT89AJlsCygnmDbpanIHg2oWj2USKXpqYkyg7zSFNDXF5JyMV-pMP7AOsXAUdOvmXt42VNlryaOOM6iCb5C7jx4aJLOMI-r17SBORsd1i3XLarKE6JcBZnHFJqzVBoQLyWtDklOB6wP-S1OTKgiwE6baD9hLQYuEV3_Wz4ZPSkwtRVQJ-z-L1oQZ9oxY-ju70jIRtCVFGmJPGPTyaWaZVuiwDpl5yj9AsDcIl1j9Le4p-R8o"
              />
              <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-error rounded-full heat-point"></div>
              <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-secondary rounded-full heat-point"></div>
              <div className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-error/80 rounded-full heat-point"></div>
              <div className="absolute top-1/3 right-1/2 w-8 h-8 bg-tertiary rounded-full heat-point"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-40"></div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-label-caps text-on-surface-variant">Sector: 08-North Coast</span>
              <button className="text-primary text-xs font-label-caps flex items-center gap-1">
                VIEW DATA MAP <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </section>

          {/* Recent Missions Feed */}
          <section className="md:col-span-12 glass-panel rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-label-caps text-on-surface">Recent Successful Missions</h4>
              <span className="text-xs text-on-surface-variant font-telemetry-sm">Showing last 24h</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-[#00FF94]/10 flex items-center justify-center text-[#00FF94]">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold">Alpha-Rescue #842</h5>
                    <p className="text-xs text-on-surface-variant">Drone deployed • 2 Survivors • Point Bravo</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-telemetry-sm text-sm text-white">02:14:00</p>
                  <p className="text-[10px] font-label-caps text-on-surface-variant uppercase">32 MIN AGO</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-[#00FF94]/10 flex items-center justify-center text-[#00FF94]">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold">Sector-Assist #841</h5>
                    <p className="text-xs text-on-surface-variant">Jet-Ski extraction • Vessel recovery • Inlet 4</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-telemetry-sm text-sm text-white">05:48:12</p>
                  <p className="text-[10px] font-label-caps text-on-surface-variant uppercase">3 HOURS AGO</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-[#00FF94]/10 flex items-center justify-center text-[#00FF94]">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold">Rapid-Response #840</h5>
                    <p className="text-xs text-on-surface-variant">Helicopter winch • Medical emergency • Deep Water</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-telemetry-sm text-sm text-white">01:05:40</p>
                  <p className="text-[10px] font-label-caps text-on-surface-variant uppercase">Yesterday</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-3 border border-white/10 rounded-lg text-xs font-label-caps text-on-surface-variant hover:bg-white/5 transition-all">
              VIEW ALL HISTORICAL LOGS
            </button>
          </section>
        </div>
      </main>

      {/* Navigation Pivot (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-low/80 backdrop-blur-xl border-t border-white/10 px-margin-mobile py-2 z-50 flex justify-around">
        <div className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-label-caps">HOME</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            history
          </span>
          <span className="text-[10px] font-label-caps">RESCUE</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-label-caps">MAP</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">bar_chart</span>
          <span className="text-[10px] font-label-caps">STATS</span>
        </div>
      </nav>
    </div>
  );
}
