'use client';
import { useState } from "react";
import {
  Link2,
  Plus,
  Copy,
  Check,
  BarChart3,
  Trash2,
  Search,
  Calendar,
  TrendingUp,
  MousePointer,
  Globe,
  LogOut,
  Settings,
  Menu,
  X,
  Zap,
} from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "JD",
  };

  const [urls, setUrls] = useState([
    {
      id: 1,
      shortUrl: "short.ly/abc123",
      originalUrl: "https://example.com/very-long-url",
      clicks: 1247,
      createdAt: "2025-10-01",
      status: "active",
    },
    {
      id: 2,
      shortUrl: "short.ly/xyz789",
      originalUrl: "https://github.com/username/repo",
      clicks: 856,
      createdAt: "2025-10-03",
      status: "active",
    },
  ]);

  const stats = {
    totalUrls: 24,
    totalClicks: 12847,
    avgClicksPerUrl: 535,
    activeUrls: 22,
  };

  const handleCreateUrl = () => {
    if (!newUrl) return;
    const randomId = Math.random().toString(36).substring(2, 8);
    const newShortUrl = {
      id: urls.length + 1,
      shortUrl: customAlias ? `short.ly/${customAlias}` : `short.ly/${randomId}`,
      originalUrl: newUrl,
      clicks: 0,
      createdAt: new Date().toISOString().split("T")[0],
      status: "active",
    };
    setUrls([newShortUrl, ...urls]);
    setNewUrl("");
    setCustomAlias("");
  };

  const handleCopy = (id: number, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = (id: number) => {
    setUrls(urls.filter((url) => url.id !== id));
  };

  const filteredUrls = urls.filter((url) =>
    url.originalUrl.toLowerCase().includes(searchQuery.toLowerCase()) ||
    url.shortUrl.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-slate-800/95 backdrop-blur-xl border-r border-slate-700 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Shortly</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 p-3 md:p-4 space-y-1 md:space-y-2 overflow-y-auto">
            <button className="w-full flex items-center space-x-3 px-3 md:px-4 py-2 md:py-3 bg-blue-500/10 text-blue-400 rounded-xl transition-all text-sm md:text-base">
              <BarChart3 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="font-medium">Dashboard</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 md:px-4 py-2 md:py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-xl transition-all text-sm md:text-base">
              <Link2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="font-medium">My Links</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 md:px-4 py-2 md:py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-xl transition-all text-sm md:text-base">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="font-medium">Analytics</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 md:px-4 py-2 md:py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-xl transition-all text-sm md:text-base">
              <Settings className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="font-medium">Settings</span>
            </button>
          </nav>

          <div className="p-3 md:p-4 border-t border-slate-700">
            <div className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 bg-slate-700/50 rounded-xl">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">{user.avatar}</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm font-medium text-white truncate">{user.name}</p>
                <p className="text-xs text-slate-400 truncate">{user.email}</p>
              </div>
              <button className="text-slate-400 hover:text-white transition-colors flex-shrink-0">
                <LogOut className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64 relative z-10">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center space-x-3 md:space-x-4 min-w-0">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-400 hover:text-white flex-shrink-0">
                <Menu className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <div className="min-w-0">
                <h1 className="text-xl md:text-2xl font-bold text-white truncate">Dashboard</h1>
                <p className="text-xs md:text-sm text-slate-400 hidden sm:block">Manage your URLs</p>
              </div>
            </div>
            <button className="px-3 md:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all shadow-lg flex items-center space-x-1 md:space-x-2 flex-shrink-0 text-sm md:text-base">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-3 md:p-6 space-y-4 md:space-y-6">
          {/* Stats - 2 cols on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl hover:border-blue-500/50 transition-all">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Link2 className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">+12%</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stats.totalUrls}</p>
              <p className="text-xs md:text-sm text-slate-400">Total URLs</p>
            </div>

            <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl hover:border-purple-500/50 transition-all">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/10 rounded-lg md:rounded-xl flex items-center justify-center">
                  <MousePointer className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">+8%</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stats.totalClicks.toLocaleString()}</p>
              <p className="text-xs md:text-sm text-slate-400">Clicks</p>
            </div>

            <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl hover:border-pink-500/50 transition-all">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-500/10 rounded-lg md:rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">+5%</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stats.avgClicksPerUrl}</p>
              <p className="text-xs md:text-sm text-slate-400">Avg</p>
            </div>

            <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl hover:border-emerald-500/50 transition-all">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/10 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">Active</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stats.activeUrls}</p>
              <p className="text-xs md:text-sm text-slate-400">Active</p>
            </div>
          </div>

          {/* Create URL */}
          <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl">
            <h2 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center space-x-2">
              <Plus className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span>Create Short URL</span>
            </h2>
            <div className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Destination URL</label>
                <input type="url" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} placeholder="https://example.com/long-url" className="w-full px-3 md:px-4 py-2 md:py-3 bg-slate-700/50 border border-slate-600 rounded-lg md:rounded-xl text-sm md:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-300 mb-2">Custom Alias (Optional)</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 flex items-center bg-slate-700/50 border border-slate-600 rounded-lg md:rounded-xl px-3 md:px-4 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                    <span className="text-slate-400 text-xs md:text-sm">short.ly/</span>
                    <input type="text" value={customAlias} onChange={(e) => setCustomAlias(e.target.value)} placeholder="custom" className="flex-1 py-2 md:py-3 bg-transparent text-sm md:text-base text-white placeholder-slate-400 focus:outline-none ml-1" />
                  </div>
                  <button onClick={handleCreateUrl} className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg md:rounded-xl font-medium transition-all shadow-lg text-sm md:text-base">Create</button>
                </div>
              </div>
            </div>
          </div>

          {/* URLs List */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl overflow-hidden">
            <div className="p-4 md:p-6 border-b border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4">
                <h2 className="text-base md:text-lg font-semibold text-white">Your URLs</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." className="w-full sm:w-64 pl-9 md:pl-10 pr-3 md:pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-sm md:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden divide-y divide-slate-700">
              {filteredUrls.map((url) => (
                <div key={url.id} className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <code className="text-blue-400 font-mono text-xs md:text-sm truncate">{url.shortUrl}</code>
                        <button onClick={() => handleCopy(url.id, url.shortUrl)} className="text-slate-400 hover:text-white flex-shrink-0">
                          {copiedId === url.id ? <Check className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" /> : <Copy className="w-3 h-3 md:w-4 md:h-4" />}
                        </button>
                      </div>
                      <p className="text-xs text-slate-400 truncate">{url.originalUrl}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <MousePointer className="w-3 h-3 text-purple-400" />
                        <span className="text-white">{url.clicks}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-slate-400">
                        <Calendar className="w-3 h-3" />
                        <span>{url.createdAt}</span>
                      </div>
                    </div>
                    <button onClick={() => handleDelete(url.id)} className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-all">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/30">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">Short URL</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">Original URL</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">Clicks</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">Created</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {filteredUrls.map((url) => (
                    <tr key={url.id} className="hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <code className="text-blue-400 font-mono text-sm">{url.shortUrl}</code>
                          <button onClick={() => handleCopy(url.id, url.shortUrl)} className="text-slate-400 hover:text-white">
                            {copiedId === url.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2 max-w-md">
                          <Globe className="w-4 h-4 text-slate-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm truncate">{url.originalUrl}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <MousePointer className="w-4 h-4 text-purple-400" />
                          <span className="text-white font-medium">{url.clicks.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2 text-slate-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{url.createdAt}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all">
                            <BarChart3 className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(url.id)} className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredUrls.length === 0 && (
              <div className="p-8 md:p-12 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Link2 className="w-6 h-6 md:w-8 md:h-8 text-slate-400" />
                </div>
                <p className="text-sm md:text-base text-slate-400">No URLs found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"></div>
      )}
    </div>
  );
}