import React from "react";
import Image from "next/image";
import { IoCheckmark, IoDocumentTextOutline } from "react-icons/io5";

interface DocumentPoint {
  title: string;
  desc: string;
}

interface DocumentsRequiredData {
  title?: string;
  lead?: string;
  points?: DocumentPoint[];
  image?: string;
  imageAlt?: string;
}

interface DocumentsRequiredProps {
  data?: DocumentsRequiredData;
}

const defaultPoints: DocumentPoint[] = [
  {
    title: "Drug License (mandatory for allopathic medicines)",
    desc: "Wholesale/Retail Drug License (Form 20B & 21B) as per state requirement. Partners applying only for Ayurvedic or Nutraceutical ranges can start with an FSSAI Registration.",
  },
  {
    title: "GST Registration Certificate",
    desc: "active GSTIN for commercial billing.",
  },
  {
    title: "Proof of Identity",
    desc: "PAN Card, Voter ID, Driving License, or Passport of the proprietor or authorized signatory.",
  },
  {
    title: "Proof of Business Address",
    desc: "rent agreement, property document, or recent utility bill.",
  },
  {
    title: "Photographs & Bank Details",
    desc: "passport-size photographs and bank account details for the Franchisee Monopoly Agreement and payment records.",
  },
];

export default function DocumentsRequired({ data }: DocumentsRequiredProps) {
  const title =
    data?.title || "Documents Required for PCD Pharma Franchise in Chandigarh";
  const lead =
    data?.lead ||
    "Keep these ready to get onboarded smoothly as an authorized Dr. D Pharma partner.";
  const points = data?.points || defaultPoints;

  return (
    <section className="bg-white py-12 sm:py-16 ">
      <div className="wrapper m-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          {title}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
          {lead}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mt-6">
          {/* Exact Document Points List */}
          <ul className="space-y-6">
            {points.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <IoCheckmark className="text-white" size={18} />
                </div>
                <div>
                  <strong className="font-semibold text-black">
                    {item.title}:{" "}
                  </strong>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Right Side: Documents checklist graphic (Infographic · 800×600) */}
          <div>
            {data?.image ? (
              <div className="relative w-full min-h-[320px] lg:min-h-[380px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <Image
                  src={data.image}
                  alt={data.imageAlt || "Documents checklist graphic"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="min-h-[320px] lg:min-h-[380px] rounded-2xl border-2 border-dashed border-gray-300 bg-color-secondary flex flex-col items-center justify-center p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                  <IoDocumentTextOutline size={28} />
                </div>
                <b className="text-black font-semibold text-base mb-1">
                  Documents checklist graphic
                </b>
                <small className="text-gray-500 text-sm">
                  Infographic · 800×600
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
