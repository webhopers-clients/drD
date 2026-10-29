import React from "react";
import Image from "next/image";
import TagBadge from "@/component/ui/TagBadge";
import { IoCheckmark } from "react-icons/io5";

interface RegionalAdvantageProps {
  imageSrc?: string;
}

export default function RegionalAdvantage({
  imageSrc = "/images/why2.png",
}: RegionalAdvantageProps) {
  const points = [
    {
      title: "Asia’s Largest Ecosystem",
      desc: "Direct local access to active pharmaceutical ingredient (API) suppliers, foil printers, carton converters, and bottle vendors eliminates supply bottlenecks.",
    },
    {
      title: "WHO-GMP Infrastructure",
      desc: "Baddi houses India’s deepest talent pool of analytical chemists, pharmacologists, and QA/QC specialists trained in stringent compliance norms.",
    },
    {
      title: "Cost-Effective Economics",
      desc: "Optimized industrial utility tariffs and purpose-built pharma park infrastructure in Himachal Pradesh allow competitive ex-factory pricing.",
    },
    {
      title: "Pan-India Connectivity",
      desc: "Direct highway corridors to Chandigarh, Delhi-NCR, Punjab, and national freight hubs ensure rapid dispatch of finished batches.",
    },
  ];

  return (
    <section className="py-16 sm:py-24  bg-white">
      <div className="wrapper m-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Authentic Photo & Brand Highlight */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-gray-100 aspect-4/3 group">
              <Image
                src={imageSrc}
                alt="Baddi Industrial Hub Himachal Pradesh Pharmaceutical Supply Chain"
                fill
                className="object-cover group-hover:scale-103 transition duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs text-[#253746] text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm">
                Baddi Pharma Hub Infrastructure
              </div>
            </div>

            {/* Homepage-style Brand Callout */}
            <div className="bg-gradient-to-br from-[#0f2a3f] to-[#1c3c54] text-white rounded-2xl p-7 mt-6">
              <span className="text-secondary text-xs uppercase font-bold tracking-wider block mb-2">
                Asia’s Manufacturing Capital
              </span>
              <h3 className="text-lg sm:text-xl font-normal leading-snug">
                Baddi produces over <span className="font-bold">one-third of India’s</span> total pharmaceutical output, offering unmatched supply chain velocity.
              </h3>
            </div>
          </div>

          {/* Right Column: Narrative & Editorial Points */}
          <div className="lg:col-span-7">
            <TagBadge text="REGIONAL STRATEGIC ADVANTAGE" className="mb-3" />

            <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-normal text-[#253746] leading-tight mt-2 mb-4">
              Why Partner with a <span className="font-bold">Third Party Pharma Manufacturer in Baddi?</span>
            </h2>

            <p className="text-[#626263] text-sm sm:text-base leading-relaxed mb-8">
              Baddi in Himachal Pradesh is recognized as the{" "}
              <strong className="text-[#253746] font-semibold">
                Pharmaceutical Manufacturing Capital of Asia
              </strong>
              , producing over one-third of India’s total pharmaceutical output. Working directly with an established manufacturer in Baddi gives your brand a strong commercial and logistical edge:
            </p>

            {/* Editorial Features List */}
            <div className="space-y-6">
              {points.map((pt, i) => (
                <div key={i} className="flex gap-4 sm:gap-5 items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5 text-white">
                    <IoCheckmark size={16} />
                  </div>
                  <div>
                    <h3 className="text-[#253746] font-bold text-base sm:text-lg mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-[#626263] text-sm leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 pt-6 border-t border-gray-100 text-xs sm:text-sm text-[#626263] leading-relaxed italic">
              Whether you are looking for tablet manufacturers in Baddi, capsule manufacturing plants in Himachal Pradesh, or specialized liquid/ointment facilities, partnering with Dr D Pharma puts you right in the heart of India&apos;s most cost-efficient pharmaceutical production belt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
