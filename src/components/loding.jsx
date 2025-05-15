import { motion } from "framer-motion";

function LoadingCircleSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className=" h-[200px] w-[200px] rounded-full bg-[#1d4ed8] border-8  animate-spin"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.5, 0.9, 1.01 ],
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}

export default LoadingCircleSpinner;
