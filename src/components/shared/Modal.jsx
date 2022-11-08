import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

import { Flip } from "./Animations";

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        onClick={(e) => e.stopPropagation()}
        className="mx-auto my-auto flex h-1/2 w-1/2 flex-col items-center rounded-xl pr-4"
        variants={Flip}
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
