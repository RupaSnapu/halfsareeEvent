import Link from "next/link";
export default function Footer() {
    return(<>
    <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Your Photography</h3>
              <p className="text-gray-400">Capturing life's precious moments with artistic excellence across UK.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/#services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/#gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
                <li><Link href="/#packages" className="text-gray-400 hover:text-white">Packages</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/#half-saree-photography" className="text-gray-400 hover:text-white">Half Saree Photography</Link></li>
                <li><Link href="/#family-photography" className="text-gray-400 hover:text-white">Family Photography</Link></li>
                <li><Link href="/#traditional-photography" className="text-gray-400 hover:text-white">Traditional Photography</Link></li>
                <li><Link href="/#event-photography" className="text-gray-400 hover:text-white">Event Photography</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <address className="text-gray-400 not-italic">
                <p>123 Photography Studio</p>
                <p>London, UK</p>
                <p>Phone: +44 123 456 7890</p>
                <p>Email: info@yourphotography.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>);
}