import "./About.scss";

const About = () => {
  const secPartTexts =
    "As a skilled software engineer proficient in JavaScript, React, and Node.js, We possess a strong foundation in Computer Science and Engineering, earned through my 2022 graduation. Our knowledge of data structures and algorithms enables us to develop efficient and scalable solutions for complex challenges. We thrive in collaborative environments, delivering user-centric products by closely aligning with client needs.";
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
    "With a passion for both software development and design, We have honed our 3D modeling skills using Blender and we're eager to explore AI applications. Our entrepreneurial spirit led to the founding of GrubHTML.com, where We have successfully completed freelance projects over the past two years. We are excited to leverage our skills and experience to bring your vision to life.";

  return <p className="animation_texts">{wrapTextInSpans(text)}</p>;
};

const AboutSecondText = ({ text }) => {
  return <p className="animation_texts">{wrapTextInSpans(text)}</p>;
};

export default About;
