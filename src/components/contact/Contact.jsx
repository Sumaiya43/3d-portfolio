import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import ContactSvg from "./ContactSvg";

const Contact = () => {
  const ListVariants = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();
 

  const isInView = useInView(form, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          setError(true);
          setSuccess(false);
        }
      );
  };
  return (
    <div className="contact">
      <div className="cSection">
        <motion.form 
          variants={ListVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="form"
          ref={form}
          onSubmit={sendEmail}
        >
          <motion.h1 variants={ListVariants} className="cTitle">
            Let's keep in touch
          </motion.h1>
          <motion.div variants={ListVariants} className="formItem">
            <label htmlFor="">Name</label>
            <input type="text" name="user_username" placeholder="Your Name" />
          </motion.div>
          <motion.div variants={ListVariants} className="formItem">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="user_email"
              placeholder="example@gmail.com"
            />
          </motion.div>
          <motion.div variants={ListVariants} className="formItem">
            <label htmlFor="">Message</label>
            <textarea
              rows={10}
              placeholder="Write your message.."
              name="user_message"
            ></textarea>
          </motion.div>
          <motion.button variants={ListVariants} className="formButton">
            Send
          </motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection"><ContactSvg/></div>
    </div>
  );
};

export default Contact;
