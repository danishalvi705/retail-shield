"use client";
import React, { useState } from 'react';
import { ShieldCheck, Flame, CheckCircle2, AlertTriangle, XCircle, ArrowUpRight, Zap, HelpCircle } from 'lucide-react';

export default function Home() {
  // Hardcoded signals matching the core concept of immediate retail guidance
  const [signals, setSignals] = useState([
    {
      id: 1,
      name: 'Ethereum',
      ticker: 'ETH',
      action: 'BUY NOW',
      actionClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      icon: 'buy',
      reason: '94% of tokens are in public circulation. No predatory VC token unlocks ahead. High real transaction fee revenue.',
      trustRating: 'A+ Secure'
    },
    {
      id: 2,
      name: 'Aave Protocol',
      ticker: 'AAVE',
      action: 'BUY NOW',
      actionClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      icon: 'buy',
      reason: '100% fully diluted. Zero future supply overhang. Revenue comes entirely from organic decentralized lending margins.',
      trustRating: 'A+ Secure'
    },
    {
      id: 3,
      name: 'Hyper-Yield Token',
      ticker: 'HYP',
      action: 'STAY AWAY',
      actionClass: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      icon: 'avoid',
      reason: 'Massive VC unlock event in 4 days releasing 15% of total supply. Yield is printed algorithmically out of thin air.',
      trustRating: 'F Ponzi Risk'
    },
    {
      id: 4,
      name: 'Meme Sniper Chain',
      ticker: 'SNIP',
      action: 'STAY AWAY',
      actionClass: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      icon: 'avoid',
      reason: 'Only 5% of total supply is circulating. Insiders hold 95% of hidden tokens. Extreme distribution dump hazard.',
      trustRating: 'D- High Risk'
    }
  ]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col">
      
      {/* Header detailing our direct advisory target */}
      <header className="border-b border-zinc-800 bg-zinc-900/40 px-6 py-5 sticky top-0 backdrop-blur-md z-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-xl border border-amber-500/20">
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
              ApexCrypto Buy-Signal Engine
            </h1>
            <p className="text-xs text-zinc-400 mt-0.5">Direct retail execution advice: Verifying supply mechanics so you know exactly what to accumulate today.</p>
          </div>
        </div>
        
        <div className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-xl font-mono text-zinc-400">
          Last Algorithmic Refresh: <span className="text-emerald-400 font-bold">LIVE NOW</span>
        </div>
      </header>

      {/* Main Advisory Board */}
      <main className="flex-1 p-6 lg:p-8 max-w-4xl mx-auto w-full flex flex-col gap-6">
        
        {/* Current Core Directive Box */}
        <div className="bg-gradient-to-r from-amber-500/10 via-zinc-900 to-zinc-900 border border-amber-500/20 rounded-2xl p-6">
          <h2 className="text-sm font-black text-amber-400 uppercase tracking-widest flex items-center gap-2">
            <Flame className="w-4 h-4" /> Today's Accumulation Strategy
          </h2>
          <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
            Market liquidity is currently punishing insider-heavy tokens. Focus capital entirely on projects where <strong>&gt;80% of supply is already unlocked</strong> and trading publicly to avoid venture capital sell pressure.
          </p>
        </div>

        {/* Live Signal Grid */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Live Buy & Avoid Recommendations</h3>
          
          {signals.map((signal) => (
            <div 
              key={signal.id} 
              className={`border rounded-2xl p-5 bg-zinc-900/50 backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:border-zinc-700 ${
                signal.action === 'BUY NOW' ? 'border-zinc-800/80' : 'border-zinc-900'
              }`}
            >
              {/* Token Info & Status Flag */}
              <div className="flex items-start gap-4 flex-1">
                <div className="mt-1">
                  {signal.action === 'BUY NOW' ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-500" />
                  )}
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg font-black text-white">{signal.name}</span>
                    <span className="text-xs font-mono px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-400 rounded">
                      {signal.ticker}
                    </span>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded border font-bold ${
                      signal.action === 'BUY NOW' ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/10' : 'bg-rose-500/5 text-rose-400 border-rose-500/10'
                    }`}>
                      {signal.trustRating}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                    {signal.reason}
                  </p>
                </div>
              </div>

              {/* Action Directive Button */}
              <div className="w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-zinc-800/60 flex items-center justify-between md:justify-end gap-4">
                <div className="md:text-right">
                  <div className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">System Verdict</div>
                  <span className={`inline-block text-xs font-black px-3 py-1.5 rounded-xl border mt-0.5 tracking-wider ${signal.actionClass}`}>
                    {signal.action}
                  </span>
                </div>
                {signal.action === 'BUY NOW' && (
                  <div className="p-2 bg-zinc-950 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white cursor-pointer transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
