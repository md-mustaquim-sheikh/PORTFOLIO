import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials, workExperiences } from "../constants";


// Feedback Card
const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

// Main Component
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Work Experience Section */}
      <div className={`${styles.padding} bg-tertiary rounded-2xl`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have Done So Far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        <ul className="mt-10 space-y-6">
          {workExperiences.map((experience, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.02 }}
              className="border-l-4 border-purple-500 pl-4 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white text-[18px] font-bold">{experience.title}</h3>
                <span className="text-sm text-gray-400 italic">{experience.date}</span>
              </div>
              <p className="text-secondary text-[15px] font-medium">
                {experience.company_name} &mdash; <span className="text-gray-400">{experience.work_type}</span>
              </p>
              <ul className="list-disc ml-5 text-white-100 text-[14px] space-y-1 mt-2">
                {experience.points.map((point, idx) => (
                  <li key={`exp-${index}-point-${idx}`}>{point}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Testimonials Section */}
      <motion.div variants={textVariant()} className="mt-20 px-6">
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>

      <div className={`${styles.paddingX} mt-10 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "work");
