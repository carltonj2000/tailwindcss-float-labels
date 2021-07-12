import React from "react";

function App() {
  return (
    <div className="max-w-md mx-auto shadow-md rounded">
      <form className="py-12 px-8">
        <div className="relative">
          <input
            id="email"
            name="email"
            type="text"
            className="peer h-10 w-full border-b-2
                border-gray-300 text-gray-900
                focus:outline-none focus:border-rose-600
                placeholder-transparent"
            placeholder="Email address"
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm
              peer-placeholder-shown:top-2
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              transition-all
              peer-focus:-top-3.5
              peer-focus:text-gray-600
              peer-focus:text-sm"
          >
            Email address
          </label>
        </div>
        <div className="mt-10 relative">
          <input
            id="password"
            name="password"
            type="password"
            className="peer h-10 w-full border-b-2
                border-gray-300 text-gray-900
                focus:outline-none focus:border-rose-600
                placeholder-transparent"
            placeholder="Password"
          />
          <label
            htmlFor="password"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm
              peer-placeholder-shown:top-2
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              transition-all
              peer-focus:-top-3.5
              peer-focus:text-gray-600
              peer-focus:text-sm"
          >
            Password
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
