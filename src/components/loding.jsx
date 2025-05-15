import { motion } from "framer-motion";

function LoadingCircleSpinner() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <motion.div
          className="flex gap-1 text-white text-2xl font-bold"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {"Loading...".split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default LoadingCircleSpinner;
