import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1200; // Fast loading time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-deepNavy z-[9999] flex flex-col justify-center items-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="relative w-48 text-center">
          {/* Logo Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-extrabold font-heading text-white mb-5 tracking-wide"
          >
            DN<span className="text-awsOrange">.</span>
          </motion.div>

          {/* Progress Bar Track */}
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full bg-gradient-to-r from-awsOrange to-azureBlue"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Status Text */}
          <div className="font-mono text-[11px] text-lightGray tracking-wider">
            Deploying Infrastructure... {progress}%
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
