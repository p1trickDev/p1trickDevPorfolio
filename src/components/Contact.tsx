import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCopy,
  FiCheck,
} from "react-icons/fi";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real app, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }

    // Reset status after 3 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ztifuuu@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 px-4 relative z-10 overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute -top-24 -left-24 w-48 sm:w-64 h-48 sm:h-64 bg-[#646cff]/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-64 sm:w-80 h-64 sm:h-80 bg-purple-600/20 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#646cff]">Contact</span> Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Left column - Contact information */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-xl sm:rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 p-5 sm:p-8 h-full relative overflow-hidden group">
              {/* Animated corner accent */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#646cff]/30 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Let's Connect
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                I'm always open to discussing new projects, opportunities, or
                just talking about technology.
              </p>

              {/* Contact info items */}
              <div className="space-y-4 sm:space-y-6 relative z-10">
                <div
                  className="flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm group/item hover:bg-[#646cff]/10 transition-all duration-300"
                  onClick={copyEmail}
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-[#646cff]/20 text-[#646cff] group-hover/item:bg-[#646cff]/30 transition-colors">
                    <FiMail size={18} className="sm:text-[20px]" />
                  </div>
                  <div className="ml-3 sm:ml-4 flex-grow min-w-0">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-300">
                      Email
                    </h4>
                    <p className="text-sm sm:text-base text-white group-hover/item:text-[#646cff] transition-colors truncate">
                      ztifuuu@gmail.com
                    </p>
                  </div>
                  <button
                    className="ml-1 sm:ml-2 p-1.5 sm:p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={copyEmail}
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <FiCheck
                        size={14}
                        className="sm:text-[16px] text-green-400"
                      />
                    ) : (
                      <FiCopy
                        size={14}
                        className="sm:text-[16px] text-gray-400"
                      />
                    )}
                  </button>
                </div>

                <a
                  href="https://github.com/p1trickDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-[#646cff]/10 transition-all duration-300 group/item"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-[#646cff]/20 text-[#646cff] group-hover/item:bg-[#646cff]/30 transition-colors">
                    <FiGithub size={18} className="sm:text-[20px]" />
                  </div>
                  <div className="ml-3 sm:ml-4 min-w-0">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-300">
                      GitHub
                    </h4>
                    <p className="text-sm sm:text-base text-white group-hover/item:text-[#646cff] transition-colors truncate">
                      github.com/p1trickDev
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/fitzpatrick-managuit-b94b7b363/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-[#646cff]/10 transition-all duration-300 group/item"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-[#646cff]/20 text-[#646cff] group-hover/item:bg-[#646cff]/30 transition-colors">
                    <FiLinkedin size={18} className="sm:text-[20px]" />
                  </div>
                  <div className="ml-3 sm:ml-4 min-w-0">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-300">
                      LinkedIn
                    </h4>
                    <p className="text-sm sm:text-base text-white group-hover/item:text-[#646cff] transition-colors truncate">
                      linkedin.com/in/fitzpatrick-managuit
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column - Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="rounded-xl sm:rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 p-5 sm:p-8 relative overflow-hidden">
              {/* Form background accent */}
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-600/20 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#646cff]/10 rounded-full filter blur-xl opacity-70"></div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 relative z-10">
                Send a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium text-gray-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-black/30 border border-white/10",
                        "focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff]",
                        "text-sm sm:text-base text-gray-200 focus:outline-none transition-all"
                      )}
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-gray-300"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-black/30 border border-white/10",
                        "focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff]",
                        "text-sm sm:text-base text-gray-200 focus:outline-none transition-all"
                      )}
                      placeholder="JuanDelaCruz@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={cn(
                      "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-black/30 border border-white/10",
                      "focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff]",
                      "text-sm sm:text-base text-gray-200 focus:outline-none transition-all"
                    )}
                    placeholder="Your message here..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all",
                      "text-sm sm:text-base bg-gradient-to-r from-[#646cff] to-purple-600 hover:scale-105 text-white shadow-lg shadow-[#646cff]/20",
                      "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100",
                      "relative overflow-hidden group"
                    )}
                  >
                    {/* Button shine effect */}
                    <span className="absolute top-0 left-0 w-20 h-full bg-white/20 transform -skew-x-20 -translate-x-32 group-hover:translate-x-48 transition-transform duration-700" />

                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="text-[14px] sm:text-[16px]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Form submission status */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                      "p-3 sm:p-4 rounded-lg sm:rounded-xl mt-3 sm:mt-4 text-xs sm:text-sm flex items-center",
                      submitStatus === "success"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    )}
                  >
                    {submitStatus === "success"
                      ? "Thanks for your message! I'll get back to you soon."
                      : "Something went wrong. Please try again later."}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Social links - Bottom section */}
        <motion.div
          className="mt-8 sm:mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex gap-3 sm:gap-4 items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
            <span className="text-xs sm:text-sm text-gray-400">
              Follow me on:
            </span>
            <div className="h-4 sm:h-6 w-px bg-white/10"></div>
            <SocialIconLink
              icon={<FiGithub size={16} className="sm:text-[18px]" />}
              href="https://github.com/p1trickDev"
              label="GitHub"
            />
            <SocialIconLink
              icon={<FiLinkedin size={16} className="sm:text-[18px]" />}
              href="https://www.linkedin.com/in/fitzpatrick-managuit-b94b7b363/"
              label="LinkedIn"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Social icon link component
interface SocialIconLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

function SocialIconLink({ icon, href, label }: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-1.5 sm:p-2 hover:text-[#646cff] transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
