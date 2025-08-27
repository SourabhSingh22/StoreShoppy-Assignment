import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;