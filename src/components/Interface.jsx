import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 100,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Lucas</span>
      </h1>
      <p className="text-lg text-gray-600 mt-4">I'm a front-end developper</p>
      <button
        className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
      >
        Get in touch
      </button>
    </Section>
  );
};

const SkillSection = () => {
  return (
    <Section>
      <h1>Skills</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ipsa
        veritatis, eos quisquam quod natus consequatur facere, dicta blanditiis,
        at illo soluta quibusdam? Enim beatae at, pariatur atque facere ducimus.
      </p>
    </Section>
  );
};
const ProjectSection = () => {
  return (
    <Section>
      <h1>Projects</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ipsa
        veritatis, eos quisquam quod natus consequatur facere, dicta blanditiis,
        at illo soluta quibusdam? Enim beatae at, pariatur atque facere ducimus.
      </p>
    </Section>
  );
};
const ContactSection = () => {
  return (
    <Section>
      <h1>Contact</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ipsa
        veritatis, eos quisquam quod natus consequatur facere, dicta blanditiis,
        at illo soluta quibusdam? Enim beatae at, pariatur atque facere ducimus.
      </p>
    </Section>
  );
};
