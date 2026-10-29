"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function ManufacturingFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Q1. What is Third Party Pharma Manufacturing?",
      a: "Third-party (contract) pharma manufacturing is an arrangement where a certified pharmaceutical manufacturer like Dr D Pharma produces medicines, nutraceuticals, or derma products on behalf of another healthcare company under that company's brand name and specifications—without the client company needing to invest in its own manufacturing plant.",
    },
    {
      q: "Q2. Why choose Dr D Pharma as a Third Party Pharma Manufacturer in Baddi?",
      a: "Established in 2010, Dr D Pharma is an ISO 9001:2015 certified company with its own WHO-GMP certified manufacturing unit in Baddi, Himachal Pradesh. We bring 16+ years of pharmaceutical manufacturing experience, 800+ DCGI-approved formulations, strict QA/QC protocols, transparent pricing, and complete packaging support.",
    },
    {
      q: "Q3. Can I get my own custom formulation manufactured, or only your existing products?",
      a: "Both. We manufacture our existing portfolio of 800+ formulations under your brand name, and we also develop custom product formulas and specifications tailored to your market requirements, subject to technical feasibility and regulatory review.",
    },
    {
      q: "Q4. What dosage forms can Dr D Pharma manufacture?",
      a: "We manufacture Tablets, Hard Gelatin & Softgel Capsules, Dry & Liquid Syrups, Suspensions, Injectables, Infusions, Ointments, Creams, Gels, Lotions, Soaps, Shampoos, Eye/Ear Drops, Nasal Sprays, Respules, Protein Powders, NanoShots, Oral Care products (Mouthwash, Toothpaste, Gum Paint), and Sachets across Allopathic, Nutraceutical, and Ayurvedic (Herbal Mantra) segments.",
    },
    {
      q: "Q5. What is the delivery turnaround time for contract manufacturing in Baddi?",
      a: "For new brands and first-time orders, the standard turnaround time is 30 to 40 days, which covers brand verification, artwork design, cylinder/foil printing, production, and QA/QC testing. For repeat orders, delivery takes 20 to 25 days.",
    },
    {
      q: "Q6. What documents are required to start a manufacturing tie-up?",
      a: "You will need Company Registration proof (COI / Partnership Deed / Proprietorship proof), GST Registration Certificate, a Wholesale Drug License (Form 20B & 21B for allopathic medicines) or FSSAI License (for nutraceuticals), product specification sheet, brand/trademark details, and a signed manufacturing agreement.",
    },
    {
      q: "Q7. Do you offer loan license manufacturing in Baddi?",
      a: "Yes, we offer both third-party (contract) manufacturing and loan license manufacturing arrangements at our Himachal Pradesh facility, depending on what best suits your business structure.",
    },
    {
      q: "Q8. How is product quality ensured at Dr D Pharma?",
      a: "Every batch is manufactured under strict QA/QC control guidelines in our WHO-GMP certified and microbe-controlled facility in Baddi. Each batch is tested and inspected by qualified pharmacologists—with a formal Certificate of Analysis (COA) issued—before dispatch.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-18 px-6 bg-[#FAFAFA]">
      <div className="wrapper m-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#253746] mb-3">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-[#626263] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Get clear answers regarding our third-party contract manufacturing terms, certifications, and capabilities:
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs transition"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 font-semibold text-[#253746] flex justify-between items-center gap-4 cursor-pointer hover:text-secondary transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold">{faq.q}</span>
                  <span
                    className={`transition-transform duration-200 text-secondary shrink-0 text-xs sm:text-sm ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <FaChevronDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 pt-1 text-xs sm:text-sm text-[#626263] leading-relaxed border-t border-gray-100 bg-white">
                    <p className="pt-2">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
