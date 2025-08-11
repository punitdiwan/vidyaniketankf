import React from 'react'
import { motion } from "framer-motion";
const ImageLoader = () => {
  return (
    <div>
      <motion.div
          className="absolute inset-0 flex items-center justify-center bg-white rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <motion.div
            className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />
        </motion.div>
    </div>
  )
}

export default ImageLoader
