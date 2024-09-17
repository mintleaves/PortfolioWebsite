import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "./dragcards.scss";

const reviews = [
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
  {
    id: 13,
    statement: "Thanks again !",
    clientName: "acejimbo",
    img: "./canada.png",
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const DragCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setCurrentIndex((pv) => {
          if (pv === reviews.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && currentIndex < reviews.length - 1) {
      setCurrentIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && currentIndex > 0) {
      setCurrentIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="testimonials">
      <h1>Testimonials__</h1>
      <div className="relative overflow-hidden reviews_section">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${currentIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex cursor-grab items-center active:cursor-grabbing"
        >
          <Reviews currentIndex={currentIndex} />
        </motion.div>

        <Dots currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        <GradientEdges />
      </div>
    </div>
  );
};

const Reviews = ({ currentIndex }) => {
  return (
    <>
      {reviews.map((review, idx) => {
        return (
          <motion.div
            key={review.id}
            animate={{ scale: currentIndex === idx ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
            className=" review_section aspect-video w-full shrink-0 rounded-xl bg-custom-background text-center flex items-center justify-center flex-col"
          >
            
            <p className="text-gray-300 text-xl md:text-2xl lg:text-3xl font-thin">{review.statement}</p>
            <div className="flex justify-center items-center mt-9 gap-3">
              <h3 className="text-gray-300 capitalize underline text-md md:text-lg lg:text-xl">
                {review.clientName}
              </h3>
              <img
                src={review.img}
                alt={review.clientName}
                className="w-12 h-12 rounded-full mr-4 border"
              />
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ currentIndex, setCurrentIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {reviews.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === currentIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

export default DragCards;
