import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  FileCheck,
  GraduationCap,
  Globe,
  Plane,
  Users,
  FileText,
  MessageCircle,
  Briefcase,
  Home,
  CreditCard,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive education consultancy services for Bangladeshi students — university selection, UCAS application, visa guidance, IELTS prep, scholarships, and more.",
};

const mainServices = [
  {
    icon: BookOpen,
    title: "University & Course Selection",
    description:
      "Our expert counselors analyze your academic background, career aspirations, and personal preferences to shortlist the best-fit UK universities and courses for you.",
    features: [
      "Profile assessment and gap analysis",
      "Personalized university shortlisting",
      "Course comparison and career mapping",
      "Russell Group and ranking-based recommendations",
    ],
  },
  {
    icon: FileCheck,
    title: "UCAS Application Support",
    description:
      "End-to-end support for your UCAS application, ensuring every element — from personal statement to references — is polished and compelling.",
    features: [
      "UCAS registration and form filling",
      "Personal statement drafting and review",
      "Reference letter guidance",
      "Application tracking and follow-up",
    ],
  },
  {
    icon: Globe,
    title: "IELTS & English Proficiency",
    description:
      "Expert IELTS preparation to help you achieve the band scores required by your target universities.",
    features: [
      "Diagnostic test and score prediction",
      "Focused coaching for all 4 modules",
      "Mock tests with personalized feedback",
      "Tips and strategies for Band 7.0+",
    ],
  },
  {
    icon: GraduationCap,
    title: "Scholarship Assistance",
    description:
      "Navigate the complex world of UK scholarships and funding with our expert guidance to reduce your study costs.",
    features: [
      "Chevening Scholarship guidance",
      "Commonwealth Scholarship support",
      "University-specific bursaries and awards",
      "Scholarship essay review",
    ],
  },
  {
    icon: Plane,
    title: "Visa & Immigration Guidance",
    description:
      "Comprehensive Tier 4 Student Visa support from document preparation to application submission with a 95%+ success rate.",
    features: [
      "CAS and visa document checklist",
      "Financial documentation guidance",
      "Visa interview preparation",
      "Health surcharge (IHS) and TB test guidance",
    ],
  },
  {
    icon: Users,
    title: "Pre-departure & Settlement",
    description:
      "Everything you need to know before leaving Bangladesh, so you arrive in the UK confident and prepared.",
    features: [
      "Accommodation assistance",
      "Airport pickup arrangements",
      "UK banking and SIM card setup guide",
      "Cultural orientation and student life tips",
    ],
  },
];

const additionalServices = [
  { icon: FileText, title: "SOP/LOR Writing", description: "Professional Statement of Purpose and Letter of Recommendation writing support." },
  { icon: MessageCircle, title: "Career Counseling", description: "Career guidance based on UK job market trends and your field of study." },
  { icon: Briefcase, title: "Internship Guidance", description: "Help finding internship and placement opportunities during your UK studies." },
  { icon: Home, title: "Accommodation Help", description: "University halls and private accommodation search and booking assistance." },
  { icon: CreditCard, title: "Financial Planning", description: "Budgeting guidance and education loan information for UK studies." },
  { icon: GraduationCap, title: "Postgraduate Planning", description: "PhD and research program application support for advanced studies." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-white/90 leading-relaxed">
              From your first consultation to your arrival in the UK, we provide comprehensive
              support at every stage of your study abroad journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Core Services</h2>
            <div className="section-divider mx-auto mb-4"></div>
          </div>
          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-text-dark mb-3">{service.title}</h3>
                  <p className="text-text-gray leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={16} />
                        <span className="text-text-dark text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 flex items-center justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <service.icon className="text-primary/30" size={120} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Additional Support</h2>
            <div className="section-divider mx-auto mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 card-hover border border-border">
                <service.icon className="text-primary mb-3" size={24} />
                <h3 className="font-semibold text-text-dark mb-2">{service.title}</h3>
                <p className="text-text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-gray max-w-xl mx-auto mb-8">
            Book a free consultation with our education experts and take the first step
            toward your UK education journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
