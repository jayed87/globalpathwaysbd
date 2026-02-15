import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Briefcase,
  Globe,
  DollarSign,
  Calendar,
  FileText,
  CreditCard,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Study in UK",
  description:
    "Complete guide to studying in the UK for Bangladeshi students — admission requirements, visa process, costs, scholarships, and student life information.",
};

const admissionRequirements = [
  {
    level: "Undergraduate (Bachelor's)",
    duration: "3 years",
    requirements: [
      "HSC/A-Level completion with good grades",
      "IELTS 6.0-6.5 overall (minimum 5.5 in each component)",
      "UCAS application with personal statement",
      "Academic references",
      "Foundation year may be required for some programs",
    ],
  },
  {
    level: "Postgraduate (Master's)",
    duration: "1 year",
    requirements: [
      "Bachelor's degree with minimum 2nd class / CGPA 3.0+",
      "IELTS 6.5-7.0 overall (minimum 6.0 in each component)",
      "Statement of Purpose (SOP)",
      "Two academic/professional references",
      "Relevant work experience (for MBA/professional courses)",
    ],
  },
  {
    level: "PhD / Research",
    duration: "3-4 years",
    requirements: [
      "Master's degree in relevant field",
      "Strong research proposal",
      "IELTS 7.0+ overall",
      "Academic references from supervisors",
      "Published research papers (advantage)",
    ],
  },
];

const visaSteps = [
  { step: 1, title: "Receive CAS", desc: "Get your Confirmation of Acceptance for Studies from the university" },
  { step: 2, title: "Gather Documents", desc: "Passport, CAS, financial proof, IELTS, TB test certificate" },
  { step: 3, title: "Online Application", desc: "Complete the visa application on the UK government website" },
  { step: 4, title: "Biometrics & Docs", desc: "Visit VFS Global center in Dhaka for biometrics submission" },
  { step: 5, title: "Visa Decision", desc: "Usually received within 3-4 weeks of biometric submission" },
  { step: 6, title: "Fly to the UK!", desc: "Collect BRP card within 10 days of arriving in the UK" },
];

const costs = [
  { item: "Tuition (UG)", range: "£10,000 - £26,000/year" },
  { item: "Tuition (PG)", range: "£12,000 - £35,000/year" },
  { item: "Living Costs (London)", range: "£1,334/month (min)" },
  { item: "Living Costs (Outside London)", range: "£1,023/month (min)" },
  { item: "Health Surcharge (IHS)", range: "£776/year" },
  { item: "Visa Application Fee", range: "£490" },
  { item: "IELTS Test Fee", range: "BDT 25,500" },
  { item: "TB Test", range: "BDT 5,000 - 8,000" },
];

const scholarships = [
  {
    name: "Chevening Scholarships",
    coverage: "Full funding — tuition, living, flights",
    eligibility: "2+ years work experience, leadership potential",
  },
  {
    name: "Commonwealth Scholarships",
    coverage: "Full funding for Master's and PhD",
    eligibility: "Citizens of Commonwealth countries including Bangladesh",
  },
  {
    name: "Great Scholarships",
    coverage: "£10,000 towards tuition",
    eligibility: "Students from Bangladesh applying to participating universities",
  },
  {
    name: "University Scholarships",
    coverage: "£2,000 - £10,000 tuition discount",
    eligibility: "Varies by university — merit and need-based",
  },
];

const intakes = [
  { month: "September/October", type: "Main Intake", note: "Largest intake with maximum course availability. Apply by June." },
  { month: "January/February", type: "Secondary Intake", note: "Available for many postgraduate programs. Apply by October." },
  { month: "May/June", type: "Limited Intake", note: "Very few universities offer this intake. Check availability." },
];

