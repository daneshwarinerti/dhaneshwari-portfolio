import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24 relative">
      {/* Dynamic Background Glow */}
      <div className="radial-glow top-[25%] left-[50%] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,153,0,0.04)_0%,rgba(5,8,17,0)_70%)]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Professional <span className="bg-gradient-to-r from-awsOrange to-azureBlue bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lightGray max-w-xl mx-auto text-sm sm:text-base">
            Timeline of my hands-on internships detailing my roles in AWS cloud engineering, Linux administrations, and DevOps workflows.
          </p>
        </motion.div>

        {/* Experience Timeline Item */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -4,
                borderColor: 'rgba(255, 153, 0, 0.2)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
              }}
              className="bg-cardNavy/50 border border-white/5 rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/35 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative accent glow border on top */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-awsOrange/50 to-azureBlue/50" />

              {/* Card Header Section */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-6">
                <div className="flex items-center gap-4">
                  {/* Black Logo Container for Infobell Brand */}
                  {exp.companyLogo && (
                    <div className="w-[90px] h-[90px] bg-[#000000] rounded-[20px] flex items-center justify-center flex-shrink-0">
                      <img 
                        src={exp.companyLogo} 
                        alt={exp.company} 
                        className="w-[52px] h-[52px] object-contain translate-x-[7px]"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-0.5">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-lightGray">
                      <span>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-white/20">•</span>
                          <span className="text-xs text-lightGray/60 flex items-center gap-1 font-normal">
                            <span>📍</span> {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-awsOrange self-start md:self-center shadow-inner whitespace-nowrap">
                  <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Position Overview */}
              <p className="text-lightGray text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Highlights & Core Tasks */}
              <div>
                <h4 className="text-white text-xs font-bold font-heading tracking-wider uppercase mb-3">
                  Core Responsibilities
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-textDim">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li 
                      key={hIdx} 
                      className="flex items-start gap-3 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 p-3 rounded-xl transition-all duration-200"
                    >
                      <span className="text-awsOrange font-bold text-base leading-none select-none">✔</span>
                      <span className="leading-relaxed text-lightGray">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
