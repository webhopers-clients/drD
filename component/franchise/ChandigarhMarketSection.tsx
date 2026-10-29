import React from "react";
import Image from "next/image";
import {
  FaMapLocationDot,
  FaIndustry,
  FaHospital,
  FaArrowTrendUp,
} from "react-icons/fa6";

interface MarketItem {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  image?: string;
}

interface ChandigarhMarketSectionProps {
  data?: {
    title?: string;
    description?: string;
    items?: MarketItem[];
    footerNote?: string;
  };
}

const defaultItems: MarketItem[] = [
  {
    title: "Tri-City Connectivity",
    desc: "At the crossroads of Chandigarh, Mohali, and Panchkula, serving high-volume markets into Punjab, Haryana, and Himachal Pradesh.",
    icon: <FaMapLocationDot size={22} />,
  },
  {
    title: "Proximity to Baddi",
    desc: "Less than an hour from Asia's pharma hub, for minimal freight costs and rapid stock replenishment.",
    icon: <FaIndustry size={22} />,
  },
  {
    title: "High Prescription Density",
    desc: "PGIMER, GMCH-32, and hundreds of nursing homes and clinics generate year-round prescriptions.",
    icon: <FaHospital size={22} />,
  },
  {
    title: "Rising Healthcare Spend",
    desc: "Strong income and health awareness drive demand for acute and chronic therapies, nutraceuticals, and derma products.",
    icon: <FaArrowTrendUp size={22} />,
  },
];

export default function ChandigarhMarketSection({
  data,
}: ChandigarhMarketSectionProps) {
  const title =
    data?.title ||
    "Why Chandigarh Is a High-Growth Market for a Pharma Franchise";
  const description =
    data?.description ||
    "Setting up a pharmaceutical distribution business in Chandigarh gives you commercial and logistical advantages that few other Indian cities can match.";
  const items = data?.items || defaultItems;
  const footerNote =
    data?.footerNote ||
    "Partnering with Dr. D Pharma, headquartered next door in Baddi, Himachal Pradesh, gives you a supply-chain, cost, and delivery-speed advantage in Chandigarh.";

  return (
    <section className="bg-white pb-16 sm:pt-4 ">
      <div className="wrapper m-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-start"
            >
              {item.image ? (
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 shrink-0">
                  {item.icon}
                </div>
              )}

              <h3 className="text-lg font-semibold text-black mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 bg-color-secondary rounded-xl p-5 md:p-6 text-center max-w-4xl mx-auto border border-gray-200/60">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {footerNote.includes("Dr. D Pharma") ? (
              <>
                Partnering with{" "}
                <strong className="text-black font-semibold">
                  Dr. D Pharma
                </strong>
                , headquartered next door in Baddi, Himachal Pradesh, gives you
                a supply-chain, cost, and delivery-speed advantage in
                Chandigarh.
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
