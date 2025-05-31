import { useEffect } from "react";

export default function WhyChooseUs() {
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-in-card");
    cards.forEach((card, i) => {
      card.setAttribute("style", `animation-delay: ${i * 0.2}s`);
      card.classList.add("animate-fade-in-up");
    });

    const titles = document.querySelectorAll(".fade-in-title");
    titles.forEach((title) => {
      title.classList.add("animate-fade-in-up");
    });
  }, []);

  return (
    <section id="About" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-3 fade-in-title">
            Why Choose Us for Your Half Saree Photography in the UK
          </h2>
          <p className="text-gray-600 text-sm md:text-lg fade-in-title delay-200">
            From <strong>half saree photoshoots in London</strong> to{" "}
            <strong>traditional Indian photography in the West Midlands</strong>, we
            craft experiences that feel authentic, heartfelt, and deeply cultural
            — wherever you are in the UK.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
          {[
            {
              title: "Specialists in Cultural Photography",
              description:
                "We focus on Indian cultural photography in the UK, with years of experience capturing the grace of half sarees, lehengas, and vibrant traditions across regions.",
            },
            {
              title: "Creative Locations & Styling",
              description:
                "From outdoor half saree shoot ideas in the UK to custom styling, we help design magical sessions in London, Yorkshire, or even a hidden gem near you.",
            },
            {
              title: "Friendly, Affordable & Local",
              description:
                "Looking for affordable half saree photographers near you? We’re based across West Midlands, Scotland, and Northern Ireland — offering flexible, heartfelt sessions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-indigo-50 p-4 md:p-8 rounded-xl shadow-xl fade-in-card transform transition-transform hover:scale-105 hover:shadow-2xl duration-500 ease-in-out"
            >
              <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center fade-in-title delay-400">
          <p className="text-gray-800 text-sm md:text-lg">
            Ready to plan your <strong>half saree photoshoot in the UK</strong>?{" "}
            <a
              href="#Contact"
              className="text-indigo-600 font-semibold hover:underline transition duration-300 ml-1"
            >
              Get in touch today
            </a>{" "}
            — let’s celebrate culture and beauty together.
          </p>
        </div>
      </div>

      <style jsx>{`
        .fade-in-title {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }

        .fade-in-card {
          opacity: 0;
          transform: translateY(40px);
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
