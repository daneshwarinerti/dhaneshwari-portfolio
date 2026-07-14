import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight, Phone } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import TypingEffect from '../TypingEffect';

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

export default function Hero() {
  const { name, title, tagline, resumeUrl, profilePhotoUrl, socials } = portfolioData.personalInfo;

  const typingPhrases = [
    "AWS Cloud Deployments",
    "DevOps Automation",
    "Infrastructure as Code",
    "Docker Containerization",
    "Kubernetes Orchestration"
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-16"
    >
      {/* Background Radial Glow */}
      <div className="radial-glow top-[-10%] left-[-10%] bg-[radial-gradient(circle,rgba(255,153,0,0.08)_0%,rgba(5,8,17,0)_70%)]" />
      <div className="radial-glow bottom-[10%] right-[-10%] bg-[radial-gradient(circle,rgba(0,120,212,0.08)_0%,rgba(5,8,17,0)_70%)]" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Column (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="md:col-span-7 space-y-6 text-left"
          >
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-awsOrange/10 border border-awsOrange/20 rounded-full text-awsOrange text-xs font-mono font-semibold"
            >
              <span className="w-1.5 h-1.5 bg-awsOrange rounded-full animate-pulse" />
              Cloud & DevOps Specialist
            </motion.div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-none">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-white via-lightGray to-textDim bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            {/* Subtitle / Typing loop */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-white">
              I specialize in <br className="sm:hidden" />
              <TypingEffect words={typingPhrases} />
            </h2>

            {/* Tagline Paragraph */}
            <p className="text-lightGray text-base sm:text-lg max-w-xl">
              {tagline}
            </p>

            {/* Actions Bar (Three Buttons: View Projects, Resume, Contact) */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-awsOrange to-azureBlue hover:from-awsOrange/90 hover:to-azureBlue/90 text-white font-semibold font-heading text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-awsOrange/10"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a 
                href={resumeUrl} 
                download 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold font-heading text-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Download Resume <Download size={16} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-azureBlue/10 border border-azureBlue/20 hover:bg-azureBlue/20 hover:border-azureBlue/30 text-azureBlue font-semibold font-heading text-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Contact Me <Mail size={16} />
              </a>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-[10px] font-mono text-textDim tracking-widest uppercase">
                CONNECT //
              </span>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-lightGray hover:text-awsOrange transition-colors duration-200"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-lightGray hover:text-azureBlue transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={socials.email}
                className="text-lightGray hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Hero Right Visual Column - Circular profile layout (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="md:col-span-5 flex justify-center items-center relative"
          >
            {/* Glowing circular container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-awsOrange/20 shadow-[0_0_50px_rgba(255,153,0,0.15)] flex justify-center items-center transition-all duration-500 hover:border-awsOrange/40 hover:shadow-[0_0_60px_rgba(255,153,0,0.25)]">
              
              {/* Profile Image container */}
              <div className="w-[93%] h-[93%] rounded-full overflow-hidden bg-cardNavy border border-white/5 relative">
                <img
                  src={profilePhotoUrl}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Orbiting Tech Icons */}
              {/* AWS */}
              <div className="floating-icon absolute top-[-10px] left-[10%] w-11 h-11 bg-cardNavy/90 border border-awsOrange/30 rounded-xl flex items-center justify-center shadow-md shadow-awsOrange/20">
                <svg viewBox="0 0 256 154" width="22" height="22" fill="var(--color-aws-orange)">
                  <path d="M113.8 28.5c-4 5.9-4.8 15-4.8 15s1 2.3 2.1 1.9c4.2-1.7 15.6-7 19.3-8.8 4.2-2.1 4.5-5.9 4.5-5.9s-.4-2.8-3.4-3c-5-.2-12.8.2-17.7 10.8zM245.9 83.2c-15-18.4-49.8-15.6-49.8-15.6s-1.8 1.8-.7 2.7c3.3 2.8 17.5 13.9 22.3 17 5.6 3.6 7.6 1.4 7.6 1.4s4-3.4 3.7-8.1c-.5-8.4-1.2-13.8-3.1-17.4M12.9 83.2C27.9 64.8 62.7 67.6 62.7 67.6s1.8 1.8.7 2.7c-3.3 2.8-17.5 13.9-22.3 17-5.6 3.6-7.6 1.4-7.6 1.4s-4-3.4-3.7-8.1c.5-8.4 1.2-13.8 3.1-17.4" />
                  <path d="M128 0C57.3 0 0 35.8 0 80c0 33.4 33 61.6 81.4 73.7 4 .9 6.2-2.9 4.1-6.1C55.6 103 89.2 88.5 101.4 83.2c16-7 37.2-11.2 53.2-11.2 16 0 37.2 4.2 53.2 11.2 12.2 5.3 45.8 19.8 15.9 64.5-2.1 3.2.1 7 4.1 6.1 48.4-12.1 81.4-40.3 81.4-73.7C256 35.8 198.7 0 128 0z" />
                </svg>
              </div>

              {/* Docker */}
              <div className="floating-icon absolute top-[30%] right-[-15px] w-11 h-11 bg-cardNavy/90 border border-azureBlue/30 rounded-xl flex items-center justify-center shadow-md shadow-azureBlue/20" style={{ animationDelay: '1.5s' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--color-azure-blue)">
                  <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.99c0-.102-.084-.186-.186-.186h-2.119c-.103 0-.186.084-.186.186v1.902c0 .102.083.186.186.186zM11.261 11.078h2.119c.102 0 .186-.083.186-.185V8.99c0-.102-.084-.186-.186-.186h-2.119c-.103 0-.186.084-.186.186v1.902c0 .102.083.186.186.186zM11.261 8.402h2.119c.102 0 .186-.083.186-.186V6.315c0-.103-.084-.186-.186-.186h-2.119c-.103 0-.186.083-.186.186v1.902c0 .103.083.186.186.186zM8.539 11.078h2.119c.103 0 .186-.083.186-.185V8.99c0-.102-.083-.186-.186-.186H8.539c-.102 0-.186.084-.186.186v1.902c0 .102.084.186.186.186zM8.539 8.402h2.119c.103 0 .186-.083.186-.186V6.315c0-.103-.083-.186-.186-.186H8.539c-.102 0-.186.083-.186.186v1.902c0 .103.084.186.186.186zM5.817 11.078H7.936c.102 0 .186-.083.186-.185V8.99c0-.102-.084-.186-.186-.186H5.817c-.103 0-.186.084-.186.186v1.902c0 .102.083.186.186.186zM2.85 11.078h2.119c.103 0 .186-.083.186-.185V8.99c0-.102-.083-.186-.186-.186H2.85c-.102 0-.186.084-.186.186v1.902c0 .102.084.186.186.186zM13.983 8.402h2.119c.102 0 .186-.083.186-.186V6.315c0-.103-.084-.186-.186-.186h-2.119c-.103 0-.186.083-.186.186v1.902c0 .103.083.186.186.186zM16.705 8.402h2.119c.103 0 .186-.083.186-.186V6.315c0-.103-.083-.186-.186-.186h-2.119c-.102 0-.186.083-.186.186v1.902c0 .103.084.186.186.186zM22.35 9.42c-.08-.06-.185-.094-.282-.094-.482 0-.877.395-.877.876V11.53c0 .24-.047.472-.132.686-.195.49-.663.818-1.218.818-.088 0-.174-.01-.258-.027-2.316-.484-4.63-.484-6.945 0-.083.018-.17.027-.258.027-.556 0-1.023-.328-1.218-.817-.086-.215-.133-.448-.133-.688V9.227c0-.21-.07-.406-.193-.564-.176-.226-.453-.37-.764-.37H9.228c-.31 0-.588.143-.763.37-.123.158-.193.354-.193.564V11.53c0 .354-.07.697-.197 1.015-.287.722-.976 1.205-1.79 1.205-.13 0-.256-.013-.38-.038-1.082-.224-2.164-.224-3.245 0-.125.025-.25.038-.38.038-.815 0-1.503-.483-1.79-1.205-.128-.318-.197-.66-.197-1.015V7.473c0-.127-.103-.23-.23-.23H.23c-.127 0-.23.103-.23.23v4.444c0 3.01 2.378 5.617 5.4 5.92 2.127.214 4.254.214 6.38 0 3.023-.303 5.4-2.91 5.4-5.92v-.713c.214-.236.52-.382.86-.382.268 0 .51.09.704.24l.006.004c1.173.91 2.32 1.34 3.738 1.34.12 0 .238-.003.355-.008 1.135-.05 2.213-.67 2.822-1.636.574-.91.73-2.02.433-3.072z" />
                </svg>
              </div>

              {/* Kubernetes */}
              <div className="floating-icon absolute bottom-[-10px] right-[10%] w-11 h-11 bg-cardNavy/90 border border-azureBlue/30 rounded-xl flex items-center justify-center shadow-md shadow-azureBlue/20" style={{ animationDelay: '3s' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--color-azure-blue)">
                  <path d="M12.001 0L2.148 4.223v10.554L12.001 24l9.851-9.223V4.223L12.001 0zm0 3.073l6.772 2.902v4.869l-6.772-2.902V3.073zm-6.772 7.771V5.975l6.772-2.902v4.869l-6.772 2.902zm0 1.378l6.772 2.902v4.869l-6.772-2.902v-4.869zm8.15 2.902l6.772-2.902v4.869l-6.772 2.902v-4.869z" />
                </svg>
              </div>

              {/* Linux */}
              <div className="floating-icon absolute top-[30%] left-[-15px] w-11 h-11 bg-cardNavy/90 border border-awsOrange/30 rounded-xl flex items-center justify-center shadow-md shadow-awsOrange/20" style={{ animationDelay: '4.5s' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--color-aws-orange)">
                  <path d="M12.003 0c-2.316 0-4.664.887-5.597 3.513-.715 2.016-.307 4.195.424 5.922-.646.602-1.442 1.374-1.954 2.234-1.47 2.47-1.127 5.163-.16 6.347.886 1.085 2.296 1.488 3.535 1.554.49.026.96-.038 1.428-.153 1.564 1.701 4.544 2.473 6.945 2.128 1.157-.166 2.378-.62 3.125-1.579.805-.975 1.258-2.617.55-4.526 1.01-1.393.992-2.997.23-4.528-.485-.976-1.285-1.782-1.977-2.355.772-1.758 1.2-3.953.532-5.952C18.15.887 14.32 0 12.003 0zm-.008 1.096c1.64 0 4.12.793 4.673 2.927.534 2.062-.224 4.168-.823 5.48-.396-.282-.823-.522-1.272-.71-.24-.1-.497-.184-.761-.252-.4-.103-.815-.157-1.23-.16-.957-.008-1.905.253-2.673.743-.59-1.238-.857-3.076-.41-4.78.435-1.66 1.31-3.248 2.502-3.248zm-1.895 8.163c.483.003.958.077 1.41.22.385.123.753.298 1.093.52-.39.117-.798.179-1.21.176-.908-.007-1.78-.328-2.457-.893.364-.016.732-.023 1.164-.023zm3.766.196c.237.078.468.176.685.292-.51.488-1.22.753-1.954.747-.532-.004-1.043-.153-1.484-.413.784-.428 1.748-.625 2.753-.626zm-4.995.836c.642.443 1.442.684 2.27.674 1.026-.013 1.986-.423 2.683-1.127.35.342.637.747.85 1.196a5.556 5.556 0 0 1 .496 2.457c0 1.242-.31 2.378-.858 3.123-.62.842-1.574 1.218-2.658 1.226-.944.007-1.823-.257-2.47-.745a5.556 5.556 0 0 1-1.01-2.905c0-1.428.423-2.776 1.054-3.87.202-.35.418-.686.643-.99l-.001.001z" />
                </svg>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
