import { useEffect, useState } from "react";

// Dummy reviews
const reviews = [
  { name: "Anita R.", rating: 4.9, text: "Amazing photography! Captugreen every detail perfectly." },
  { name: "Rajesh K.", rating: 5, text: "Professional and friendly. Highly recommend!" },
  { name: "Priya S.", rating: 4.8, text: "Beautiful shots, great experience!" },
];

// Dummy images
const circlePics = [
  { src: "https://randomuser.me/api/portraits/women/44.jpg", alt: "Client 1" },
  { src: "https://randomuser.me/api/portraits/men/46.jpg", alt: "Client 2" },
  { src: "https://randomuser.me/api/portraits/women/47.jpg", alt: "Client 3" },
  { src: "https://randomuser.me/api/portraits/men/48.jpg", alt: "Client 4" },
];

export default function ClientCirclesWithReview() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[index];

  return (
    <section className="bg-[#ffeafd] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 items-center">

        {/* LEFT: Circles + Stats */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4">
          
          {/* Circle Images */}
          <div className="flex justify-center sm:justify-start space-x-[-14px]">
            {circlePics.map((pic, i) => (
              <div
                key={i}
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white shadow-md transition-transform hover:scale-105 duration-300"
                style={{ zIndex: circlePics.length - i }}
                title={pic.alt}
              >
                <img
                  src={pic.src}
                  alt={pic.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Text Stats */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-blue-700">
              1000+ Happy Clients
            </h3>
            <p className="mt-1 text-sm sm:text-base text-gray-700 flex items-center justify-center sm:justify-start">
              <span className="text-yellow-500 mr-1">★★★★★</span>
              4.8 out of 5 rating
            </p>
          </div>
        </div>

        {/* RIGHT: Review Card */}
        <div className="p-4 sm:p-6 rounded-lg shadow-xl text-center w-full min-h-[180px]">
          <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
            <blockquote className="text-sm sm:text-base italic text-gray-800 mb-3 min-h-[72px]">
              “{review.text}”
            </blockquote>
            <div className="mt-1 font-semibold text-[#800020] text-sm">{review.name}</div>
            <p className="text-xs text-gray-500">{review.rating.toFixed(1)} / 5 Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
  