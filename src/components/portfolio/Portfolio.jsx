import { useScroll, useTransform, motion, useInView } from "motion/react";

import "./portfolio.css";
import { useEffect, useRef, useState } from "react";
import { animate, easeInOut } from "motion";

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const items = [
  {
    id: 1,
    img: "/p1.png",
    title: "Full Stack Blog Application",
    desc: "A feature-rich blog platform built with Next.js, MongoDB, and Prisma. Includes user authentication, categories, commenting, and a responsive design. Optimized for SEO and performance with server-side rendering.",
    link: "https://next-blog-website-vq6n.vercel.app/",
  },
  {
    id: 2,
    img: "/p3.png",
    title: "Award-Winning Website",
    desc: "A modern, visually stunning website designed with React and Tailwind CSS. Focused on accessibility, animations, and smooth navigation. Recognized for its UI/UX excellence with pixel-perfect responsive layouts.",
    link: "https://spylt-p.netlify.app/",
  },
  {
    id: 3,
    img: "/p2.png",
    title: "3D Portfolio",
    desc: "An interactive portfolio website built with React Three Fiber and Framer Motion. Showcases 3D models, animations, and projects in an engaging way, offering visitors an immersive experience.",
    link: "/",
  },
  // {
  //   id: 4,
  //   img: "/p4.jpg",
  //   title: "Social Media Project",
  //   desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
  //   link: "/",
  // },
  // {
  //   id: 5,
  //   img: "/p5.jpg",
  //   title: "Animated Portfolio Website",
  //   desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
  //   link: "/",
  // },
];

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        className="pText"
        variants={textVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
    }
  }, []);

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );
  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <div className="pProggress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
