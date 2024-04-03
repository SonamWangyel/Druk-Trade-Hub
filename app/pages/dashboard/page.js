 "use client";


import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800">DRUK TRADE HUB</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Your Dashboard Content Goes Here */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            {/* Example Dashboard Widgets */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Dashboard Widget 1 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-800">Clothings/Attires</h2>
          
                </div>
              </div>

              {/* Dashboard Widget 2 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-800">Masks</h2>
                  {/* Add your content for Widget 2 here */}
                </div>
              </div>

              {/* Dashboard Widget 3 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-800">Containers/Baskets</h2>
                  {/* Add your content for Widget 3 here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
