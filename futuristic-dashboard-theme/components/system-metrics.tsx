"use client";

import React, { useState, useEffect } from "react";

// Inline SVG Icons
const ActivityIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const CpuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 3v2m6-2v2M9 19v2m6-2v2m5-18v4m0 12v4m-4-16h4m-4 12h4M7 3H3v4m16 0V3h-4m4 16v-4M7 21H3v-4"
    />
  </svg>
);

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

const WifiIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
    />
  </svg>
);

const BarChart3Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

export default function SystemMetrics() {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [networkActivity, setNetworkActivity] = useState(0);
  const [dataStreams, setDataStreams] = useState<number[]>([]);

  useEffect(() => {
    // Simulate real-time data
    const interval = setInterval(() => {
      setCpuUsage(Math.random() * 100);
      setMemoryUsage(Math.random() * 100);
      setNetworkActivity(Math.random() * 100);
      setDataStreams((prev) => {
        const newStreams = [...prev, Math.random() * 100].slice(-20);
        return newStreams;
      });
    }, 2000); // Reduced frequency to 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
      <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
        <ActivityIcon className="w-6 h-6" />
        SYSTEM METRICS
      </h3>

      <div className="space-y-6">
        {/* CPU Usage */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <CpuIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">CPU USAGE</span>
            </div>
            <span className="text-cyan-400 font-mono text-sm">{Math.floor(cpuUsage)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-2000"
              style={{ width: `${cpuUsage}%` }}
            />
          </div>
        </div>

        {/* Memory Usage */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <DatabaseIcon className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">MEMORY</span>
            </div>
            <span className="text-purple-400 font-mono text-sm">{Math.floor(memoryUsage)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-2000"
              style={{ width: `${memoryUsage}%` }}
            />
          </div>
        </div>

        {/* Network Activity */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <WifiIcon className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">NETWORK</span>
            </div>
            <span className="text-green-400 font-mono text-sm">{Math.floor(networkActivity)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-2000"
              style={{ width: `${networkActivity}%` }}
            />
          </div>
        </div>

        {/* Data Visualization */}
        <div>
          <h4 className="text-sm text-gray-300 mb-3 flex items-center gap-2">
            <BarChart3Icon className="w-4 h-4 text-cyan-400" />
            DATA FLOW
          </h4>
          <div className="flex items-end gap-1 h-16">
            {dataStreams.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-cyan-500 to-blue-500 flex-1 rounded-sm transition-all duration-1000"
                style={{ height: `${(value / 100) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
