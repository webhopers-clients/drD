import React from "react";
import TagBadge from "@/component/ui/TagBadge";

export default function QuickSpecifications() {
  const specs = [
    {
      param: "Manufacturing Location",
      value: "Baddi Industrial Area, Solan District, Himachal Pradesh",
    },
    {
      param: "Quality Certifications",
      value: "WHO-GMP, ISO 9001:2015, GLP Certified, Revised Schedule M Compliant",
    },
    {
      param: "Regulatory Approvals",
      value: (
        <>
          State Drug Controller (HP), 800+ DCGI-Approved Formulations, FSSAI (Nutraceuticals), AYUSH (<i>Herbal Mantra</i> Division)
        </>
      ),
    },
    {
      param: "Manufacturing Models",
      value: "Turnkey Third-Party Contract Manufacturing & Loan License Manufacturing",
    },
    {
      param: "Packaging Styles",
      value: "Alu-Alu, Blister, Strip, Sachets, Amber PET/Glass Bottles, Lami/Aluminum Tubes, Mono-Cartons, Drip-Off Cartons",
    },
    {
      param: "Standard Lead Time",
      value: (
        <>
          <strong className="text-[#253746] font-semibold">First-Time Orders:</strong> 30–40 Days (includes artwork &amp; cylinder processing) | <strong className="text-[#253746] font-semibold">Repeat Orders:</strong> 20–25 Days
        </>
      ),
    },
    {
      param: "Value-Added Support",
      value: "Custom Formulation R&D, Packaging & Artwork Design, Trademark Guidance, Batch-Wise COA",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-color-secondary">
      <div className="wrapper m-auto max-w-5xl">
        <div className="text-center mb-10">
          <TagBadge text="PLANT SPECIFICATIONS" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-normal text-[#253746] leading-tight mt-2 mb-3">
            Quick Overview: <span className="font-bold">Contract Manufacturing Capabilities</span> at Dr D Pharma
          </h2>
          <p className="text-[#626263] max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            For procurement heads and pharmaceutical brand owners evaluating third-party manufacturers in Baddi, here is a snapshot of our plant specifications and operational terms:
          </p>
        </div>

        {/* Clean Corporate Data Rows (No Box / No Floating Card Clutter) */}
        <div className="divide-y divide-gray-200">
          {specs.map((row, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row py-4 sm:py-5 gap-2 sm:gap-6 items-baseline transition-colors hover:bg-black/[0.015] px-2 rounded-lg"
            >
              <div className="sm:w-1/3 text-[#253746] font-bold text-sm sm:text-base shrink-0">
                {row.param}
              </div>
              <div className="sm:w-2/3 text-[#626263] leading-relaxed text-sm sm:text-base">
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
