import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./testimonial.scss";

const items = [
  {
    id: 1,
    statement:
      "I am very satisfied with the quality of the work and the communication from the seller. They go above and beyond to ensure satisfactory delivery of the job, contribute with their own ideas for improvements, and provide constant visibility and updates on progress.",
    clientName: "sublines",
    img: "./germany.png",
  },
  {
    id: 2,
    statement:
      "Our project was delivered significantly sooner than expected, and communication was great throughout the entire project. This is a professional, friendly and committed seller.",
    clientName: "sublines",
    img: "./germany.png",
  },
  {
    id: 3,
    statement:
      "DevWiz is the person you need for your projects ! His communication, the fact he gives you updates every day, the way he handles problems and demands, are the reason you want to do business with him ! I was scared about giving my project to someone on Fiverr and didnt know what to expect. DevWiz gave me so much more, my project is way better that I was expecting. I gave him a second project right after the delivery without hesitation ! Thanks buddy it was a pleasure doing business with you !",
    clientName: "acejimbo",
    img: "./canada.png",
  },
  {
    id: 4,
    statement:
      "This is the best dev you can hire ! I recommend BUYERS to be alert about his local time, he will answer you whatever the time because fiverr's workers need to answer fast to the client for their stats and he wants your satisfaction. But it's way better to chat with him during his day time :) Amazing work for my 2nd project with him, always listening to my demands, always finding solutions and he helped me a lot with my website. I recommend that guy a lot !",
    clientName: "acejimbo",
    img: "./canada.png",
  },
  {
    id: 5,
    statement: "3rd project with him.... always perfect job and communication.",
    clientName: "acejimbo",
    img: "./canada.png",
  },
  {
    id: 6,
    statement:
      "4th project with this guys and as always im really happy with his work ! I recommend him to everyone !",
    clientName: "acejimbo",
    img: "./canada.png",
  },
  {
    id: 7,
    statement: "Thanks for the job.",
    clientName: "acejimbo",
    img: "./canada.png",
  },
  {
    id: 8,
    statement:
      "Really like doing business with him. He takes his time to deliver a perfect project. I recommand him highly !",
    clientName: "acejimbo",
    img: "./canada.png",
  },
  {
    id: 9,
    statement: "Really happy with the delivery again !",
    clientName: "acejimbo",
    img: "./canada.png",
  },

  {
    id: 10,
    statement:
      "Fastest response times, great communication, very trustworthy. We plan to continue working with him on many projects in the future. He showed great patience while walking me through creating a MySQL Database for the first time, and he is very much appreciated.",
    clientName: "weare360apparel",
    img: "./usa.png",
  },
  {
    id: 10,
    statement: "You are the best!!",
    clientName: "rorosa11",
    img: "./israel.png",
  },
  {
    id: 12,
    statement: "Very responsive and fast service!",
    clientName: "weare360apparel",
    img: "./usa.png",
  },
];

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const scaleAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="testimonial">
      <h1>Testimonials__</h1>

      <div className="reviews_container">
        <button onClick={handlePrev}>
          <img src="./leftbtn.png" alt="leftbtn" />
        </button>
        <div className="review">
          <div className="client_desc">
            <motion.p
              key={currentIndex}
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={scaleAnimation}
            >
              <span>&#8220;</span> {items[currentIndex].statement}
            </motion.p>
          </div>

          <div className="client_info">
            <h3>{items[currentIndex].clientName}</h3>

            <img
              src={items[currentIndex].img}
              alt={items[currentIndex].clientName}
            />
          </div>
        </div>
        <button onClick={handleNext}>
          <img src="./rightbtn.png" alt="rightbtn" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
