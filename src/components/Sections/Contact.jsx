import { motion } from 'framer-motion';
import { Mail, Phone, Download, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

// Local SVG icons since lucide-react in this environment is an older version that lacks these brands.
const GithubIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const { socials, name } = portfolioData.personalInfo;

  return (
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="radial-glow bottom-[-10%] left-1/2 -translate-x-1/2 bg-[radial-gradient(circle,rgba(0,120,212,0.08)_0%,rgba(5,8,17,0)_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Get In <span className="bg-gradient-to-r from-awsOrange to-azureBlue bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lightGray max-w-xl mx-auto text-sm sm:text-base">
            I am currently open to Cloud and DevOps engineering roles. Feel free to reach out via email, phone, or connect on social media!
          </p>
        </motion.div>

        {/* Contact info card block */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-cardNavy/50 border border-white/5 rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-black/30 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
              Let's deploy something amazing!
            </h3>
            
            <p className="text-lightGray max-w-md mx-auto text-sm sm:text-base">
              Have an open cloud engineering position, SRE role, or a DevOps collaboration idea? I'd love to hear from you.
            </p>

            {/* Direct contact info grid (Email + Phone) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-2">
              <a 
                href={socials.email}
                className="flex items-center gap-3 px-5 py-3.5 bg-white/[0.02] border border-white/5 hover:border-awsOrange/30 hover:bg-white/[0.04] rounded-2xl text-left transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-awsOrange/10 flex items-center justify-center text-awsOrange flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-textDim uppercase block">Email me</span>
                  <span className="text-xs sm:text-sm text-white font-medium truncate block">{socials.emailAddress}</span>
                </div>
              </a>

              <a 
                href={socials.phoneDial}
                className="flex items-center gap-3 px-5 py-3.5 bg-white/[0.02] border border-white/5 hover:border-azureBlue/30 hover:bg-white/[0.04] rounded-2xl text-left transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-azureBlue/10 flex items-center justify-center text-azureBlue flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-textDim uppercase block">Call me</span>
                  <span className="text-xs sm:text-sm text-white font-medium block">{socials.phone}</span>
                </div>
              </a>
            </div>

            {/* Social profiles and Resume download action row */}
            <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-white/5">
              <a 
                href={portfolioData.personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-awsOrange to-azureBlue hover:from-awsOrange/90 hover:to-azureBlue/90 text-white font-semibold font-heading text-xs transition-all duration-300 shadow-md"
              >
                Download Resume <Download size={14} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold font-heading text-xs transition-all duration-200"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold font-heading text-xs transition-all duration-200"
              >
                <GithubIcon size={16} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer copyright area */}
        <div className="mt-20 text-center space-y-3">
          <div className="flex justify-center items-center gap-2 font-mono text-[10px] text-textDim">
            <Terminal size={14} className="text-awsOrange" />
            <span>DESIGNED & DEVELOPED BY {name.toUpperCase()}</span>
          </div>
          <p className="text-[11px] text-textDim font-medium">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
