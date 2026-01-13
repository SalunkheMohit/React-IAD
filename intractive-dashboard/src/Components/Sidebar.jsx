const Sidebar = () => {
    return (
        <aside className="bg-gray-900 text-gray-200 w-60 h-full-screen p-6 hidden md:block">
            <h2 className="text-lg font-semibold mb-6">Menu</h2>
            <ul className="space-y-3">
                <li className="hover:text-white"> Dashboard</li>
                <li className="hover:text-white">Reports</li>
                <li className="hover:text-white">Settings</li>
            </ul>
        </aside>
    );
};

export default Sidebar;