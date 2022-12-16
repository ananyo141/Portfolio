import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Modal from "./shared/Modal";

import projectBanner from "../assets/project_banner.jpg";

const ProjectCard = ({ title, description, image, ghlink, demolink }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-96 "
        onClick={() => (modalOpen ? close() : open())}
      >
        <img src={projectBanner} className="rounded-xl" alt="project banner" />
        <div className="absolute bottom-0 left-0 right-0 space-y-2 p-4 filter backdrop-blur">
          <h1 className="text-2xl font-light tracking-wide">{title}</h1>
          <p className="text-slate-500">Click to learn more</p>
        </div>
      </motion.button>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen ? (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            title={title}
            description={description}
            image={image}
            ghlink={ghlink}
            demolink={demolink}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
