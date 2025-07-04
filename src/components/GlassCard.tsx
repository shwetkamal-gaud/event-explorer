import React from 'react'
import { motion } from "framer-motion";

const GlassCard = ({ children, className}: { children: React.ReactNode, className?:string }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`backdrop-blur-[35px] ${className}  flex flex-col w-full max-h-[85vh] overflow-y-auto scrollbar-hidden  border-[2px] border-[#aaaaaa1a] dark:border-[#76757526] bg-[#ffffff1a] dark:bg-[#00000026] rounded-xl shadow-xl p-6`}>
      {children}
    </motion.section>
  )
}

export default GlassCard