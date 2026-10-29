import React from "react";
import TagBadge from "@/component/ui/TagBadge";

export default function ManufacturingProcess() {
  const steps = [
    {
      title: "Inquire",
      desc: "Share target compositions, dosage forms, packaging, and quantities with our team.",
    },
    {
      title: "Quote",
      desc: "We verify feasibility and provide transparent cost estimation and MOQs within 24 hours.",
    },
    {
      title: "Agreement",
      desc: "Fulfill documentation while our design team prepares carton and foil artwork for sign-off.",
    },
    {
      title: "Manufacturing",
      desc: "Batch production under WHO-GMP standards with pharmacologist testing and COA issuance.",
    },
    {
      title: "Dispatch",
      desc: "Secure corrugated packaging and prompt dispatch via trusted Pan-India transport network.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-color-secondary">
      <div className="wrapper m-auto">
        <div className="text-center mb-14">
          <TagBadge text="PRODUCTION WORKFLOW" className="mb-3" />
          <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-normal text-[#253746] leading-tight mt-2 mb-3">
            How to Get Started with Third Party Manufacturing in <span className="font-bold">5 Steps</span>
          </h2>
          <p className="text-[#626263] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Our streamlined onboarding and production workflow ensures hassle-free launch of your medical formulations:
          </p>
        </div>

        {/* Step Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-10 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-start">
              <span className="text-secondary font-bold text-xs uppercase tracking-wider mb-2 block">
                Step {idx + 1}
              </span>

              <h3 className="text-lg font-bold text-[#253746] mb-2">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#626263] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
