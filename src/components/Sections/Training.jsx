import { motion } from 'framer-motion';
import { Award, CheckCircle, PlusCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Training() {
  const workshops = portfolioData.workshops || [];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (idx) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: idx * 0.1
      }
    })
  };

  return (
    <section id="training" className="py-24 relative">
      <div className="radial-glow bottom-[15%] left-[10%] bg-[radial-gradient(circle,rgba(255,153,0,0.05)_0%,rgba(5,8,17,0)_70%)]" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Training & <span className="bg-gradient-to-r from-awsOrange to-azureBlue bg-clip-text text-transparent">Workshops</span>
          </h2>
          <p className="text-lightGray max-w-xl mx-auto text-sm sm:text-base">
            Professional training courses, technical bootcamps, and intensive hands-on workshops.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                borderColor: idx % 2 === 0 ? 'rgba(255, 153, 0, 0.3)' : 'rgba(0, 120, 212, 0.3)',
                boxShadow: idx % 2 === 0 ? '0 15px 35px rgba(255, 153, 0, 0.08)' : '0 15px 35px rgba(0, 120, 212, 0.08)'
              }}
              className="bg-cardNavy/50 border border-white/5 rounded-2xl p-6 sm:p-8 flex items-start gap-4 transition-all duration-300 shadow-md shadow-black/20"
            >
              {/* Certificate badge icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                idx % 2 === 0 ? 'bg-awsOrange/10 text-awsOrange' : 'bg-azureBlue/10 text-azureBlue'
              }`}>
                <Award size={20} />
              </div>

              <div className="space-y-2">
                <span className={`font-mono text-[10px] font-semibold tracking-wider uppercase block ${
                  idx % 2 === 0 ? 'text-awsOrange' : 'text-azureBlue'
                }`}>
                  {workshop.issuer || workshop.organization}
                </span>
                
                <h3 className="text-base font-bold font-heading text-white leading-snug">
                  {workshop.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-textDim font-mono">
                  <span>Duration:</span>
                  <span className="text-white font-medium">{workshop.duration}</span>
                </div>

                <p className="text-lightGray text-xs leading-relaxed pt-1.5 border-t border-white/5">
                  {workshop.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Placeholder for future Certifications/Training */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-dashed-border border border-dashed border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-3 transition-colors duration-300 min-h-[220px]"
          >
            <PlusCircle className="text-textDim w-8 h-8" />
            <div>
              <h3 className="text-sm font-bold font-heading text-white mb-1">
                Upcoming Certifications
              </h3>
              <p className="text-textDim text-[11px] max-w-[180px] mx-auto leading-relaxed">
                Future AWS Associate Certifications & Terraform credentials will reside here.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
