"use client";

import React, { useState } from "react";
import { SiteSettings } from "@/lib/types/wordpress";
import { Button } from "../ui/Button";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

interface ContactFormProps {
  settings: SiteSettings;
  initialProduct?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ settings, initialProduct = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: initialProduct,
    location: "Udaipur",
    width: "",
    height: "",
    message: "",
    timeframe: "Immediate"
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Simulate submission to API
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const whatsappNum = settings.whatsapp_number || "918290060885";
  const whatsappMsg = encodeURIComponent(
    `Hello HRM Industries, I want a quote:\n\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone}\nRequirement: ${formData.product || 'Custom Metal Fabrication'}\nLocation: ${formData.location}\nDimensions: ${formData.width || '-'} W x ${formData.height || '-'} H\nDetails: ${formData.message || 'Please contact me.'}`
  );
  const directWhatsappUrl = `https://wa.me/${whatsappNum}?text=${whatsappMsg}`;

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-emerald-900">Enquiry Received!</h3>
        <p className="text-emerald-700 text-sm max-w-md mx-auto">
          {settings.form_success_message || "Thank you for reaching out to HRM Industries. Our technical team will inspect your requirements and get back to you within 24 hours."}
        </p>

        <div className="pt-4 flex justify-center">
          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-md hover:bg-[#1EBE57] transition-all"
          >
            <span>Send Copy to WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Architect Rajesh"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hrm-orange/50 focus:border-hrm-orange text-sm bg-slate-50 font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 8290060885"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hrm-orange/50 focus:border-hrm-orange text-sm bg-slate-50 font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="yourname@domain.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hrm-orange/50 focus:border-hrm-orange text-sm bg-slate-50 font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Project Location *
          </label>
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Fatehpura, Udaipur"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hrm-orange/50 focus:border-hrm-orange text-sm bg-slate-50 font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Requirement Type
          </label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hrm-orange/50 focus:border-hrm-orange text-sm bg-slate-50 font-medium"
          >
            <option value="">Select Requirement</option>
            <option value="Architectural Iron Gates">Architectural Iron Gates</option>
            <option value="Balcony & Stair Railings">Balcony & Stair Railings</option>
            <option value="Metal Door Frames & Doors">Metal Door Frames & Doors</option>
            <option value="Window Security Grills">Window Security Grills</option>
            <option value="Custom Metal Staircase">Custom Metal Staircase</option>
            <option value="Parking Sheds & Canopies">Parking Sheds & Canopies</option>
            <option value="Metal Furniture & Frames">Metal Furniture & Frames</option>
            <option value="Custom Structural Fabrication">Custom Structural Fabrication</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Opening Width (ft / mm)
          </label>
          <input
            type="text"
            name="width"
            value={formData.width}
            onChange={handleChange}
            placeholder="e.g. 12 ft"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hrm-orange/50 focus:border-hrm-orange text-sm bg-slate-50 font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Opening Height (ft / mm)
          </label>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="e.g. 7 ft"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hrm-orange/50 focus:border-hrm-orange text-sm bg-slate-50 font-medium"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
          Project Details & Notes
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your design preference, material choice (MS, GI, SS), finish preference, or site access details..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hrm-orange/50 focus:border-hrm-orange text-sm bg-slate-50 font-medium resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={loading}
          className="w-full sm:w-auto"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Technical Enquiry</span>
            </>
          )}
        </Button>

        <a
          href={directWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-[#25D366] hover:underline inline-flex items-center gap-1"
        >
          <span>Prefer Instant WhatsApp? Click Here</span>
        </a>
      </div>
    </form>
  );
};
