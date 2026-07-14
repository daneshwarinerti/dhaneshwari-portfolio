import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BarChart2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Education() {
  const { degree, major, college, duration, cgpa } = portfolioData.education;

  return (
    <section id="education" className="py-24 relative">
      <div className="radial-glow bottom-[10%] right-[-15%] bg-[radial-gradient(circle,rgba(0,120,212,0.04)_0%,rgba(5,8,17,0)_70%)]" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            My <span className="bg-gradient-to-r from-awsOrange to-azureBlue bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lightGray max-w-xl mx-auto text-sm sm:text-base">
            Academic records and degree specifications.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-cardNavy/40 border border-white/5 rounded-3xl p-8 sm:p-10 flex flex-col gap-6 relative shadow-xl shadow-black/30 overflow-hidden hover:border-azureBlue/30 hover:shadow-azureBlue/[0.03] transition-all duration-300"
          >
            {/* Header cap badge */}
            <div className="w-14 h-14 rounded-2xl bg-azureBlue/10 border border-azureBlue/25 flex items-center justify-center text-azureBlue flex-shrink-0">
              <GraduationCap size={28} />
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                  {degree} in {major}
                </h3>
                <h4 className="text-sm sm:text-base font-semibold font-heading text-lightGray">
                  {college}
                </h4>
              </div>

              {/* Data pills */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-textDim">
                  <Calendar className="text-awsOrange w-4 h-4" />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-textDim">
                  <BarChart2 className="text-teal-400 w-4 h-4" />
                  <span>CGPA: <strong className="text-white font-semibold">{cgpa}</strong></span>
                </div>
              </div>
            </div>

            {/* Radiant decorative top right glow overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(0,120,212,0.15),transparent_70%)] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
