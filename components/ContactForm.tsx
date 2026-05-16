"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  companyUrl: string;
  region: string;
  services: string[];
  projectDetails: string;
  devOpsSpecialist: string;
}

const serviceOptions = [
  "Remote IT Resources",
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "AR/VR",
  "Gaming",
  "Cyber Security",
  "Other IT Services",
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyUrl: "",
    region: "",
    services: [],
    projectDetails: "",
    devOpsSpecialist: "",
  });

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      companyUrl: "",
      region: "",
      services: [],
      projectDetails: "",
      devOpsSpecialist: "",
    });
    setAttachedFile(null);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name*
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number*
            </label>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-sm text-gray-600">+1</span>
              </div>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all"
                placeholder="(555) 555-0123"
              />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name*
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all"
              placeholder="Your company name"
            />
          </div>

          {/* Company URL */}
          <div>
            <label htmlFor="companyUrl" className="block text-sm font-medium text-gray-700 mb-2">
              Company URL
            </label>
            <input
              type="url"
              id="companyUrl"
              name="companyUrl"
              value={formData.companyUrl}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all"
              placeholder="https://yourcompany.com"
            />
          </div>

          {/* Region */}
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
              Region*
            </label>
            <div className="relative">
              <select
                id="region"
                name="region"
                required
                value={formData.region}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="">Select Region</option>
                <option value="north-america">North America</option>
                <option value="south-america">South America</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="africa">Africa</option>
                <option value="oceania">Oceania</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Services you are looking for*
            </label>
            <div className="space-y-2">
              {serviceOptions.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-4 h-4 text-[#00bcd4] border-gray-300 rounded focus:ring-[#00bcd4] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
              Project Details*
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              required
              value={formData.projectDetails}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* DevOps Specialist */}
          <div>
            <label htmlFor="devOpsSpecialist" className="block text-sm font-medium text-gray-700 mb-2">
              I am looking for a pair of DevOps?*
            </label>
            <div className="relative">
              <select
                id="devOpsSpecialist"
                name="devOpsSpecialist"
                required
                value={formData.devOpsSpecialist}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="">Please Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="maybe">Maybe / Not Sure</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Attach File (Optional)
            </label>
            <div className="relative">
              <input
                type="file"
                id="fileUpload"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt"
              />
              <label
                htmlFor="fileUpload"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <Upload className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {attachedFile ? attachedFile.name : "Choose a file"}
                </span>
              </label>
              {attachedFile && (
                <button
                  type="button"
                  onClick={() => setAttachedFile(null)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "w-full py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-300",
              "bg-gradient-to-r from-[#00bcd4] to-[#00acc1]",
              "hover:shadow-xl hover:from-[#00acc1] hover:to-[#0097a7]",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "flex items-center justify-center gap-2"
            )}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
