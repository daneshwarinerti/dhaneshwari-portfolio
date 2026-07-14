import { motion } from 'framer-motion';
import { BookOpen, Cpu, Award } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  const { educationBrief, passions, philosophy } = portfolioData.about;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="radial-glow top-[20%] right-[-15%] bg-[radial-gradient(circle,rgba(0,120,212,0.06)_0%,rgba(5,8,17,0)_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            About <span className="bg-gradient-to-r from-awsOrange to-azureBlue bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lightGray max-w-xl mx-auto text-sm sm:text-base">
            Get to know my academic background, technical focus areas, and engineering vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* About Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-heading text-white">
              Bridging academic concepts with production-ready cloud systems.
            </h3>
            
            <p className="text-lightGray leading-relaxed text-sm sm:text-base">
              {educationBrief}
            </p>

            <p className="text-lightGray leading-relaxed text-sm sm:text-base">
              {philosophy}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold font-mono text-awsOrange uppercase tracking-wider">
                // MY TECHNICAL FOCUS AREAS:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {passions.map((passion, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-colors"
                  >
                    <span className="text-azureBlue font-bold text-sm">✓</span>
                    <span className="text-xs sm:text-sm text-white font-medium">{passion}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* About Visual CI/CD Loop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-cardNavy/40 border border-white/5 rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center shadow-xl shadow-black/30 relative"
          >
            {/* Visual Title */}
            <div className="w-full text-left mb-6">
              <span className="font-mono text-[10px] text-textDim tracking-widest uppercase">
                SYSTEM_FLOW // DEPLOYMENT_CYCLE
              </span>
            </div>

            {/* SVG Diagram */}
            <svg viewBox="0 0 400 200" className="w-full h-auto overflow-visible">
              <path 
                d="M 50 100 Q 125 40 200 100 T 350 100" 
                fill="none" 
                className="stroke-white/10" 
                strokeWidth="4" 
                strokeDasharray="8 6"
              />

              {/* Pulsing indicator path */}
              <motion.path 
                d="M 50 100 Q 125 40 200 100 T 350 100" 
                fill="none" 
                stroke="url(#pipelineGrad)" 
                strokeWidth="4"
                strokeDasharray="30 150"
                animate={{ strokeDashoffset: [-180, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              />

              <defs>
                <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-aws-orange)" />
                  <stop offset="100%" stopColor="var(--color-azure-blue)" />
                </linearGradient>
              </defs>

              {/* Node 1: Code */}
              <g transform="translate(50, 100)">
                <circle r="20" fill="var(--color-bg-deep)" className="stroke-textDim" strokeWidth="2" />
                <BookOpen size={14} x="-7" y="-7" className="text-white" />
                <text y="34" textAnchor="middle" fill="var(--color-light-gray)" fontSize="9" className="font-mono font-semibold">CODE</text>
              </g>

              {/* Node 2: Build */}
              <g transform="translate(140, 65)">
                <circle r="20" fill="var(--color-bg-deep)" className="stroke-aws-orange" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 5px rgba(255,153,0,0.35))' }} />
                <Cpu size={14} x="-7" y="-7" className="text-awsOrange" />
                <text y="-26" textAnchor="middle" fill="var(--color-light-gray)" fontSize="9" className="font-mono font-semibold">BUILD</text>
              </g>

              {/* Node 3: Deploy */}
              <g transform="translate(260, 135)">
                <circle r="20" fill="var(--color-bg-deep)" className="stroke-azure-blue" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 5px rgba(0,120,212,0.35))' }} />
                <Award size={14} x="-7" y="-7" className="text-azureBlue" />
                <text y="34" textAnchor="middle" fill="var(--color-light-gray)" fontSize="9" className="font-mono font-semibold">DEPLOY</text>
              </g>

              {/* Node 4: Monitor */}
              <g transform="translate(350, 100)">
                <circle r="20" fill="var(--color-bg-deep)" className="stroke-textDim" strokeWidth="2" />
                <motion.circle 
                  r="25" 
                  fill="none" 
                  stroke="var(--color-accent-teal)" 
                  strokeWidth="1" 
                  strokeDasharray="4 4"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                />
                <Cpu size={14} x="-7" y="-7" className="text-teal-400" />
                <text y="34" textAnchor="middle" fill="var(--color-light-gray)" fontSize="9" className="font-mono font-semibold">MONITOR</text>
              </g>
            </svg>

            {/* Status indicator bar */}
            <div className="w-full mt-8 p-4 bg-white/[0.01] rounded-xl border border-white/5 text-xs font-mono text-lightGray flex items-center gap-3">
              <span className="text-teal-400 animate-pulse">●</span>
              <span>ENVIRONMENT STATE: COMPILATION PASS // PIPELINE STABLE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
