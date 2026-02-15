import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Globe, GraduationCap, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "UK Universities",
  description:
    "Explore top UK universities partnered with GlobalPathwaysBD — Russell Group, post-1992, and specialist institutions across England, Scotland, Wales, and Northern Ireland.",
};

const universities = [
  {
    name: "University of Oxford",
    location: "Oxford, England",
    ranking: "#1 in UK",
    type: "Russell Group",
    popular: ["PPE", "Computer Science", "Medicine", "Law", "Engineering"],
    tuition: "£28,000 - £44,000/year",
    description: "One of the world's oldest and most prestigious universities, known for its tutorial teaching system and groundbreaking research.",
    website: "https://www.ox.ac.uk",
  },
  {
    name: "University of Cambridge",
    location: "Cambridge, England",
    ranking: "#2 in UK",
    type: "Russell Group",
    popular: ["Natural Sciences", "Engineering", "Mathematics", "Economics", "Law"],
    tuition: "£24,000 - £63,000/year",
    description: "A world-leading university with a 800+ year history of academic excellence and innovation across all disciplines.",
    website: "https://www.cam.ac.uk",
  },
  {
    name: "Imperial College London",
    location: "London, England",
    ranking: "#3 in UK",
    type: "Russell Group",
    popular: ["Engineering", "Medicine", "Business", "Computing", "Life Sciences"],
    tuition: "£35,000 - £46,000/year",
    description: "A world-class university focused on science, engineering, medicine, and business with strong industry connections.",
    website: "https://www.imperial.ac.uk",
  },
  {
    name: "UCL (University College London)",
    location: "London, England",
    ranking: "#4 in UK",
    type: "Russell Group",
    popular: ["Architecture", "Education", "Law", "Medicine", "Engineering"],
    tuition: "£23,000 - £38,000/year",
    description: "London's leading multidisciplinary university, consistently ranked among the top universities in the world.",
    website: "https://www.ucl.ac.uk",
  },
  {
    name: "University of Edinburgh",
    location: "Edinburgh, Scotland",
    ranking: "#5 in UK",
    type: "Russell Group",
    popular: ["Medicine", "Informatics", "Business", "Law", "Veterinary Science"],
    tuition: "£22,000 - £35,000/year",
    description: "Scotland's top university with a rich heritage and world-class research across humanities, sciences, and engineering.",
    website: "https://www.ed.ac.uk",
  },
  {
    name: "University of Manchester",
    location: "Manchester, England",
    ranking: "#6 in UK",
    type: "Russell Group",
    popular: ["Business", "Engineering", "Computer Science", "Pharmacy", "Law"],
    tuition: "£20,000 - £30,000/year",
    description: "One of the UK's largest and most popular universities, known for research excellence and employability of graduates.",
    website: "https://www.manchester.ac.uk",
  },
  {
    name: "King's College London",
    location: "London, England",
    ranking: "#7 in UK",
    type: "Russell Group",
    popular: ["Law", "Medicine", "Nursing", "Political Science", "Dentistry"],
    tuition: "£21,000 - £38,000/year",
    description: "One of England's oldest universities located in the heart of London, with world-leading research in health and humanities.",
    website: "https://www.kcl.ac.uk",
  },
  {
    name: "University of Leeds",
    location: "Leeds, England",
    ranking: "#10 in UK",
    type: "Russell Group",
    popular: ["Business", "Engineering", "Media Studies", "Languages", "Medicine"],
    tuition: "£19,000 - £27,000/year",
    description: "A top research university in the heart of England, known for outstanding student experience and strong graduate employability.",
    website: "https://www.leeds.ac.uk",
  },
  {
    name: "University of Birmingham",
    location: "Birmingham, England",
    ranking: "#12 in UK",
    type: "Russell Group",
    popular: ["Business", "Engineering", "Education", "Computer Science", "Dentistry"],
    tuition: "£18,000 - £25,000/year",
    description: "A red-brick university with beautiful campus and excellent facilities, popular with Bangladeshi students for decades.",
    website: "https://www.birmingham.ac.uk",
  },
  {
    name: "University of Nottingham",
    location: "Nottingham, England",
    ranking: "#14 in UK",
    type: "Russell Group",
    popular: ["Pharmacy", "Business", "Engineering", "Law", "Education"],
    tuition: "£18,000 - £26,000/year",
    description: "A globally recognized university with one of the most beautiful campuses in the UK and strong international community.",
    website: "https://www.nottingham.ac.uk",
  },
  {
    name: "Coventry University",
    location: "Coventry, England",
    ranking: "Top 20 Modern Uni",
    type: "Post-1992",
    popular: ["Business", "Engineering", "Computing", "Health", "Design"],
    tuition: "£15,000 - £19,000/year",
    description: "A modern university known for practical, career-focused education and strong industry links. Very popular with Bangladeshi students.",
    website: "https://www.coventry.ac.uk",
  },
  {
    name: "University of the West of England",
    location: "Bristol, England",
    ranking: "Top 30 Modern Uni",
    type: "Post-1992",
    popular: ["Business", "Engineering", "Health", "Architecture", "Law"],
    tuition: "£14,000 - £16,000/year",
    description: "A large modern university with excellent facilities and strong employment outcomes, located in the vibrant city of Bristol.",
    website: "https://www.uwe.ac.uk",
  },
];

