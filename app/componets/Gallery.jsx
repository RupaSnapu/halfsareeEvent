import Link from "next/link";
import Image from "next/image";
export default function Gallery() {
    return(<>
     <section id="gallery" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Half Saree Photography Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image 
                    src="/image1.jpg" 
                    alt="Outdoor half saree photoshoot in London" 
                    width={400} 
                    height={800}
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image 
                    src="/img2.jpg" 
                    alt="Studio half saree photography UK" 
                    width={400} 
                    height={600}
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image 
                    src="/family.jpg" 
                    alt="Family photoshoot with half saree dress" 
                    width={400} 
                    height={600}
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="text-center mt-8">
                <Link href="/gallery" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300">
                  View Full Gallery
                </Link>
              </div>
            </div>
          </section>
    </>)
}