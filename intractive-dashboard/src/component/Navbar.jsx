import { useContext } from "react";
import { ThemeContext} from "../context/ThemeContext"



const Navbar = () => {
    const {dark , setdark} = useContext(ThemeContext);
    
    return (
        <header className="bg-white dark:bg-gray-900 dark:text-white shadow px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Intractive Analytics Dashboard</h1>
            
            {/* Dark Mode Toggle */}
            <button onClick={() => setdark(!dark)}
                className="border px-3 py-1 rounded"
                >
                    {dark ? "Light" : "Dark"} Mode
                </button>
                 
            <div className="text-sm opacity-90">Welcome 👋</div>
        </header>
    );
};

export default Navbar;
