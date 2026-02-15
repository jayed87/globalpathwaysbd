import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Study in UK", href: "/study-in-uk" },
  { name: "Universities", href: "/universities" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "University Selection",
  "Application Support",
  "Visa Guidance",
  "IELTS Preparation",
  "Scholarship Assistance",
  "Pre-departure Briefing",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* CTA Section */}
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Start Your UK Education Journey?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Book a free consultation with our expert counselors today and take the first step towards your dream university.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/20 rounded-lg p-2">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <span className="text-lg font-bold">GlobalPathways</span>
                <span className="text-lg font-bold text-accent-light">BD</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              GlobalPathwaysBD is a leading education consultancy in Bangladesh, 
              dedicated to helping students achieve their dream of studying at 
              top UK universities.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-accent-light text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-white/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent-light" />
                <p className="text-white/80 text-sm">
                  House #XX, Road #XX, Dhanmondi,<br />
                  Dhaka 1205, Bangladesh
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-accent-light" />
                <a href="tel:+8801XXXXXXXXX" className="text-white/80 hover:text-white text-sm transition-colors">
                  +880 1XXX-XXXXXX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-accent-light" />
                <a href="mailto:info@globalpathwaysbd.com" className="text-white/80 hover:text-white text-sm transition-colors">
                  info@globalpathwaysbd.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-white/60">
          <p>© {new Date().getFullYear()} GlobalPathwaysBD. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
