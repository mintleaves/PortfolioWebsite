import "./About.scss";

const About = () => {
  const secPartTexts =
    "As a skilled software engineer proficient in JavaScript, React, and Node.js, I possess a strong foundation in Computer Science and Engineering, earned through my 2022 graduation. My knowledge of data structures and algorithms enables me to develop efficient and scalable solutions for complex challenges. I thrive in collaborative environments, delivering user-centric products by closely aligning with client needs.";
  return (
    <div className="about">
      <h1>Introduction__</h1>
      <div className="text_container">
        <AboutSecondText text={secPartTexts} />
        <br />
        <AboutFirstText />
      </div>
    </div>
  );
};

const wrapTextInSpans = (text) => {
  return text.split("").map((char, idx) => (
    <span className="hoverText" key={idx}>
      {char}
    </span>
  ));
};

const AboutFirstText = () => {
  const text =
    "With a passion for both software development and design, I have honed my 3D modeling skills using Blender and am eager to explore AI applications. My entrepreneurial spirit led to the founding of GrubHTML.com, where I have successfully completed freelance projects over the past two years. I am excited to leverage my skills and experience to bring your vision to life.";

  return <p className="animation_texts">{wrapTextInSpans(text)}</p>;
};

const AboutSecondText = ({ text }) => {
  return <p className="animation_texts">{wrapTextInSpans(text)}</p>;
};

export default About;
