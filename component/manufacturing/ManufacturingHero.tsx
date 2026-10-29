import React from "react";
import Image from "next/image";
import Link from "next/link";
import TagBadge from "@/component/ui/TagBadge";
import { FaFileInvoiceDollar, FaDownload } from "react-icons/fa6";

interface ManufacturingHeroProps {
  imageSrc?: string;
  pdfLink?: string;
}

export default function ManufacturingHero({
  imageSrc = "/images/infra.jpg",
  pdfLink = "#products",
}: ManufacturingHeroProps) {
  return (
    <section className="bg-white pt-10 sm:pt-14 pb-12">
      <div className="wrapper m-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7">
            <TagBadge
              text="ISO 9001:2015 & WHO-GMP Certified | Established 2010 | Baddi, Himachal Pradesh"
              className="mb-4"
            />

            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-normal text-[#253746] leading-[1.18] tracking-normal mb-5">
              <span className="font-bold">Third Party Pharma Manufacturer in Baddi</span> – Reliable Contract Manufacturing with Dr D Pharma
            </h1>

            <p className="text-base sm:text-lg text-[#626263] leading-relaxed mb-4">
              Looking to launch or scale your pharmaceutical brand without the capital expense of building a production plant?{" "}
              <strong className="text-[#253746] font-semibold">Dr D Pharma</strong> is an{" "}
              <strong className="text-[#253746] font-semibold">
                ISO 9001:2015 and WHO-GMP certified third-party pharma manufacturer in Baddi, Himachal Pradesh
              </strong>
              , offering end-to-end contract manufacturing across{" "}
              <strong className="text-[#253746] font-semibold">800+ DCGI-approved pharmaceutical formulations</strong>.
            </p>

            <p className="text-sm sm:text-base text-[#626263] leading-relaxed mb-8">
              Founded in <strong className="text-[#253746] font-semibold">2010</strong>, we operate our own state-of-the-art manufacturing unit in Asia’s largest pharmaceutical hub—the Baddi-Barotiwala-Nalagarh (BBN) industrial belt. With{" "}
              <strong className="text-[#253746] font-semibold">16+ years of formulation expertise</strong>, dedicated Beta-Lactam and Non-Beta-Lactam blocks, and strict GLP-compliant quality testing, we serve as the trusted production and loan-licensing partner for pharmaceutical marketers, PCD franchise owners, and healthcare brands across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link
                href="#contact"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm transition text-center inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FaFileInvoiceDollar />
                <span>Get Instant Manufacturing Quote &amp; MOQ Rate Card</span>
              </Link>
              <Link
                href={pdfLink}
                className="bg-color-secondary hover:bg-gray-200 text-[#253746] font-semibold px-6 py-3.5 rounded-lg border border-gray-200 transition text-center inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FaDownload className="text-sm" />
                <span>Download 800+ Product List (PDF)</span>
              </Link>
            </div>

            <p className="text-xs text-[#626263] italic">
              24-Hour Quote Turnaround • Flexible Batch Sizes • 100% Formulation Confidentiality
            </p>
          </div>

          {/* Right Column: Plant / Facility Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-gray-50 aspect-4/3 flex flex-col justify-end p-5 group">
              <Image
                src={imageSrc}
                alt="Dr D Pharma WHO-GMP Certified Manufacturing Plant in Baddi Himachal Pradesh"
                fill
                priority
                className="object-cover group-hover:scale-103 transition duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl shadow-sm mt-auto max-w-sm">
                <span className="bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider mb-1 inline-block">
                  State-of-the-Art Unit
                </span>
                <p className="text-[#253746] text-xs sm:text-sm font-semibold">
                  WHO-GMP &amp; GLP Compliant Production Floor in Baddi, HP
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row - Styled like TrustedSection on Homepage */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 mt-12 pt-8">
          <div className="py-4 sm:py-0 sm:px-6 first:pl-0">
            <div className="text-3xl lg:text-[2.75rem] font-semibold text-[#253746] leading-none mb-1">
              16+ <span className="text-lg lg:text-xl font-normal text-[#626263]">Years</span>
            </div>
            <p className="text-xs sm:text-sm text-[#626263] font-medium">
              Manufacturing Excellence (Est. 2010)
            </p>
          </div>

          <div className="py-4 sm:py-0 sm:px-6">
            <div className="text-3xl lg:text-[2.75rem] font-semibold text-[#253746] leading-none mb-1">
              WHO-GMP
            </div>
            <p className="text-xs sm:text-sm text-[#626263] font-medium">
              Certified Baddi Facility
            </p>
          </div>

          <div className="py-4 sm:py-0 sm:px-6">
            <div className="text-3xl lg:text-[2.75rem] font-semibold text-[#253746] leading-none mb-1">
              800+ <span className="text-lg lg:text-xl font-normal text-[#626263]">Formulations</span>
            </div>
            <p className="text-xs sm:text-sm text-[#626263] font-medium">
              DCGI-Approved Products
            </p>
          </div>

          <div className="py-4 sm:py-0 sm:px-6">
            <div className="text-3xl lg:text-[2.75rem] font-semibold text-[#253746] leading-none mb-1">
              Pan-India
            </div>
            <p className="text-xs sm:text-sm text-[#626263] font-medium">
              Fast Logistics &amp; Distribution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
