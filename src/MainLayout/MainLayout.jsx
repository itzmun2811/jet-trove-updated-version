import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {



    const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };



    return (
       <div className="flex flex-col min-h-screen">
  <Header onToggleTheme={toggleTheme} theme={theme} />
  
  <main className="flex-grow max-w-7xl mx-auto w-full">
    <Outlet />
  </main>

  <Footer />
</div>
        
    );
};

export default MainLayout;