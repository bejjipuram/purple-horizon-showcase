
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Corp",
    content: "Working with John was an absolute pleasure. His attention to detail and technical expertise helped us launch our product ahead of schedule.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartUp Inc",
    content: "John's ability to translate complex requirements into elegant solutions is remarkable. He's a valuable asset to any project.",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
    company: "Creative Agency",
    content: "The website John built for us exceeded our expectations. His creative approach and technical skills are outstanding.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-purple-50 rounded-lg p-8 relative"
          >
            <Quote className="text-primary/20 absolute top-4 left-4" size={40} />
            
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400" size={20} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-600 text-lg italic relative z-10">
                "{testimonials[currentSlide].content}"
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold">{testimonials[currentSlide].name}</h4>
                <p className="text-sm text-gray-500">
                  {testimonials[currentSlide].role} at {testimonials[currentSlide].company}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-6 bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
