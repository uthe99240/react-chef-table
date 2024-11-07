// ./src/components/Navbar.js
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
        // Implement your search functionality here
    };

    return (
        <nav>
            <div className="flex justify-between items-center py-4">
                {/* Logo on the left */}
                <div className="text-2xl font-bold">
                    <a href="/">Receipe Calories</a>
                </div>

                {/* Center-aligned menu items for larger screens */}
                <div className="hidden md:flex space-x-6 justify-center flex-1">
                    <a href="/" className="hover:text-gray-500">
                        Home
                    </a>
                    <a href="#" className="hover:text-gray-500">
                        About
                    </a>
                    <a href="#" className="hover:text-gray-500">
                        Services
                    </a>
                    <a href="#" className="hover:text-gray-500">
                        Contact
                    </a>
                </div>

                {/* Search bar on the right for larger screens */}
                <form
                    onSubmit={handleSearchSubmit}
                    className="hidden md:flex items-center space-x-2"
                >
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="px-3 py-2 border rounded-md focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 border rounded-md hover:bg-gray-200"
                    >
                        Search
                    </button>
                    <div className="bg-green-400 p-2 rounded-full">
                        <FaRegUserCircle></FaRegUserCircle>
                    </div>

                </form>

                {/* Mobile menu toggle button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu items */}
            {isOpen && (
                <div className="md:hidden space-y-2">
                    <form onSubmit={handleSearchSubmit} className="flex space-x-2 p-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 border rounded-md hover:bg-gray-200"
                        >
                            Search
                        </button>
                    </form>
                    <a href="/" className="block hover:bg-gray-100 px-4 py-2 rounded">
                        Home
                    </a>
                    <hr />
                    <a href="/about" className="block hover:bg-gray-100 px-4 py-2 rounded">
                        About
                    </a>
                    <hr />
                    <a href="/services" className="block hover:bg-gray-100 px-4 py-2 rounded">
                        Services
                    </a>
                    <hr />
                    <a href="/contact" className="block hover:bg-gray-100 px-4 py-2 rounded">
                        Contact
                    </a>
                    <hr />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
