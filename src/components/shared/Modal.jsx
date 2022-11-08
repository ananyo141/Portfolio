import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

const Modal = ({ handleClose, text }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        onClick={(e) => e.stopPropagation()}
        className="mx-auto my-auto flex h-1/2 w-1/2 flex-col items-center rounded-xl pr-4"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <button className="h-1/2 w-1/2 bg-white/20 p-20" onClick={handleClose}>
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
