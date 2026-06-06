"use client";
import React, { useState } from 'react';
import { Shield, ShieldAlert, Radio, Signal, Network, HardDrive, List, Layers, CheckCircle } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for your professional dashboard setup
  const systems = [
    { id: 1, name: 'Main Gate Cam 01', type: 'CCTV IP', status: 'Online', signal: 'Excellent' },
    { id: 2, name: 'Warehouse Wireless Bridge', type: 'PtP Network', status: 'Online', signal: '95%' },
    { id: 3, name: 'Backyard Dome Cam 02', type: 'CCTV Analog', status: 'Offline', signal: 'No Signal' },
    { id: 4, name: 'Office Main Router', type: 'Gateway', status: 'Online', signal: 'Stable' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col md:flex-row">
      
      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-zinc-900 border-b md:border-b-0 md:border-r border-zinc-800 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-500" />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Retail Shield</h1>
            <span className="text-xs text-zinc-500 font-medium">Smart Surveillance v1.0</span>
          </div>
        </div>

        <nav className="flex flex-col gap-2 mt-4">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/10' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'}`}
          >
            <Layers className="w-4 h-4" /> System Overview
          </button>
          <button 
            onClick={() => setActiveTab('devices')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'devices' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/10' : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'}`}
          >
            <Radio className="w-4 h-4" /> Wireless & CCTV Nodes
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-zinc-800 hidden md:block">
          <div className="flex items-center gap-2 text-xs text-emerald-500 font-medium bg-emerald-500/5 px-3 py-2 rounded-lg border border-emerald-500/10">
            <CheckCircle className="w-3.5 h-3.5" /> Frontend Live Deployment
          </div>
        </div>
      </aside>

      {/* Main dashboard view */}
      <main className="flex-1 p-6 md:p-10 max-w-5xl">
        {activeTab === 'overview' ? (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">System Status</h2>
              <p className="text-sm text-zinc-400 mt-1">Real-time surveillance network infrastructure tracking.</p>
            </div>

            {/* Matrix Status Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-medium uppercase">Network Links</div>
                  <div className="text-xl font-bold text-white mt-0.5">Active</div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                  <Signal className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-medium uppercase">Wireless Health</div>
                  <div className="text-xl font-bold text-white mt-0.5">98.2%</div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
                  <HardDrive className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-medium uppercase">Storage Array</div>
                  <div className="text-xl font-bold text-white mt-0.5">14.2 TB Free</div>
                </div>
              </div>
            </div>

            {/* Quick Overview Section */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <List className="w-4 h-4 text-zinc-400" /> Infrastructure Node Directory
              </h3>
              <div className="divide-y divide-zinc-800 text-sm">
                {systems.map((sys) => (
                  <div key={sys.id} className="py-3.5 flex items-center justify-between first:pt-0 last:pb-0">
                    <div>
                      <div className="font-medium text-zinc-200">{sys.name}</div>
                      <div className="text-xs text-zinc-500 mt-0.5">{sys.type}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-400 font-mono">{sys.signal}</span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${sys.status === 'Online' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                        {sys.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Device Configuration</h2>
              <p className="text-sm text-zinc-400 mt-1">Configure connected surveillance nodes and local gateways.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center text-zinc-500 text-sm">
              <ShieldAlert className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
              Connect to your secure database provider to unlock hardware parameters management.
            </div>
          </div>
        )}
      </main>
    </div>
  );
}0
0
0

