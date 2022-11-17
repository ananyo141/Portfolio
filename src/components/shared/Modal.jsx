import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaGithubAlt, FaPlayCircle } from "react-icons/fa";

import Backdrop from "./Backdrop";
import IconButton from "./IconButton";
import { Flip } from "./Animations";

const Modal = ({ handleClose, title, description, ghlink, demolink }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="mx-auto flex h-1/2 w-1/2 flex-col items-center justify-center rounded-xl pr-4"
        variants={Flip}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="">
          <motion.button
            className="float-right p-4"
            onClick={handleClose}
            whileHover={{
              scale: 1.2,
            }}
            whileFocus={{
              scale: 0.8,
            }}
          >
            <AiOutlineCloseCircle className="h-8 w-8" />
          </motion.button>
          <motion.div
            className="max-w-lg space-y-3 rounded-xl bg-[#2a34a3] py-10 px-20 shadow-xl transition duration-200"
            animate
          >
            <h4 className="text-2xl font-semibold">{title}</h4>
            <p className="text-md">{description}</p>
            <div className="flex justify-between">
              <IconButton
                icon={<FaGithubAlt className="scale-150" />}
                text="Code"
                link={ghlink}
              />
              <IconButton
                icon={<FaPlayCircle className="scale-150" />}
                text="Demo"
                link={demolink}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
