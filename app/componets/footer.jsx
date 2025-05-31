// import Link from "next/link";
// export default function Footer() {
//     return(<>
//     <footer className="bg-gray-800 text-white py-12">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Your Photography</h3>
//               <p className="text-gray-400">Capturing life's precious moments with artistic excellence across UK.</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
//                 <li><Link href="/#services" className="text-gray-400 hover:text-white">Services</Link></li>
//                 <li><Link href="/#gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
//                 <li><Link href="/#packages" className="text-gray-400 hover:text-white">Packages</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Services</h3>
//               <ul className="space-y-2">
//                 <li><Link href="/#half-saree-photography" className="text-gray-400 hover:text-white">Half Saree Photography</Link></li>
//                 <li><Link href="/#family-photography" className="text-gray-400 hover:text-white">Family Photography</Link></li>
//                 <li><Link href="/#traditional-photography" className="text-gray-400 hover:text-white">Traditional Photography</Link></li>
//                 <li><Link href="/#event-photography" className="text-gray-400 hover:text-white">Event Photography</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Contact</h3>
//               <address className="text-gray-400 not-italic">
//                 <p>123 Photography Studio</p>
//                 <p>London, UK</p>
//                 <p>Phone: +44 123 456 7890</p>
//                 <p>Email: info@yourphotography.com</p>
//               </address>
//             </div>
//           </div>
//           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} Your Photography. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </>);
// }

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Grid: 1 col on mobile for branding, 2 cols on sm/md for the other three sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Info (always single column) */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">Your Photography</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Capturing life’s precious moments with artistic excellence across the UK.
            </p>
          </div>

          {/* Quick Links (grid-cols-2 on mobile, back to 1 col on md) */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2">
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 text-sm hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-gray-400 text-sm hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="text-gray-400 text-sm hover:text-white transition">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links (grid-cols-2 on mobile, 1 col on md) */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">Services</h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2">
              <li>
                <Link
                  href="/#half-saree-photography"
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  Half Saree Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/#family-photography"
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  Family Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/#traditional-photography"
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  Traditional Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/#event-photography"
                  className="text-gray-400 text-sm hover:text-white transition"
                >
                  Event Photography
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (grid-cols-2 on mobile, 1 col on md) */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">Contact</h3>
            <address className="not-italic grid grid-cols-2 md:grid-cols-1 gap-y-1 gap-x-4 text-gray-400 text-sm md:text-base">
              <p>123 Photography Studio</p>
              <p>London, UK</p>
              <p>Phone: +44 123 456 7890</p>
              <p>Email: info@yourphotography.com</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Your Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
