import React, { useState, useEffect } from "react";

const NavBar: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <nav 
            className="h-32 px-6 py-4 flex items-center justify-around rounded-bl-lg rounded-br-lg"
            style={{ backgroundImage: "url('src/assets/mobile/navbar-mobile-bg.svg')" }}
        >
          <h1 className="p-1.5 text-white text-2xl font-bold">devjobs</h1>
          <div className="relative flex items-center justify-around gap-x-4">
            <img src="src/assets/logos/sun.svg" alt="light mode" /> 
            <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-12 h-6 bg-white rounded-full flex items-center p-1 transition-all duration-300"
            >
                <div
                className={`w-4 h-4 bg-indigo-500 rounded-full transition-transform transform ${
                    darkMode ? "translate-x-6" : "translate-x-0"
                }`}
                ></div>
            </button>
            <img src="src/assets/logos/moon.svg" alt="dark mode" /> 
          </div>
        </nav>
    )
}

export default NavBar;