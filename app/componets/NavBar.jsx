import Link from "next/link";

export default function NavBar(){
return(<>
    <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between">
                <div className="flex space-x-7">
                  <Link href="/" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-900 text-lg">Your Photography</span>
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <Link href="/" className="py-4 px-2 text-gray-700 hover:text-yellow-600 transition duration-300">Home</Link>
                  <Link href="/#services" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Services</Link>
                  <Link href="/#gallery" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Gallery</Link>
                  <Link href="#packages" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Packages</Link>
                  <Link href="/#About" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">About</Link>
                  <Link href="/#Contact" className="py-4 px-2 text-gray-700 hover:text-indigo-600 transition duration-300">Contact</Link>
                </div>
                <div className="md:hidden flex items-center">
                  <button className="outline-none mobile-menu-button">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
    
    </>);
}