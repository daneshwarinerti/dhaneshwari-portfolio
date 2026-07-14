import { motion } from 'framer-motion';
import { 
   SiDocker, SiTerraform, SiJenkins 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

// Monitoring & Logging SVG (Line Chart)
const MonitoringIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-purple-400 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    <path d="M15 8h3.7V11.7" />
  </svg>
);

export default function Skills() {
  const skillsList = portfolioData.skills;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.1,
        duration: 0.6,
        delay: index * 0.1
      }
    })
  };

  const getIcon = (type) => {
    switch (type) {
      case 'jenkins':
        return <SiJenkins className="w-12 h-12 text-purple-400" />;
      case 'terraform':
        return <SiTerraform className="w-12 h-12 text-purple-400" />;
      case 'docker':
        return <SiDocker className="w-12 h-12 text-purple-400" />;
      case 'aws':
        return <FaAws className="w-12 h-12 text-purple-400" />;
      default:
        return <MonitoringIcon />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="radial-glow top-[10%] left-[-15%] bg-[radial-gradient(circle,rgba(168,85,247,0.04)_0%,rgba(5,8,17,0)_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            My <span className="bg-gradient-to-r from-awsOrange to-azureBlue bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lightGray max-w-xl mx-auto text-sm sm:text-base">
            Core areas of specialization validating cloud administration, infrastructure automation, SRE workflows, and continuous integration.
          </p>
        </motion.div>

        {/* Skills Cards Grid - 3 columns top row, 2 columns bottom row centered */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {skillsList.map((skill, index) => (
            <motion.div
              key={skill.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                borderColor: 'rgba(168, 85, 247, 0.35)',
                boxShadow: '0 15px 35px rgba(168, 85, 247, 0.05)'
              }}
              className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] bg-cardNavy/40 border border-white/5 hover:border-purple-500/20 rounded-3xl p-8 flex flex-col items-center text-center space-y-4 shadow-lg shadow-black/20 transition-all duration-300"
            >
              {/* Icon Container with purple branding styling */}
              <div className="w-20 h-20 rounded-full bg-purple-500/5 border border-purple-500/10 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(168,85,247,0.03)]">
                {getIcon(skill.type)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-heading text-white">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-lightGray text-xs sm:text-sm leading-relaxed max-w-xs">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
