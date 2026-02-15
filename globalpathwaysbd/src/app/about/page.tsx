import { Metadata } from "next";
import { Target, Eye, Heart, Users, Award, BookOpen, Shield, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GlobalPathwaysBD — Bangladesh's trusted education consultancy helping students pursue higher education in the UK since 2018.",
};

const values = [
  {
    icon: Heart,
    title: "Student-First Approach",
    description: "Every decision we make is centered around what's best for our students and their future.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "We provide honest, accurate information about universities, costs, and processes — no hidden surprises.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in counseling, application preparation, and student support.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "We maintain ethical practices and only recommend institutions that truly match our students' profiles.",
  },
];

const team = [
  {
    name: "Dr. Kamal Hossain",
    role: "Founder & Chief Counselor",
    bio: "PhD from University of Birmingham with 15+ years of experience in international education consultancy.",
  },
  {
    name: "Fatema Begum",
    role: "Senior Admissions Counselor",
    bio: "Former UK university admissions officer with deep knowledge of UCAS processes and university selection.",
  },
  {
    name: "Rafiqul Islam",
    role: "Visa & Immigration Specialist",
    bio: "Certified immigration advisor specializing in UK Student Visa applications with 95%+ success rate.",
  },
  {
    name: "Sabrina Mostafa",
    role: "IELTS Trainer & Student Coordinator",
    bio: "IELTS Band 8.5 scorer and certified English language trainer helping students achieve their target scores.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About GlobalPathwaysBD</h1>
            <p className="text-lg text-white/90 leading-relaxed">
              We are a team of passionate education professionals dedicated to connecting
              Bangladeshi students with world-class UK universities. Since 2018, we have
              helped over 500 students achieve their dream of studying abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-4">Our Story</h2>
              <div className="section-divider mb-6"></div>
              <div className="space-y-4 text-text-gray leading-relaxed">
                <p>
                  GlobalPathwaysBD was founded in 2018 by Dr. Kamal Hossain, a UK-educated
                  Bangladeshi who experienced firsthand the challenges of navigating the
                  complex UK university admission process.
                </p>
                <p>
                  Recognizing the lack of reliable, student-centered education consultancy
                  services in Bangladesh, he established GlobalPathwaysBD with a simple
                  mission: to make quality UK education accessible to every deserving
                  Bangladeshi student.
                </p>
                <p>
                  Today, we are proud to be one of Bangladesh&apos;s most trusted education
                  consultancies, with partnerships across 50+ UK universities and a track
                  record of placing hundreds of students in their dream programs.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">2018</p>
                  <p className="text-sm text-text-gray mt-1">Founded</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-secondary">500+</p>
                  <p className="text-sm text-text-gray mt-1">Students Placed</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">50+</p>
                  <p className="text-sm text-text-gray mt-1">Partner Universities</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-secondary">95%</p>
                  <p className="text-sm text-text-gray mt-1">Visa Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-border">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-3">Our Mission</h3>
              <p className="text-text-gray leading-relaxed">
                To empower Bangladeshi students with expert guidance, comprehensive support,
                and transparent information to successfully pursue higher education at leading
                UK universities, unlocking their full potential for global careers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-border">
              <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Eye className="text-secondary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-3">Our Vision</h3>
              <p className="text-text-gray leading-relaxed">
                To become Bangladesh&apos;s most trusted and impactful education consultancy,
                transforming lives by making world-class UK education accessible to every
                talented Bangladeshi student, regardless of their background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Our Core Values</h2>
            <div className="section-divider mx-auto mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-text-dark mb-2">{value.title}</h3>
                <p className="text-text-gray text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Meet Our Team</h2>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="text-text-gray max-w-2xl mx-auto">
              Our experienced team of education professionals is dedicated to making your
              UK study dream a reality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl p-6 text-center card-hover border border-border"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-text-dark">{member.name}</h3>
                <p className="text-sm text-secondary font-medium mb-2">{member.role}</p>
                <p className="text-text-gray text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
