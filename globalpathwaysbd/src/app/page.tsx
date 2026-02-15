import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  FileCheck,
  Plane,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Building,
  Clock,
} from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Students Placed" },
  { icon: Building, value: "50+", label: "Partner Universities" },
  { icon: Award, value: "95%", label: "Visa Success Rate" },
  { icon: Clock, value: "8+", label: "Years Experience" },
];

const services = [
  {
    icon: BookOpen,
    title: "University Selection",
    description:
      "We help you choose the right UK university and course based on your academic background, interests, and career goals.",
  },
  {
    icon: FileCheck,
    title: "Application Support",
    description:
      "Complete guidance through the UCAS application process including personal statement writing and document preparation.",
  },
  {
    icon: GraduationCap,
    title: "Scholarship Guidance",
    description:
      "Identify and apply for scholarships including Chevening, Commonwealth, and university-specific funding opportunities.",
  },
  {
    icon: Globe,
    title: "IELTS Preparation",
    description:
      "Expert IELTS coaching to help you achieve the required band scores for your chosen UK university.",
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description:
      "Step-by-step guidance for UK Student Visa (Tier 4) application with document checklist and interview preparation.",
  },
  {
    icon: Users,
    title: "Pre-departure Support",
    description:
      "Comprehensive pre-departure briefing covering accommodation, banking, travel, and settling into UK student life.",
  },
];

const whyUK = [
  "World-renowned education system with globally recognized degrees",
  "Shorter course duration — save time and money",
  "Post-study work visa (Graduate Route) — 2 years to work after studies",
  "Multicultural environment welcoming to international students",
  "Cutting-edge research facilities and industry connections",
  "Over 50,000 courses across 160+ institutions",
];

const testimonials = [
  {
    name: "Rahima Akter",
    university: "University of Manchester",
    course: "MSc Data Science",
    text: "GlobalPathwaysBD made my dream of studying in the UK a reality. Their step-by-step guidance from university selection to visa approval was incredible.",
    rating: 5,
  },
  {
    name: "Tanvir Ahmed",
    university: "University of Leeds",
    course: "MBA",
    text: "The team helped me secure a partial scholarship and guided me through every step. I couldn't have done it without their expert support.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    university: "University of Edinburgh",
    course: "MSc Public Health",
    text: "Professional, supportive, and genuinely caring. They treated my application like it was their own. Highly recommended for any Bangladeshi student!",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-accent-light rounded-full animate-pulse"></span>
              Now accepting applications for September 2026 intake
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Dream UK Education{" "}
              <span className="text-accent-light">Starts Here</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              GlobalPathwaysBD is Bangladesh&apos;s trusted education consultancy helping
              students get into top UK universities. From application to arrival —
              we guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-md text-center transition-colors text-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/study-in-uk"
                className="border-2 border-white/50 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-md text-center transition-colors text-lg"
              >
                Explore Study Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 text-primary" size={32} />
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-text-gray text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              How We Help You Succeed
            </h2>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="text-text-gray max-w-2xl mx-auto">
              Our comprehensive services cover every aspect of your study abroad journey,
              from choosing the right university to settling into life in the UK.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 card-hover border border-border"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why UK Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
                Why Study in the <span className="text-secondary">United Kingdom</span>?
              </h2>
              <div className="section-divider mb-6"></div>
              <p className="text-text-gray mb-6 leading-relaxed">
                The UK is home to some of the world&apos;s oldest and most prestigious
                universities. A UK degree is recognized worldwide and opens doors to
                exceptional career opportunities globally.
              </p>
              <ul className="space-y-3">
                {whyUK.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                    <span className="text-text-dark text-sm">{reason}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/study-in-uk"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-md mt-8 transition-colors"
              >
                Learn More About UK Education <ArrowRight size={18} />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <p className="text-4xl font-bold text-primary">4</p>
                  <p className="text-sm text-text-gray mt-1">of Top 10 World Universities</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <p className="text-4xl font-bold text-secondary">600K+</p>
                  <p className="text-sm text-text-gray mt-1">International Students</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <p className="text-4xl font-bold text-primary">160+</p>
                  <p className="text-sm text-text-gray mt-1">Universities</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <p className="text-4xl font-bold text-secondary">50K+</p>
                  <p className="text-sm text-text-gray mt-1">Courses Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Student Success Stories
            </h2>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="text-text-gray max-w-2xl mx-auto">
              Hear from Bangladeshi students who have successfully started their
              UK education journey with GlobalPathwaysBD.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-6 card-hover border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={18} />
                  ))}
                </div>
                <p className="text-text-gray text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-text-dark">{t.name}</p>
                  <p className="text-sm text-primary">{t.university}</p>
                  <p className="text-xs text-text-light">{t.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Your Journey in 5 Simple Steps
            </h2>
            <div className="section-divider mx-auto mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Free Consultation", desc: "Meet our counselors to discuss your goals" },
              { step: "02", title: "University Selection", desc: "Choose the best-fit universities and courses" },
              { step: "03", title: "Application & Offer", desc: "Submit applications and secure offers" },
              { step: "04", title: "Visa & Finance", desc: "Complete visa process and financial planning" },
              { step: "05", title: "Fly to the UK!", desc: "Pre-departure prep and begin your journey" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-semibold text-text-dark mb-2">{item.title}</h3>
                <p className="text-text-gray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
