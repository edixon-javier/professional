import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    }
    else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
      <button
        className="bg-slate-200 px-2 py-2 rounded dark:bg-slate-800 dark:text-white dark:hover:bg-slate-300"
        type="button"
        onClick={changeTheme}
      >
        Change theme
      </button>
    </div>
  );
}

export default App;
