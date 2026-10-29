import React from "react";

interface StepItem {
  title: string;
  desc: string;
}

interface HowToGetStartedData {
  title?: string;
  steps?: StepItem[];
}

interface HowToGetStartedProps {
  data?: HowToGetStartedData;
}

const defaultSteps: StepItem[] = [
  {
    title: "Inquire",
    desc: "Use our enquiry form, call, or WhatsApp to check territory availability in your sector or zone.",
  },
  {
    title: "Select Your Products",
    desc: "Browse 800+ products and shortlist segments suited to your customer and doctor base.",
  },
  {
    title: "Confirm Monopoly Rights",
    desc: "Submit KYC and license documents to lock your exclusive rights in your chosen area.",
  },
  {
    title: "Join Us",
    desc: "Receive initial stock, promotional materials, product lists, and dedicated franchise support.",
  },
];

export default function HowToGetStarted({ data }: HowToGetStartedProps) {
  const title = data?.title || "How to Get Started";
  const steps = data?.steps || defaultSteps;

  return (
    <section className=" pt-12 sm:pt-16 sm:pb-4">
      <div className="wrapper m-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {title}
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-full bg-secondary text-white font-bold text-base flex items-center justify-center mb-4 shrink-0">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold text-black mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
