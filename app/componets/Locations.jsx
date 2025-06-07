export default function Locations() {
  return (
    <section id="locations" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          Our Service Areas Across UK
        </h2>

        {/* 👇 2 columns on mobile, 3 columns on md and up */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              title: "London & Southeast",
              items: [
                "Half saree photography London",
                "Outdoor locations in Royal Parks",
                "Studio sessions in Central London",
                "Cultural heritage locations",
              ],
            },
            {
              title: "Midlands & North",
              items: [
                "Half saree photography West Midlands",
                "Half saree photoshoot East Midlands",
                "Traditional Indian photography Yorkshire",
                "Urban and rural locations",
              ],
            },
            {
              title: "Scotland & Northern Ireland",
              items: [
                "Indian dress photography Scotland",
                "Saree photoshoot Northern Ireland",
                "Historic castle backgrounds",
                "Scenic highland locations",
              ],
            },
          ].map((location, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-sm md:text-xl font-semibold text-green-700 mb-3">
                {location.title}
              </h3>
              <ul className="space-y-1 text-gray-600 text-xs md:text-sm">
                {location.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
