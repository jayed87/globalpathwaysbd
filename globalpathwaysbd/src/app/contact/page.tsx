"use client";

import { useState } from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    interestedIn: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Ready to start your UK education journey? Book a free consultation or 
              send us your questions. Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark">Office Address</h3>
                    <p className="text-text-gray text-sm mt-1">
                      House #XX, Road #XX<br />
                      Dhanmondi, Dhaka 1205<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark">Phone</h3>
                    <p className="text-text-gray text-sm mt-1">
                      <a href="tel:+8801XXXXXXXXX" className="hover:text-primary transition-colors">
                        +880 1XXX-XXXXXX
                      </a>
                      <br />
                      <a href="tel:+8801XXXXXXXXX" className="hover:text-primary transition-colors">
                        +880 1XXX-XXXXXX
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark">Email</h3>
                    <p className="text-text-gray text-sm mt-1">
                      <a href="mailto:info@globalpathwaysbd.com" className="hover:text-primary transition-colors">
                        info@globalpathwaysbd.com
                      </a>
                      <br />
                      <a href="mailto:admissions@globalpathwaysbd.com" className="hover:text-primary transition-colors">
                        admissions@globalpathwaysbd.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark">Office Hours</h3>
                    <p className="text-text-gray text-sm mt-1">
                      Saturday - Thursday: 10:00 AM - 7:00 PM<br />
                      Friday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-semibold text-text-dark mb-3">Connect With Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="text-primary" size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-green-50 hover:bg-green-100 p-3 rounded-lg transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="text-green-600" size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-bg-light rounded-xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-text-dark mb-2">
                  Book a Free Consultation
                </h2>
                <p className="text-text-gray text-sm mb-6">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-green-600" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-text-dark mb-2">
                      Thank You!
                    </h3>
                    <p className="text-text-gray">
                      We&apos;ve received your inquiry. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-border bg-white text-text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-border bg-white text-text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-border bg-white text-text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="+880 1XXX-XXXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          Current Education Level
                        </label>
                        <select
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-border bg-white text-text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        >
                          <option value="">Select your level</option>
                          <option value="hsc">HSC / A-Level Completed</option>
                          <option value="bachelor">Bachelor&apos;s Degree</option>
                          <option value="masters">Master&apos;s Degree</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-1">
                        What are you interested in?
                      </label>
                      <select
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-white text-text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="university-selection">University Selection</option>
                        <option value="application-support">Application Support</option>
                        <option value="visa-guidance">Visa Guidance</option>
                        <option value="ielts-prep">IELTS Preparation</option>
                        <option value="scholarship">Scholarship Assistance</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-1">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-white text-text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                        placeholder="Tell us about your study goals, preferred courses, or any questions you have..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary-light text-white font-semibold py-3 rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Submit Inquiry
                    </button>
                    <p className="text-xs text-text-light text-center">
                      By submitting this form, you agree to be contacted by GlobalPathwaysBD 
                      regarding your inquiry. We respect your privacy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl h-64 flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 text-primary" size={40} />
              <p className="text-text-gray font-medium">Dhanmondi, Dhaka 1205, Bangladesh</p>
              <p className="text-text-light text-sm mt-1">
                Google Map integration will be added here
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
