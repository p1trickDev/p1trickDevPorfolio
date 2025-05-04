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
      // Omit the parameter entirely if we don't need it
      setSubmitStatus("error");
      // Alternative approach could be: console.error("Error sending form");
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
    <section id="contact" className="py-24 px-4 relative z-10 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#646cff]/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#646cff]">Contact</span> Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left column - Contact information */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 p-8 h-full relative overflow-hidden group">
              {/* Animated corner accent */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#646cff]/30 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>

              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, opportunities, or
                just talking about technology.
              </p>

              {/* Contact info items */}
              <div className="space-y-6 relative z-10">
                <div
                  className="flex items-center p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm group/item hover:bg-[#646cff]/10 transition-all duration-300"
                  onClick={copyEmail}
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-[#646cff]/20 text-[#646cff] group-hover/item:bg-[#646cff]/30 transition-colors">
                    <FiMail size={20} />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h4 className="text-sm font-medium text-gray-300">Email</h4>
                    <p className="text-white group-hover/item:text-[#646cff] transition-colors">
                      ztifuuu@gmail.com
                    </p>
                  </div>
                  <button
                    className="ml-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={copyEmail}
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <FiCheck size={16} className="text-green-400" />
                    ) : (
                      <FiCopy size={16} className="text-gray-400" />
                    )}
                  </button>
                </div>

                <a
                  href="https://github.com/p1trickDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-[#646cff]/10 transition-all duration-300 group/item"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-[#646cff]/20 text-[#646cff] group-hover/item:bg-[#646cff]/30 transition-colors">
                    <FiGithub size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-300">
                      GitHub
                    </h4>
                    <p className="text-white group-hover/item:text-[#646cff] transition-colors">
                      https://github.com/p1trickDev
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/fitzpatrick-managuit-b94b7b363/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-[#646cff]/10 transition-all duration-300 group/item"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-[#646cff]/20 text-[#646cff] group-hover/item:bg-[#646cff]/30 transition-colors">
                    <FiLinkedin size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-300">
                      LinkedIn
                    </h4>
                    <p className="text-white group-hover/item:text-[#646cff] transition-colors">
                      https://www.linkedin.com/in/fitzpatrick-managuit-b94b7b363/
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
            <div className="rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 p-8 relative overflow-hidden">
              {/* Form background accent */}
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-600/20 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#646cff]/10 rounded-full filter blur-xl opacity-70"></div>

              <h3 className="text-2xl font-semibold mb-6 relative z-10">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300"
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
                        "w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10",
                        "focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff]",
                        "text-gray-200 focus:outline-none transition-all"
                      )}
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300"
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
                        "w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10",
                        "focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff]",
                        "text-gray-200 focus:outline-none transition-all"
                      )}
                      placeholder="JuanDelaCruz@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10",
                      "focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff]",
                      "text-gray-200 focus:outline-none transition-all"
                    )}
                    placeholder="Your message here..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all",
                      "bg-gradient-to-r from-[#646cff] to-purple-600 hover:scale-105 text-white shadow-lg shadow-[#646cff]/20",
                      "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100",
                      "relative overflow-hidden group"
                    )}
                  >
                    {/* Button shine effect */}
                    <span className="absolute top-0 left-0 w-20 h-full bg-white/20 transform -skew-x-20 -translate-x-32 group-hover:translate-x-48 transition-transform duration-700" />

                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                        <FiSend className="mr-1" />
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
                      "p-4 rounded-xl mt-4 text-sm flex items-center",
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
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex gap-4 items-center px-6 py-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
            <span className="text-sm text-gray-400">Follow me on:</span>
            <div className="h-6 w-px bg-white/10"></div>
            <SocialIconLink
              icon={<FiGithub size={18} />}
              href="https://github.com/p1trickDev"
              label="GitHub"
            />
            <SocialIconLink
              icon={<FiLinkedin size={18} />}
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
      className="p-2 hover:text-[#646cff] transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
