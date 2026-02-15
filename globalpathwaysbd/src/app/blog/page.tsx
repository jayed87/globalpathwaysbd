import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest tips, guides, and news about studying in the UK for Bangladeshi students — IELTS tips, visa guides, university updates, and more.",
};

const blogPosts = [
  {
    slug: "complete-guide-uk-student-visa-2026",
    title: "Complete Guide to UK Student Visa 2026 for Bangladeshi Students",
    excerpt:
      "Everything you need to know about applying for a UK Student Visa in 2026 — documents, financial requirements, CAS, biometrics, and common mistakes to avoid.",
    category: "Visa Guide",
    date: "February 10, 2026",
    readTime: "8 min read",
    author: "Rafiqul Islam",
  },
  {
    slug: "top-10-uk-universities-bangladeshi-students",
    title: "Top 10 UK Universities for Bangladeshi Students in 2026",
    excerpt:
      "Discover the best UK universities for Bangladeshi students based on rankings, affordability, Bangladeshi community, and post-graduation job prospects.",
    category: "Universities",
    date: "February 5, 2026",
    readTime: "10 min read",
    author: "Fatema Begum",
  },
  {
    slug: "ielts-preparation-tips-band-7",
    title: "IELTS Preparation: How to Score Band 7.0+ (From a Bangladeshi Perspective)",
    excerpt:
      "Practical tips and strategies to achieve IELTS Band 7.0 or above. Covers all four modules with specific advice for Bangladeshi test-takers.",
    category: "IELTS",
    date: "January 28, 2026",
    readTime: "12 min read",
    author: "Sabrina Mostafa",
  },
  {
    slug: "chevening-scholarship-application-guide",
    title: "How to Apply for Chevening Scholarship: A Complete Guide",
    excerpt:
      "Step-by-step guide to applying for the Chevening Scholarship — eligibility criteria, essay writing tips, interview preparation, and timeline.",
    category: "Scholarships",
    date: "January 20, 2026",
    readTime: "9 min read",
    author: "Dr. Kamal Hossain",
  },
  {
    slug: "cost-of-living-uk-bangladeshi-students",
    title: "Cost of Living in the UK: A Guide for Bangladeshi Students (2026)",
    excerpt:
      "Detailed breakdown of monthly expenses for Bangladeshi students in the UK — rent, food, transport, and money-saving tips for different UK cities.",
    category: "Student Life",
    date: "January 15, 2026",
    readTime: "7 min read",
    author: "Fatema Begum",
  },
  {
    slug: "personal-statement-writing-tips",
    title: "How to Write a Winning Personal Statement for UK Universities",
    excerpt:
      "Expert tips on crafting a compelling personal statement that stands out in the UCAS application process. Includes dos, don'ts, and real examples.",
    category: "Application",
    date: "January 8, 2026",
    readTime: "6 min read",
    author: "Fatema Begum",
  },
];

const categories = ["All", "Visa Guide", "Universities", "IELTS", "Scholarships", "Student Life", "Application"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Resources</h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Expert guides, tips, and updates to help you navigate your UK education 
              journey. Written by our team of education professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto py-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-primary text-white"
                    : "bg-bg-light text-text-gray hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden card-hover border border-border"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-48 flex items-center justify-center">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-text-light mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-text-light">
                      <User size={12} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-primary font-medium hover:text-primary-light transition-colors cursor-pointer">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="text-center mt-12">
            <p className="text-text-light text-sm">
              More articles coming soon! Subscribe to stay updated.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated</h2>
            <p className="text-white/90 max-w-xl mx-auto mb-6">
              Get the latest UK education news, scholarship deadlines, and visa updates 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-text-dark outline-none"
              />
              <button className="bg-secondary hover:bg-secondary-light px-6 py-3 rounded-md font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
