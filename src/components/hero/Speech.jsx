import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="bubbleContainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            "Hi, I'm Mazeda — a Frontend Developer",
            1000,
            "I build responsive & dynamic UIs",
            1000,
            "I build modern web applications",
            1000,
            "I build user-friendly digital experiences",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/women.png" alt="" />
    </motion.div>
  );
};

export default Speech;
