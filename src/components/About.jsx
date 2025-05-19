import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../HOC";

const ServiceCard = ({index ,icon,  title }) => {
  return (
    
      <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div 
              options={{
                max:45,
                scale:1,
                speeed:450
              }}
                  className="bg-tertiary cursor-pointer rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt="" className="w-16 h-16 object-contain cursor-pointer text-[20px] font-bold text-center" />
                    <h3 className="text-white">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" >
        I’m a passionate B.Tech student specializing in Artificial Intelligence and Machine Learning (AI & ML), with a strong focus on merging AI with web development to build smart, data-driven applications. Proficient in HTML, CSS, JavaScript, and the MERN stack, I strive to create innovative solutions that tackle real-world problems and enhance user experiences.

Currently, I am deepening my expertise in AI technologies and modern web development frameworks to deliver impactful tools and applications. Alongside coding, I am dedicated to sharing my knowledge through eBooks, online courses, and AI-powered educational platforms.

My strategic mindset—shaped by a love for chess—combined with strong communication skills drives my continuous desire to learn, collaborate, and bring creative ideas to life. Let’s connect and build something amazing together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about")
