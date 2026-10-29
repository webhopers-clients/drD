import React from "react";
import { FaStar } from "react-icons/fa6";

export default function ManufacturingReviews() {
  const reviews = [
    {
      title: "“MNC-Grade Alu-Alu Packaging & On-Time Delivery”",
      quote:
        "“We have been manufacturing our Antibiotic tablets, DSR capsules, and Pediatric dry syrups with Dr D Pharma in Baddi for over 4 years. Their Alu-Alu finish and leak-proof bottle packaging match top corporate brands, and repeat batches always arrive within 25 days.”",
      author: "Managing Director — Pharma Marketing Company (New Delhi)",
    },
    {
      title: "“Smooth Onboarding for Our Derma & Nutraceutical Range”",
      quote:
        "“When we launched our softgel and derma ointment divisions, Dr D Pharma’s Baddi team handled everything from composition approval to drip-off carton design. Their pricing is transparent with zero hidden charges.”",
      author: "Founder — PCD & Healthcare Brand (Mumbai, Maharashtra)",
    },
    {
      title: "“Consistent Batch Quality & Complete COA Documentation”",
      quote:
        "“Having a responsive production coordinator at their Himachal plant makes inventory planning effortless. Every consignment arrives with complete COA test reports and sturdy outer packaging.”",
      author:
        "Procurement Head — Institutional Pharma Distributor (Hyderabad, Telangana)",
    },
  ];

  return (
    <section className="py-14 sm:py-18 px-6 bg-white">
      <div className="wrapper m-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#253746] mb-3">
            Trusted by 300+ Pharma Brands Across India — What Our Partners Say
          </h2>
          <p className="text-[#626263] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Read verified feedback from pharmaceutical marketers who rely on our Baddi plant:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] p-6 sm:p-7 rounded-xl border border-gray-200 shadow-2xs hover:shadow-xs transition flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 text-sm mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h3 className="font-bold text-[#253746] text-base mb-2 leading-snug">
                  {rev.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#626263] italic leading-relaxed mb-6">
                  {rev.quote}
                </p>
              </div>
              <div className="border-t border-gray-200 pt-3.5 text-xs font-semibold text-gray-700">
                {rev.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
