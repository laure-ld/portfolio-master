import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import '../styles/carrousels.scss';

function Carousel() {
  const [index, setIndex] = useState(0);

  const paginate = (direction) => {
    const newIndex = (index + direction + projects.length) % projects.length;
    setIndex(newIndex);
  };

  return (
    <div className="carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="carousel-slide"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src={projects[index].image} alt={projects[index].title} />
          <h3>{projects[index].title}</h3>
          <p>{projects[index].description}</p>
        </motion.div>
      </AnimatePresence>

      <div className="controls">
        <button onClick={() => paginate(-1)}>←</button>
        <button onClick={() => paginate(1)}>→</button>
      </div>
    </div>
  );
}

export default Carousel;
