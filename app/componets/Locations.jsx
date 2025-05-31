export default function Locations() {
    return(<>
     <section id="locations" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Service Areas Across UK</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">London & Southeast</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Half saree photography London</li>
                <li>Outdoor locations in Royal Parks</li>
                <li>Studio sessions in Central London</li>
                <li>Cultural heritage locations</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Midlands & North</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Half saree photography West Midlands</li>
                <li>Half saree photoshoot East Midlands</li>
                <li>Traditional Indian photography Yorkshire</li>
                <li>Urban and rural locations</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Scotland & Northern Ireland</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Indian dress photography Scotland</li>
                <li>Saree photoshoot Northern Ireland</li>
                <li>Historic castle backgrounds</li>
                <li>Scenic highland locations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>)
}