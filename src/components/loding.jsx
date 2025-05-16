import React from "react";
import { motion } from "framer-motion";

function LoadingCircleSpinner() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => setCount(count + 1), 20);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <motion.div
        className="text-white text-5xl lg:text-8xl font-bold font-['FoundersGrotesk X-cond Bold']"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7,  }}
        key={count}
      >
        {count}%
      </motion.div>
    </div>
  );
}

export default LoadingCircleSpinner;
