import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">404 Not Found</h1>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="px-4 py-5 sm:px-0">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Sorry, the page you're looking for cannot be found.</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Please check the URL or go back to the homepage.</p>
          </div>
          <div className="mt-10 flex justify-center">
            <a href="/" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Go back to homepage
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
