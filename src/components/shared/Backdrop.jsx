import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
      <motion.div
        className="fixed z-40 top-0 left-0 flex backdrop-blur h-full w-full items-center justify-center"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
  );
};

export default Backdrop;
