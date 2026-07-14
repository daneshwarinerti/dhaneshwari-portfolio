import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

// Local SVG icon since lucide-react in this environment is an older version that lacks this brand.
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

export default function Projects() {
  const projects = portfolioData.projects;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15,
        delay: idx * 0.15
      }
    })
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="radial-glow bottom-[20%] left-[-15%] bg-[radial-gradient(circle,rgba(0,120,212,0.05)_0%,rgba(5,8,17,0)_70%)]" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Featured <span className="bg-gradient-to-r from-awsOrange to-azureBlue bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lightGray max-w-xl mx-auto text-sm sm:text-base">
            Demonstrating hands-on cloud systems engineering, serverless compute pipelines, and container deployment models.
          </p>
        </motion.div>

        {/* Project grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`bg-cardNavy/40 border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-lg shadow-black/20 hover:shadow-2xl transition-all duration-300 ${
                idx % 2 === 0 
                  ? 'hover:border-awsOrange/30 hover:shadow-awsOrange/[0.03]' 
                  : 'hover:border-azureBlue/30 hover:shadow-azureBlue/[0.03]'
              }`}
            >
              {/* Image box */}
              <div className="h-56 relative overflow-hidden bg-deepNavy">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Visual overlay tag */}
                <div 
                  className={`absolute top-4 left-4 bg-deepNavy/90 border border-white/5 rounded-md px-3 py-1 font-mono text-[10px] font-semibold tracking-wider ${
                    idx % 2 === 0 ? 'text-awsOrange' : 'text-azureBlue'
                  }`}
                >
                  INFRASTRUCTURE // 0{idx + 1}
                </div>
              </div>

              {/* Detail body */}
              <div className="p-8 flex flex-col flex-grow space-y-5">
                <h3 className="text-xl font-bold font-heading text-white">
                  {project.title}
                </h3>
                
                <p className="text-lightGray text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features points list */}
                <ul className="space-y-2.5 text-xs text-textDim flex-grow">
                  {project.features.map((feature, fIdx) => (
                    <li 
                      key={fIdx} 
                      className="flex items-start gap-2.5"
                    >
                      <span className={`font-bold ${idx % 2 === 0 ? 'text-awsOrange' : 'text-azureBlue'}`}>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills tag stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-medium px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Links Bar */}
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold font-heading text-xs transition-all duration-200"
                  >
                    <GithubIcon size={14} /> View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 font-semibold font-heading text-xs text-white transition-all duration-200 ${
                      idx % 2 === 0 
                        ? 'hover:border-awsOrange hover:text-awsOrange' 
                        : 'hover:border-azureBlue hover:text-azureBlue'
                    }`}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
