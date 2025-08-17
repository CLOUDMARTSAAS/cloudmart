'use client';

import { apiUrl } from "@/app/_utils/constants";
import React, { useEffect, useState } from "react";

type HealthStatus = {
  status: string,
  timestamp: string
}

function HealthCheck() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  console.log("apiUrl: " + apiUrl);

  // Simulate API health check
  useEffect(() => {
    fetch(apiUrl + "/health")
      .then(response => response.json())
      .then(data => setHealth(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-slate-900 rounded-lg p-6 w-100 bg-slate-900 shadow-md">
        <h2 className="text-white-400 text-xl font-semibold mb-1 text-center">API Health Check</h2>
        {error ? (
          <div className="text-red-600 font-medium text-center">Error: {error}</div>
        ) : health ? (
          <div>
            <div>
              <span className="font-semibold text-gray-400">Status:</span>
              <span className={`ml-2 font-bold ${
                health.status === "healthy" ? "text-green-600" : "text-red-600"
              }`}>
                {health.status}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-400">Timestamp:</span>
              <span className="ml-2 text-gray-500">{new Date(health.timestamp).toUTCString()}</span>
            </div>
          </div>
        ) : (
          <div className="text-slate-400 text-center">Checking health...</div>
        )}
      </div>
    </div>
  );
}

export default HealthCheck;
