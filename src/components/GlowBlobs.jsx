import { motion } from "framer-motion";

const GlowBlobs = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    {/* Deep Orange/Amber: Positioned top-right for a 'Sunrise' effect */}
    <motion.div
      animate={{
        opacity: [0.03, 0.07, 0.03],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-[5%] -top-[5%] h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[120px]"
    />
    
    {/* Sophisticated Crimson: Positioned bottom-left for depth */}
    <motion.div
      animate={{
        x: [0, 40, 0],
        y: [0, -20, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-[10%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-red-900/10 blur-[140px]"
    />

    {/* Center Neutralizer: Keeps the content area clean and readable */}
    <div className="absolute inset-0 bg-[#020617]/20 backdrop-blur-[2px]" />
  </div>
);

export default GlowBlobs;