export default function UniversitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">UK Universities</h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Explore our partner universities across the UK. From world-renowned Russell Group 
              institutions to modern universities with excellent career outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* University Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Our Partner Universities</h2>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="text-text-gray max-w-2xl mx-auto">
              We partner with 50+ UK universities to give you the widest range of options.
              Here are some of our featured partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {universities.map((uni) => (
              <div
                key={uni.name}
                className="bg-white rounded-xl p-6 card-hover border border-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-text-dark">{uni.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-sm text-text-gray">
                        <MapPin size={14} /> {uni.location}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-primary font-medium">
                        <GraduationCap size={14} /> {uni.ranking}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    uni.type === "Russell Group"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/20 text-accent"
                  }`}>
                    {uni.type}
                  </span>
                </div>
                <p className="text-text-gray text-sm mb-3 leading-relaxed">{uni.description}</p>
                <div className="mb-3">
                  <p className="text-xs font-medium text-text-light mb-1">Popular Courses:</p>
                  <div className="flex flex-wrap gap-1">
                    {uni.popular.map((course) => (
                      <span key={course} className="bg-bg-light text-text-dark text-xs px-2 py-1 rounded">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-3">
                  <span className="text-sm text-secondary font-medium">{uni.tuition}</span>
                  <a
                    href={uni.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:text-primary-light transition-colors"
                  >
                    Visit Website <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Types */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-2 text-center">Types of UK Universities</h2>
          <div className="section-divider mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-border">
              <Globe className="text-primary mb-3" size={28} />
              <h3 className="text-lg font-semibold text-text-dark mb-2">Russell Group</h3>
              <p className="text-text-gray text-sm leading-relaxed">
                24 world-class, research-intensive universities including Oxford, Cambridge, 
                Imperial, and UCL. Known for academic excellence and global reputation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <GraduationCap className="text-secondary mb-3" size={28} />
              <h3 className="text-lg font-semibold text-text-dark mb-2">Red Brick Universities</h3>
              <p className="text-text-gray text-sm leading-relaxed">
                Six prestigious civic universities founded in the Victorian era — Birmingham, 
                Bristol, Leeds, Liverpool, Manchester, and Sheffield.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <GraduationCap className="text-accent mb-3" size={28} />
              <h3 className="text-lg font-semibold text-text-dark mb-2">Post-1992 Universities</h3>
              <p className="text-text-gray text-sm leading-relaxed">
                Modern universities with career-focused programs, strong industry links, and 
                often more affordable tuition. Excellent for practical learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Not Sure Which University Is Right for You?
          </h2>
          <p className="text-text-gray max-w-xl mx-auto mb-8">
            Our expert counselors will analyze your profile and recommend the best-fit 
            universities based on your academic background, career goals, and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Get Personalized Recommendations <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
