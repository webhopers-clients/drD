import React from "react";
import { headers } from "next/headers";
import { facilitiesPageEndPoints } from "@/lib/service/facilities";
import { getAbsoluteUrl } from "@/utills/seo/getAbsoluteUrl";
import { buildMetadata } from "@/utills/seo/generateMetaData";

import ManufacturingHero from "@/component/manufacturing/ManufacturingHero";
import QuickSpecifications from "@/component/manufacturing/QuickSpecifications";
import RegionalAdvantage from "@/component/manufacturing/RegionalAdvantage";
import CompanyDifferentiators from "@/component/manufacturing/CompanyDifferentiators";
import ManufacturingCatalog from "@/component/manufacturing/ManufacturingCatalog";
import TargetAudience from "@/component/manufacturing/TargetAudience";
import ManufacturingDocuments from "@/component/manufacturing/ManufacturingDocuments";
import ManufacturingProcess from "@/component/manufacturing/ManufacturingProcess";
import Reviews from "@/component/homePageComponent/Reviews";
import QuickAnswers from "@/component/gallery/QuickAnswer";

interface FacilitiesData {
  seo_meta?: {
    seo_title?: string;
    seo_description?: string;
  };
  heroSectionData?: {
    background?: {
      imageSrc?: string;
    };
  };
  infrastructureData?: {
    section?: {
      image?: string;
    };
  };
  faq?: {
    data?: Array<{
      id: number;
      question: string;
      answer: string;
    }>;
  };
}

const fallbackFaqData = [
  {
    id: 1,
    question: "What is Third Party Pharma Manufacturing?",
    answer:
      "Third-party (contract) pharma manufacturing is an arrangement where a certified pharmaceutical manufacturer like Dr D Pharma produces medicines, nutraceuticals, or derma products on behalf of another healthcare company under that company's brand name and specifications—without the client company needing to invest in its own manufacturing plant.",
  },
  {
    id: 2,
    question:
      "Why choose Dr D Pharma as a Third Party Pharma Manufacturer in Baddi?",
    answer:
      "Established in 2010, Dr D Pharma is an ISO 9001:2015 certified company with its own WHO-GMP certified manufacturing unit in Baddi, Himachal Pradesh. We bring 16+ years of pharmaceutical manufacturing experience, 800+ DCGI-approved formulations, strict QA/QC protocols, transparent pricing, and complete packaging support.",
  },
  {
    id: 3,
    question:
      "Can I get my own custom formulation manufactured, or only your existing products?",
    answer:
      "Both. We manufacture our existing portfolio of 800+ formulations under your brand name, and we also develop custom product formulas and specifications tailored to your market requirements, subject to technical feasibility and regulatory review.",
  },
  {
    id: 4,
    question: "What dosage forms can Dr D Pharma manufacture?",
    answer:
      "We manufacture Tablets, Hard Gelatin & Softgel Capsules, Dry & Liquid Syrups, Suspensions, Injectables, Infusions, Ointments, Creams, Gels, Lotions, Soaps, Shampoos, Eye/Ear Drops, Nasal Sprays, Respules, Protein Powders, NanoShots, Oral Care products (Mouthwash, Toothpaste, Gum Paint), and Sachets across Allopathic, Nutraceutical, and Ayurvedic (Herbal Mantra) segments.",
  },
  {
    id: 5,
    question:
      "What is the delivery turnaround time for contract manufacturing in Baddi?",
    answer:
      "For new brands and first-time orders, the standard turnaround time is 30 to 40 days, which covers brand verification, artwork design, cylinder/foil printing, production, and QA/QC testing. For repeat orders, delivery takes 20 to 25 days.",
  },
  {
    id: 6,
    question: "What documents are required to start a manufacturing tie-up?",
    answer:
      "You will need Company Registration proof (COI / Partnership Deed / Proprietorship proof), GST Registration Certificate, a Wholesale Drug License (Form 20B & 21B for allopathic medicines) or FSSAI License (for nutraceuticals), product specification sheet, brand/trademark details, and a signed manufacturing agreement.",
  },
  {
    id: 7,
    question: "Do you offer loan license manufacturing in Baddi?",
    answer:
      "Yes, we offer both third-party (contract) manufacturing and loan license manufacturing arrangements at our Himachal Pradesh facility, depending on what best suits your business structure.",
  },
  {
    id: 8,
    question: "How is product quality ensured at Dr D Pharma?",
    answer:
      "Every batch is manufactured under strict QA/QC control guidelines in our WHO-GMP certified and microbe-controlled facility in Baddi. Each batch is tested and inspected by qualified pharmacologists—with a formal Certificate of Analysis (COA) issued—before dispatch.",
  },
];

export async function generateMetadata() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/manufacturing";
  const pageUrl = getAbsoluteUrl(pathname);
  let data: FacilitiesData | null = null;
  try {
    data = (await facilitiesPageEndPoints.getData()) as FacilitiesData;
  } catch {
    data = null;
  }
  const data1 = data?.seo_meta;
  const data2 = data?.heroSectionData;

  return buildMetadata({
    pathname: pathname,
    seo: {
      metaTitle:
        data1?.seo_title ||
        "Third Party Manufacturer in Baddi (WHO-GMP) | Dr D Pharma",
      metaDescription:
        data1?.seo_description ||
        "Looking for a WHO-GMP certified third party pharma manufacturer in Baddi? Dr D Pharma offers 16+ yrs of contract manufacturing across 800+ products. Quote!",
      canonical:
        pageUrl || "https://www.drdpharma.in/third-party-manufacturer-in-baddi",
      ogImage:
        data2?.background?.imageSrc || "/images/infra.jpg",
    },
  });
}

export default async function FacilityPage() {
  let data: FacilitiesData | null = null;
  try {
    data = (await facilitiesPageEndPoints.getData()) as FacilitiesData;
  } catch {
    data = null;
  }

  const { faq } = data || {};
  const faqData = faq?.data && faq.data.length > 0 ? faq.data : fallbackFaqData;

  const heroImage =
    data?.heroSectionData?.background?.imageSrc ||
    data?.infrastructureData?.section?.image ||
    "/images/infra.jpg";

  return (
    <main className="w-full mx-auto">
      {/* HERO SECTION + Trust Bar */}
      <ManufacturingHero imageSrc={heroImage} />

      {/* SECTION 1: Quick Specifications & Plant Highlights */}
      <QuickSpecifications />

      {/* SECTION 2: Why Baddi Is India’s #1 Pharma Manufacturing Destination */}
      <RegionalAdvantage />

      {/* SECTION 3: Why Choose Dr D Pharma for Third Party Manufacturing */}
      <CompanyDifferentiators />

      {/* SECTION 4: Comprehensive Therapeutic Formulation Portfolio (800+ Products) */}
      <ManufacturingCatalog />

      {/* SECTION 5: Who Benefits from Our Third Party Manufacturing */}
      <TargetAudience />

      {/* SECTION 6: Regulatory & Documentation Checklist */}
      <ManufacturingDocuments />

      {/* SECTION 7: Step-by-Step Process */}
      <ManufacturingProcess />

      {/* REVIEWS */}
      <Reviews />

      {/* FAQS */}
      <QuickAnswers faqData={faqData} showImage={false} />


    </main>
  );
}
