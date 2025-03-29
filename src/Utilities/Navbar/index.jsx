import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Ikon Menu dan Close

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white md:p-4 p-1 md:mx-10 mx-2 rounded-xl shadow-lg relative">
            <div className="flex justify-between items-center mx-5">
                <h1 className="md:text-xl text-xs font-bold">BAYU KRISNA D.F</h1>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Menu untuk Desktop */}
                <div className="hidden md:flex gap-10">
                    <a href="#section1" className="hover:text-[#939AFF]">Beranda</a>
                    <a href="#section2" className="hover:text-[#939AFF]">Tentang</a>
                    <a href="#section3" className="hover:text-[#939AFF]">Project</a>
                    <a href="#section4" className="hover:text-[#939AFF]">Contact</a>
                    <a href="#section4" className="hover:text-[#939AFF]">Blogs</a>
                </div>
            </div>

            {/* Overlay Background saat menu terbuka */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Menu (Fixed agar tidak menggeser konten) */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`absolute top-full left-0 w-full bg-gray-700 p-4 rounded-lg shadow-lg z-50 transition-all ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <a href="#" className="block py-2 text-center" onClick={() => setIsOpen(false)}>Beranda</a>
                <a href="#" className="block py-2 text-center" onClick={() => setIsOpen(false)}>Tentang</a>
                <a href="#" className="block py-2 text-center" onClick={() => setIsOpen(false)}>Project</a>
                <a href="#" className="block py-2 text-center" onClick={() => setIsOpen(false)}>Contact</a>
            </motion.div>
        </nav>
    );
};

export default Navbar;