export default function StudyInUKPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Study in the United Kingdom
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Everything you need to know about pursuing higher education in the UK — 
              from admission requirements and visa processes to costs, scholarships,
              and student life.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b border-border sticky top-[104px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm">
            {["Requirements", "Visa Process", "Costs", "Scholarships", "Intakes", "Student Life"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-text-gray hover:text-primary whitespace-nowrap font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section id="requirements" className="py-16 bg-white scroll-mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-2">Admission Requirements</h2>
          <div className="section-divider mb-8"></div>
          <div className="space-y-8">
            {admissionRequirements.map((level) => (
              <div key={level.level} className="bg-bg-light rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-primary" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-text-dark">{level.level}</h3>
                    <p className="text-sm text-text-light">Duration: {level.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {level.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={16} />
                      <span className="text-text-gray text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Process */}
      <section id="visa-process" className="py-16 bg-bg-light scroll-mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-2">UK Student Visa Process</h2>
          <div className="section-divider mb-4"></div>
          <p className="text-text-gray mb-8 max-w-2xl">
            The UK Student Visa (formerly Tier 4) allows you to study in the UK for the
            duration of your course. Here&apos;s the step-by-step process:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaSteps.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 border border-border">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold text-text-dark mb-1">{item.title}</h3>
                <p className="text-text-gray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/20">
            <h3 className="font-semibold text-primary mb-2">Key Visa Documents Checklist</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                "Valid passport (6+ months validity)",
                "CAS letter from university",
                "IELTS/English proficiency proof",
                "Financial evidence (28 days in bank)",
                "TB test certificate from IOM Dhaka",
                "Academic transcripts and certificates",
                "Passport-size photographs",
                "Immigration Health Surcharge payment",
              ].map((doc) => (
                <div key={doc} className="flex items-center gap-2">
                  <FileText className="text-primary shrink-0" size={14} />
                  <span className="text-sm text-text-dark">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section id="costs" className="py-16 bg-white scroll-mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-2">Cost of Studying in the UK</h2>
          <div className="section-divider mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-bg-light rounded-xl overflow-hidden border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 text-left text-sm font-medium">Expense</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costs.map((cost, i) => (
                      <tr key={cost.item} className={i % 2 === 0 ? "bg-white" : "bg-bg-light"}>
                        <td className="px-4 py-3 text-sm text-text-dark">{cost.item}</td>
                        <td className="px-4 py-3 text-sm font-medium text-primary">{cost.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-dark mb-4">Ways to Reduce Costs</h3>
              <ul className="space-y-3">
                {[
                  "Apply for scholarships and bursaries",
                  "Choose universities outside London for lower living costs",
                  "Part-time work (up to 20 hrs/week during term)",
                  "Cook at home instead of eating out",
                  "Use student discounts (NUS card, Unidays)",
                  "Consider shared accommodation",
                  "Use public transport with student railcard",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <DollarSign className="text-green-600 shrink-0 mt-0.5" size={16} />
                    <span className="text-text-gray text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-16 bg-bg-light scroll-mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-2">Scholarships for Bangladeshi Students</h2>
          <div className="section-divider mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scholarships.map((s) => (
              <div key={s.name} className="bg-white rounded-xl p-6 border border-border card-hover">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="text-accent" size={24} />
                  <h3 className="text-lg font-semibold text-text-dark">{s.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CreditCard className="text-green-600 shrink-0 mt-0.5" size={14} />
                    <p className="text-sm text-text-gray"><strong>Coverage:</strong> {s.coverage}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={14} />
                    <p className="text-sm text-text-gray"><strong>Eligibility:</strong> {s.eligibility}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intakes */}
      <section id="intakes" className="py-16 bg-white scroll-mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-2">UK University Intakes</h2>
          <div className="section-divider mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {intakes.map((intake) => (
              <div key={intake.month} className="bg-bg-light rounded-xl p-6 border border-border">
                <Calendar className="text-primary mb-3" size={24} />
                <h3 className="text-lg font-semibold text-text-dark">{intake.month}</h3>
                <p className="text-sm text-secondary font-medium mb-2">{intake.type}</p>
                <p className="text-text-gray text-sm">{intake.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section id="student-life" className="py-16 bg-bg-light scroll-mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-2">Student Life in the UK</h2>
          <div className="section-divider mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Part-time Work",
                desc: "International students can work up to 20 hours/week during term and full-time during holidays. Post-study Graduate Route visa allows 2 years of work.",
              },
              {
                icon: Globe,
                title: "Multicultural Experience",
                desc: "UK universities have vibrant international communities. You'll meet students from over 150 countries and experience diverse cultures.",
              },
              {
                icon: BookOpen,
                title: "Academic Excellence",
                desc: "UK universities use a blend of lectures, seminars, tutorials, and independent research. The teaching style encourages critical thinking.",
              },
              {
                icon: GraduationCap,
                title: "Student Support",
                desc: "Universities offer extensive support including academic advisors, mental health services, career counseling, and international student offices.",
              },
              {
                icon: Globe,
                title: "Travel Opportunities",
                desc: "The UK's central location in Europe makes weekend trips affordable. Student rail cards offer 1/3 off travel within the UK.",
              },
              {
                icon: Briefcase,
                title: "Career Prospects",
                desc: "UK graduates are highly valued globally. Career services at universities help with internships, job placements, and networking.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-border">
                <item.icon className="text-primary mb-3" size={24} />
                <h3 className="font-semibold text-text-dark mb-2">{item.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-text-gray max-w-xl mx-auto mb-8">
            Every student&apos;s journey is unique. Get personalized advice from our UK education
            experts based on your specific background and goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Get Free Expert Advice <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
