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
            className="h-full px-6 py-4 flex items-center justify-between rounded-bl-lg rounded-br-lg"
            style={{ backgroundImage: "url('src/assets/mobile/navbar-mobile-bg.svg')" }}
        >
           <div>hello</div>
           <div>hello</div>
           <div>hello</div>
           <div>hello</div>
           <div>hello</div>
        </nav>
    )
}

export default NavBar;