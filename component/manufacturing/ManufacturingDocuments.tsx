import React from "react";
import TagBadge from "@/component/ui/TagBadge";
import { IoCheckmark } from "react-icons/io5";

export default function ManufacturingDocuments() {
  const documents = [
    {
      title: "Proof of Company Registration",
      desc: "Certificate of Incorporation, MOA & AOA (for Pvt/Public Ltd), Partnership Deed (for LLP/Firms), or Proprietorship Declaration.",
    },
    {
      title: "Certificate of GST Registration",
      desc: "Active GSTIN certificate of your business entity.",
    },
    {
      title: "Drug License / Regulatory Permit",
      desc: "Wholesale Drug License (Form 20B & 21B for allopathic medicines), FSSAI License (for nutraceuticals - note that you can start nutraceutical production with FSSAI while your drug license is processing), or AYUSH authorization.",
    },
    {
      title: "Formula / Product Specification Sheet",
      desc: "List of compositions, strengths, dosage forms, and packaging preferences for portfolio or custom products.",
    },
    {
      title: "Brand Name & Trademark Information",
      desc: "Copy of registered trademark certificate or application number with a Non-Resemblance Declaration.",
    },
    {
      title: "Purchase Order (PO) & Manufacturing Agreement",
      desc: "Signed bilateral contract manufacturing agreement after finalizing product compositions, MOQs, and pricing.",
    },
  ];

  return (
    <section className="py-16 sm:py-24  bg-white">
      <div className="wrapper m-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Guidance Note */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <TagBadge text="STATUTORY PAPERWORK" className="mb-3" />

            <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-normal text-[#253746] leading-tight mt-2 mb-4">
              Documents Required for <span className="font-bold">Third Party Manufacturing</span>
            </h2>

            <p className="text-[#626263] text-sm sm:text-base leading-relaxed mb-6">
              To initiate a third-party manufacturing tie-up with Dr D Pharma, please keep the following statutory documents ready:
            </p>

            <div className="p-5 rounded-xl bg-color-secondary border-l-4 border-secondary text-xs sm:text-sm text-[#253746] leading-relaxed">
              <strong className="block font-bold text-black mb-1">Dedicated Onboarding Support</strong>
              Our Baddi onboarding team will guide you step-by-step through the exact paperwork required for your product line.
            </div>
          </div>

          {/* Right Column: Clean Divided Document Checklist */}
          <div className="lg:col-span-7 divide-y divide-gray-200">
            {documents.map((doc, idx) => (
              <div key={idx} className="py-5 sm:py-6 first:pt-0 last:pb-0 flex gap-4 sm:gap-5 items-start">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5 text-white">
                  <IoCheckmark size={16} />
                </div>
                <div>
                  <h3 className="text-[#253746] font-bold text-base sm:text-lg mb-1.5">
                    {doc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626263] leading-relaxed">
                    {doc.desc}
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
