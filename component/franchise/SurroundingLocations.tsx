import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";

interface SurroundingLocationsData {
  title?: string;
  lead?: string;
  locations?: string[];
  image?: string;
  imageAlt?: string;
  footerNote?: string;
  contactHref?: string;
}

interface SurroundingLocationsProps {
  data?: SurroundingLocationsData;
}

const defaultLocations: string[] = [
  "Mohali",
  "Panchkula",
  "Zirakpur",
  "Derabassi",
  "Ambala",
  "Ropar (Rupnagar)",
  "Solan & Nalagarh",
  "Kala Amb",
];

export default function SurroundingLocations({
  data,
}: SurroundingLocationsProps) {
  const title =
    data?.title || "Surrounding Locations Near Chandigarh We Serve";
  const lead =
    data?.lead ||
    "Territory-wise PCD Pharma Franchise opportunities across the tri-city and nearby commercial belts.";
  const locations =
    data?.locations && data.locations.length > 0
      ? data.locations
      : defaultLocations;
  const image = data?.image || "/Webp/Map (1).webp";
  const imageAlt =
    data?.imageAlt || "North India territory map highlighting tri-city";
  const footerNote =
    data?.footerNote ||
    "If your preferred territory isn't listed, get in touch. We are continually expanding across North India and pan-India.";
  const contactHref = data?.contactHref || "#enquire";

  return (
    <section className="bg-color-secondary py-12 sm:py-16">
      <div className="wrapper m-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            {lead}
          </p>
        </div>

        {/* Location Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto">
          {locations.map((loc, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-[#253746] shadow-xs"
            >
              <IoLocationOutline className="text-secondary shrink-0" size={16} />
              <span>{loc}</span>
            </span>
          ))}
        </div>

        {/* Service Area Map */}
        <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm flex items-center justify-center max-w-5xl mx-auto">
          {image ? (
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-contain p-4 md:p-6"
            />
          ) : (
            <div className="text-center p-8 text-gray-400">
              <IoLocationOutline
                size={48}
                className="mx-auto mb-2 text-gray-300"
              />
              <p className="text-sm font-medium text-gray-600">
                Service Area Map
              </p>
              <p className="text-xs text-gray-400">
                Tri-city and surrounding commercial belts
              </p>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-8 bg-white rounded-xl p-5 text-center max-w-3xl mx-auto border border-gray-200 shadow-xs">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {footerNote.includes("get in touch") ? (
              <>
                If your preferred territory isn&apos;t listed,{" "}
                <Link
                  href={contactHref}
                  className="text-secondary font-semibold hover:underline"
                >
                  get in touch
                </Link>
                . We are continually expanding across North India and pan-India.
              </>
            ) : (
              footerNote
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
