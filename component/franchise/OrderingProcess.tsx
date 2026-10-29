import React from "react";
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";

interface ProcessStep {
  title: string;
  desc: string;
}

interface OrderingProcessData {
  title?: string;
  lead?: string;
  steps?: ProcessStep[];
  image?: string;
  imageAlt?: string;
}

interface OrderingProcessProps {
  data?: OrderingProcessData;
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Place your order:",
    desc: "contact our sales support team via phone, email, or WhatsApp with items and quantities.",
  },
  {
    title: "Order confirmation:",
    desc: "we verify batch availability, partner pricing, and dispatch timelines immediately.",
  },
  {
    title: "Quick dispatch:",
    desc: "orders are packed in our climate-controlled warehouse and sent via our reliable logistics network.",
  },
  {
    title: "100% stock availability:",
    desc: "your clinics, hospitals, and chemists in Chandigarh receive uninterrupted deliveries.",
  },
];

export default function OrderingProcess({ data }: OrderingProcessProps) {
  const title = data?.title || "Ordering & Supply Process";
  const lead =
    data?.lead || "Once onboarded, restocking is fast and effortless.";
  const steps =
    data?.steps && data.steps.length > 0 ? data.steps : defaultSteps;
  const image = data?.image || "/images/why2.png";
  const imageAlt =
    data?.imageAlt ||
    "Dispatch / logistics image - Packed cartons or delivery vehicle";

  return (
    <section className="bg-white py-16 ">
      <div className="wrapper m-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Ordering & Supply Details */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
            {lead}
          </p>

          <div className="space-y-6">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <IoCheckmark className="text-white" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-black inline">
                    {item.title}{" "}
                  </h4>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Dispatch / Logistics Image */}
        <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

