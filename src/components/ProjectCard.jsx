import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Modal from "./shared/Modal";

import projectBanner from "../assets/project_banner.jpg";

const ProjectCard = ({ title }) => {
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
        <img
          src={projectBanner}
          className="rounded-xl"
          alt="project banner image"
        />
        <div className="absolute bottom-0 left-0 right-0 space-y-2 p-4 backdrop-blur filter">
          <h1 className="font-light tracking-wide text-2xl">Project Name Here</h1>
          <p className="text-slate-500">Click to learn more</p>
        </div>
      </motion.button>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen ? (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            title="AsMake"
            subtitle="This automates the whole testing process"
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
