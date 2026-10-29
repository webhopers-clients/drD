import React from "react";
import Link from "next/link";
import TagBadge from "@/component/ui/TagBadge";
import { FaWhatsapp } from "react-icons/fa6";

export default function ManufacturingCatalog() {
  const catalog = [
    {
      segment: "Antibiotics & Anti-Infectives",
      dosage: (
        <>
          <Link href="/tablet" className="text-secondary hover:underline font-medium">Tablets</Link>,{" "}
          <Link href="/capsule" className="text-secondary hover:underline font-medium">Capsules</Link>,{" "}
          <Link href="/dry-syrup" className="text-secondary hover:underline font-medium">Dry Syrups</Link>,{" "}
          <Link href="/injection" className="text-secondary hover:underline font-medium">Injections</Link>,{" "}
          <Link href="/infusion" className="text-secondary hover:underline font-medium">Infusions</Link>
        </>
      ),
      capabilities:
        "Dedicated Beta-Lactam & Non-Beta-Lactam blocks; 2nd & 3rd Gen Cephalosporins, Penicillins + Beta-Lactamase Inhibitors, Macrolides, Fluoroquinolones, Carbapenems",
    },
    {
      segment: "Cardiac, Diabetic & Neuro",
      dosage: "Film-Coated Tablets, Bilayer/SR Tablets, Capsules",
      capabilities:
        "Antihypertensives (ARBs, CCBs, Beta-Blockers), Statins + Antiplatelets, Biguanides, DPP-4 & SGLT2 Inhibitors, Neuropathic Pain Modulators, Neurovitamins",
    },
    {
      segment: "Gastro, Analgesics & Ortho",
      dosage: (
        <>
          Enteric-Coated Tablets, DSR Capsules,{" "}
          <Link href="/softgel-capsule" className="text-secondary hover:underline font-medium">Softgel Capsules</Link>,{" "}
          <Link href="/suspension" className="text-secondary hover:underline font-medium">Suspensions</Link>,{" "}
          <Link href="/gel" className="text-secondary hover:underline font-medium">Gels</Link>,{" "}
          <Link href="/rollon" className="text-secondary hover:underline font-medium">Roll-Ons</Link>
        </>
      ),
      capabilities:
        "PPI + Prokinetic DSR Combinations, NSAIDs, COX-2 Inhibitors, Skeletal Muscle Relaxants, Proteolytic Enzymes, Antacids, Bone & Joint Care",
    },
    {
      segment: "Dermatology & Cosmeceuticals",
      dosage: (
        <>
          <Link href="/cream" className="text-secondary hover:underline font-medium">Creams</Link>,{" "}
          <Link href="/ointment" className="text-secondary hover:underline font-medium">Ointments</Link>,{" "}
          <Link href="/lotion" className="text-secondary hover:underline font-medium">Lotions</Link>, Gels,{" "}
          <Link href="/soap" className="text-secondary hover:underline font-medium">Soaps</Link>,{" "}
          <Link href="/shampoo" className="text-secondary hover:underline font-medium">Shampoos</Link>,{" "}
          <Link href="/facewash" className="text-secondary hover:underline font-medium">Facewash</Link>,{" "}
          <Link href="/dusting-powder" className="text-secondary hover:underline font-medium">Dusting Powders</Link>,{" "}
          <Link href="/solution" className="text-secondary hover:underline font-medium">Solutions</Link>
        </>
      ),
      capabilities:
        "Topical Antifungals, Corticosteroids, Anti-Acne Retinoids, Depigmenting Creams, Scabicidals, Sunscreens, Hair Growth Stimulants",
    },
    {
      segment: "Ophthalmic, ENT & Respiratory",
      dosage: (
        <>
          <Link href="/eye-drops" className="text-secondary hover:underline font-medium">Eye Drops</Link>,{" "}
          <Link href="/eye-ear-drops" className="text-secondary hover:underline font-medium">Eye/Ear Drops</Link>,{" "}
          <Link href="/ear-drops" className="text-secondary hover:underline font-medium">Ear Drops</Link>,{" "}
          <Link href="/eye-ointments" className="text-secondary hover:underline font-medium">Eye Ointments</Link>,{" "}
          <Link href="/nasal-spray" className="text-secondary hover:underline font-medium">Nasal Sprays</Link>,{" "}
          <Link href="/respules" className="text-secondary hover:underline font-medium">Respules</Link>,{" "}
          <Link href="/syrup" className="text-secondary hover:underline font-medium">Cough Syrups</Link>
        </>
      ),
      capabilities:
        "Sterile Ophthalmic Antibiotics & Artificial Tears, Antiglaucoma Drops, Bronchodilators, Inhaled Corticosteroids, Mucolytics, Antihistamines",
    },
    {
      segment: "Nutraceuticals & Wellness",
      dosage: (
        <>
          <Link href="/softgel-capsule" className="text-secondary hover:underline font-medium">Softgel Capsules</Link>,{" "}
          <Link href="/protein-powder" className="text-secondary hover:underline font-medium">Protein Powders</Link>,{" "}
          <Link href="/nanoshot" className="text-secondary hover:underline font-medium">NanoShots</Link>,{" "}
          <Link href="/sachet" className="text-secondary hover:underline font-medium">Sachets</Link>,{" "}
          <Link href="/drops" className="text-secondary hover:underline font-medium">Pediatric Drops</Link>,{" "}
          <Link href="/energy-drink" className="text-secondary hover:underline font-medium">Energy Drinks</Link>
        </>
      ),
      capabilities:
        "Multivitamins & Multiminerals, Calcium + Calcitriol + Vitamin D3, Multi-Strain Pre/Probiotics, Omega Fatty Acids, Hematinics, Antioxidants",
    },
    {
      segment: "Dental & Gynae Care",
      dosage: (
        <>
          <Link href="/mouthwash" className="text-secondary hover:underline font-medium">Mouthwash</Link>,{" "}
          <Link href="/toothpaste" className="text-secondary hover:underline font-medium">Toothpaste</Link>,{" "}
          <Link href="/gum-paint" className="text-secondary hover:underline font-medium">Gum Paint</Link>,{" "}
          <Link href="/vaginal-wash" className="text-secondary hover:underline font-medium">Vaginal Wash</Link>
        </>
      ),
      capabilities:
        "Desensitizing & Anti-Plaque Dental Care, Oral Antiseptics, Progestogen Hormonal Support, Prenatal Nutritional Supplements, Intimate Hygiene",
    },
    {
      segment: "Ayurvedic / Herbal (Herbal Mantra)",
      dosage: (
        <>
          Herbal Syrups, Capsules, Tablets,{" "}
          <Link href="/oil" className="text-secondary hover:underline font-medium">Medicated Oils</Link>,{" "}
          <Link href="/tonic" className="text-secondary hover:underline font-medium">Tonics</Link>
        </>
      ),
      capabilities:
        "Ayurvedic Liver & Digestive Enzyme Support, Uterine Tonics, Immunity Boosters, Herbal Laxatives, Anti-Piles, Joint & Musculoskeletal Relief",
    },
  ];

  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="wrapper m-auto">
        <div className="text-center mb-12">
          <TagBadge text="800+ APPROVED FORMULATIONS" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-normal text-[#253746] leading-tight mt-2 mb-3">
            Product Categories &amp; <span className="font-bold">Dosage Forms We Manufacture</span>
          </h2>
          <p className="text-[#626263] max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Our Baddi manufacturing facility spans{" "}
            <strong className="text-[#253746] font-semibold">800+ pharmaceutical formulations</strong>{" "}
            across major therapeutic segments and specialized dosage forms under one roof.
          </p>
        </div>

        {/* Minimalist Corporate Catalog Table (NO Template Card Box) */}
        <div className="overflow-x-auto mb-14">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200 text-[#253746]">
                <th className="py-4 pr-6 font-bold text-xs uppercase tracking-wider w-1/4">
                  Therapeutic Segment
                </th>
                <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider w-1/3">
                  Dosage Forms Manufactured
                </th>
                <th className="py-4 pl-6 font-bold text-xs uppercase tracking-wider">
                  Key Formulations &amp; Capabilities
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {catalog.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-5 pr-6 font-bold text-[#253746] align-top text-base">
                    {row.segment}
                  </td>
                  <td className="py-5 px-6 text-gray-700 leading-relaxed align-top">
                    {row.dosage}
                  </td>
                  <td className="py-5 pl-6 text-[#626263] leading-relaxed align-top text-xs sm:text-sm">
                    {row.capabilities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mid Page Conversion Banner - Homepage Style */}
        <div className="bg-gradient-to-r from-[#1c3c54] to-[#253746] text-white p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-md">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-normal leading-snug mb-2 text-white">
              Need a Specific Molecule, Custom Formulation, or <span className="font-bold">Complete Product Line Manufactured?</span>
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Share your composition list and batch quantities to receive direct ex-factory rates from our Baddi production team.
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="#contact"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3.5 rounded-lg shadow-sm transition text-sm text-center w-full sm:w-auto"
            >
              Request Custom Quote
            </Link>
            <a
              href="https://wa.me/919041246545"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-6 py-3.5 rounded-lg transition text-sm flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
