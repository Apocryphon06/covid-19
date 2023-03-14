import React from "react";

const CovidInfoCard = ({
  country,
  totalCases,
  totalTests,
  totalRecovered,
  
}: any) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl mt-[100px]">
      <div className="px-4 py-4 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          {country ?? "Country Name"}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Total Cases: {totalCases ?? 32323232}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Total Tests: {totalTests ?? 323453}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Total Recovered: {totalRecovered ?? 5342}
        </p>
      </div>
    </div>
  );
};

export default CovidInfoCard;
