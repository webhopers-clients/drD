import React from "react";
import Link from "next/link";
import TagBadge from "@/component/ui/TagBadge";
import { IoCheckmark } from "react-icons/io5";

export default function TargetAudience() {
  const audiences = [
    {
      title: "Pharmaceutical Companies",
      desc: "Outsource production to a WHO-GMP certified plant without locking up capital in land, machinery, or facility upkeep.",
    },
    {
      title: "PCD Franchise Companies",
      desc: (
        <>
          <Link
            href="https://www.drdpharma.in/pcd-pharma-franchise-in-baddi"
            className="text-secondary hover:underline font-semibold"
          >
            PCD Pharma Franchise companies
          </Link>{" "}
          ensure uninterrupted stock availability and consistent batch quality across your monopoly distribution network.
        </>
      ),
    },
    {
      title: "Pharma Marketers & Brands",
      desc: "Expand your existing therapeutic divisions with high-margin tablets, softgels, injectables, derma tubes, and ophthalmic drops.",
    },
    {
      title: "Healthcare Startups",
      desc: "Launch your own branded pharmaceutical, nutraceutical, or ayurvedic line with end-to-end onboarding, artwork design, and low startup friction.",
    },
    {
      title: "Hospitals & Pharmacy Chains",
      desc: "Manufacture private-label generics, OTC wellness products, and institutional supplies under your own brand identity.",
    },
    {
      title: "Existing Manufacturers",
      desc: "Utilize our Baddi facility via Loan Licensing or contract tie-ups to expand production capacity for specific dosage lines.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-color-secondary">
      <div className="wrapper m-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <TagBadge text="CLIENT PROFILES" className="mb-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-normal text-[#253746] leading-tight mt-2 mb-4">
              Who Can <span className="font-bold">Partner With Us?</span>
            </h2>
            <p className="text-[#626263] text-sm sm:text-base leading-relaxed mb-6">
              Our third-party pharma manufacturing services in Baddi are designed for healthcare enterprises at every stage of growth:
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-secondary font-bold hover:underline text-sm sm:text-base"
            >
              <span>Explore Partnership Options</span>
              <span>→</span>
            </Link>
          </div>

          {/* Right Column: Clean Editorial List */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {audiences.map((item, i) => (
              <div key={i} className="flex gap-3.5 items-start">
                <div className="w-5 h-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-1">
                  <IoCheckmark size={13} />
                </div>
                <div>
                  <h3 className="text-[#253746] font-bold text-base sm:text-lg mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626263] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
