import React from "react";
import Image from "next/image";

interface ApplicantCard {
  title: string;
  desc: string;
}

interface WhoCanApplyData {
  title?: string;
  cards?: ApplicantCard[];
  image?: string;
  imageAlt?: string;
}

interface WhoCanApplyProps {
  data?: WhoCanApplyData;
}

const defaultCards: ApplicantCard[] = [
  {
    title: "Pharma Distributors & Stockists",
    desc: "Expand your therapeutic portfolio with high-margin monopoly brands.",
  },
  {
    title: "Medical Sales Representatives",
    desc: "Move from employment to owning an independent pharma business.",
  },
  {
    title: "Retail & Wholesale Pharmacy Owners",
    desc: "Boost margins by marketing your own exclusive product line.",
  },
  {
    title: "Healthcare Entrepreneurs",
    desc: "A low-risk, scalable model backed by an established pharma brand.",
  },
];

export default function WhoCanApply({ data }: WhoCanApplyProps) {
  const title = data?.title || "Who Can Apply for This Franchise?";
  const cards =
    data?.cards && data.cards.length > 0 ? data.cards : defaultCards;
  const image = data?.image || "/Webp/about 1.webp";
  const imageAlt = data?.imageAlt || "MR / distributor meeting a doctor";

  return (
    <section className="bg-white pt-12 sm:pt-16  ">
      <div className="wrapper m-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LIFESTYLE IMAGE (Desktop: Left, Mobile: Bottom - matching 'split rev') */}
        <div className="order-2 lg:order-1 relative w-full h-[360px] md:h-[440px] lg:h-[470px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* CONTENT SIDE (Heading & 4 Cards) */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {title}
          </h2>

          <div className="grid gap-3 sm:gap-3.5">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 border-l-4 border-l-secondary rounded-xl p-5 shadow-xs"
              >
                <h3 className="text-lg font-semibold text-black mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
