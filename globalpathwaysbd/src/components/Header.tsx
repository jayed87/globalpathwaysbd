"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, Phone } from "lucide-react";
import clsx from "clsx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Study in UK", href: "/study-in-uk" },
  { name: "Universities", href: "/universities" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+8801XXXXXXXXX" className="flex items-center gap-1 hover:text-accent-light transition-colors">
              <Phone size={14} />
              <span>+880 1XXX-XXXXXX</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:info@globalpathwaysbd.com" className="hidden sm:inline hover:text-accent-light transition-colors">
              info@globalpathwaysbd.com
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs">
            <span>🇧🇩</span>
            <span>Helping Bangladeshi Students Reach Global Universities</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-lg p-2">
              <GraduationCap className="text-white" size={28} />
            </div>
            <div>
              <span className="text-xl font-bold text-primary">GlobalPathways</span>
              <span className="text-xl font-bold text-secondary">BD</span>
              <p className="text-[10px] text-text-gray -mt-1">Your Gateway to UK Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary text-white"
                    : "text-text-dark hover:bg-primary/10 hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 bg-secondary hover:bg-secondary-light text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-text-dark hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "text-text-dark hover:bg-primary/10"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 bg-secondary hover:bg-secondary-light text-white px-4 py-2 rounded-md text-sm font-medium text-center transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
