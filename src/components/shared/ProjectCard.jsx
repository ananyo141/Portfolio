import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Modal from "./Modal";

const ProjectCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="flex gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="rounded-lg p-20 shadow-xl"
        onClick={() => (modalOpen ? close() : open())}
      >
        <h1>Project Title</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          quaerat dolorem at nobis sunt aliquid voluptatum porro quos, culpa
          adipisci molestias eius a in. Delectus corrupti officia quidem
          veritatis placeat?
        </p>
      </motion.button>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen ? <Modal modalOpen={modalOpen} handleClose={close} /> : null}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
