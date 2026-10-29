import React from "react";
import Image from "next/image";
import TagBadge from "@/component/ui/TagBadge";
import { IoCheckmark } from "react-icons/io5";

interface CompanyDifferentiatorsProps {
  imageSrc?: string;
}

export default function CompanyDifferentiators({
  imageSrc = "/images/homePage/about01.jpg",
}: CompanyDifferentiatorsProps) {
  const differentiators = [
    {
      title: "WHO-GMP & ISO Plant",
      desc: "Operates strictly under WHO Good Manufacturing Practices and Revised Schedule M.",
    },
    {
      title: "QA/QC Testing",
      desc: "Rigorous raw-material quarantine and analytical release by senior pharmacologists.",
    },
    {
      title: "Microbe-Controlled Warehousing",
      desc: "Climate-controlled quarantine zones safeguard stability and shelf life.",
    },
    {
      title: "Zero-Leakage Packaging",
      desc: "Export-grade Alu-Alu, Blister, Strip, Sachet, and Mono-Carton finishing.",
    },
  ];

  return (
    <section className="bg-linear-to-r from-[#253746] to-[#162836] text-white py-18 sm:py-24 ">
      <div className="wrapper m-auto">
        <div className="max-w-3xl mb-12">
          <TagBadge
            text="MANUFACTURING INFRASTRUCTURE"
            className="mb-4 bg-white/10 text-white border-white/20"
          />
          <h2 className="text-3xl lg:text-[3rem] font-normal text-white leading-tight mt-2 mb-4">
            Why Choose Dr D Pharma as Your <span className="font-bold">Third Party Manufacturer in Baddi?</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Since our inception in <strong className="text-white font-semibold">2010</strong>, Dr D Pharma has established itself as one of India’s most trusted pharmaceutical contract manufacturers. Whether you need a single high-volume molecule or a complete multi-segment product portfolio produced under your brand name, our facility is built for quality, scale, and transparency.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 4 Clean Differentiators with Divider Lines */}
          <div className="lg:col-span-7 divide-y divide-white/15">
            {differentiators.map((item, i) => (
              <div key={i} className="py-5 sm:py-6 first:pt-0 last:pb-0 flex gap-4 sm:gap-5 items-start">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5 text-white">
                  <IoCheckmark size={16} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Lab / QC Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 aspect-4/3 flex items-center justify-center group">
              <Image
                src={imageSrc}
                alt="Pharmaceutical Quality Control Laboratory and Testing at Dr D Pharma Baddi"
                fill
                className="object-cover group-hover:scale-103 transition duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-white/95 text-[#253746] text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm">
                GLP Certified Quality Control Lab
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
