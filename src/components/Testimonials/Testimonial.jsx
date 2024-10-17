import { motion } from "framer-motion";

const testimonials = [
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

const Testimonial = () => {
  return (
    <div className="testimonials max-w-[1366px] mx-auto px-2 md:px-0">
      <h2 className="text-white/50 text-lg md:text-xl text-center mt-5">
        Delighted Clients.
      </h2>
      <p className="text-3xl md:text-4xl text-center tracking-tighter font-medium mt-4">
        What Our Clients Think About Us
      </p>
      <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{
            translateX: "-50%",
          }}
          animate={{
            translateX: "0",
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 100,
          }}
          className="flex gap-5 py-4 flex-none"
        >
          {[...testimonials, ...testimonials].map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-sm md:max-w-md flex-none hover:-rotate-3 transition duration-300"
            >
              <div className="flex flex-col justify-between h-full">
                <div className="text-lg md:text-xl tracking-tight">
                  &#34; {testimonial.statement} &#34;
                </div>
                <div className="flex justify-center items-center gap-3 mt-5">
                  <img
                    src={testimonial.img}
                    alt={`Image for ${testimonial.clientName}`}
                    className="h-10 w-10 rounded-full border border-white"
                  />
                  <div className="uppercase text-sm font-medium text-gray-400">
                    {testimonial.clientName}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
