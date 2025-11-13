"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

export default function CareTypesSection() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (ms)
      once: true, // animate only once when scrolled into view
      easing: "ease-out-cubic",
    });
  }, []);

  const careTypes = [
    {
      title: "Visiting Care",
      description:
        " Visiting care provides regular support at home, helping with daily tasks, personal care, and companionship. It’s flexible and tailored to meet individual needs while allowing clients to remain independent.",
      href: "/care/residential/",
    },
    {
      title: "Live-in Care",
      description:
        "Live-in care offers round-the-clock support in the comfort of one’s own home. A dedicated caregiver assists with daily routines, personal care, and emotional support, ensuring safety and continuity of care.",
      href: "/care/dementia/",
    },
    {
      title: "24 Hour Care",
      description:
        "24-hour care provides continuous support for individuals with complex or high-dependency needs. Caregivers are available throughout the day and night to ensure safety, health, and comfort at all times.",
      href: "/care/respite/",
    },
    {
      title: "Overnight Care (Waking)",
      description:
        "Overnight care ensures a caregiver is present during the night to support those who may need assistance, monitoring, or reassurance. It offers peace of mind for both the individual and their family.",
      href: "/care/nursing/",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F1]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3C2E2B] mb-4">
            Types of care we provide
          </h2>
          <p className="text-lg text-[#3C2E2B]/70 max-w-2xl mx-auto">
            Specialist support tailored to individual needs, delivered with compassion and expertise
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {careTypes.map((item, i) => (
            <a
              key={i}
              href={item.href}
              data-aos="fade-up"
              data-aos-delay={i * 150} // staggered animation
              className="group bg-primary flex flex-col justify-between gap-6 rounded-xl border border-[#E8DCC7]/70 py-6 shadow-md shadow-secondary-hover hover:scale-[1.02] transition-all duration-300 h-full"
            >
              {/* Card content */}
              <div className="grid gap-2 px-6">
                <h3 className="font-serif font-semibold text-xl text-black transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Arrow at the bottom */}
              <div className="px-6 flex items-center justify-end mt-auto">
                <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
