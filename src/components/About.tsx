
import { motion } from "framer-motion";
import { Award, Book, Coffee } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Hi, I'm John Doe
            </h3>
            <p className="text-gray-600">
              A passionate Full Stack Developer with over 5 years of experience in building web applications. 
              I specialize in JavaScript, React, and Node.js, with a strong focus on creating efficient and scalable solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <Coffee className="mx-auto text-primary mb-2" />
                <p className="font-medium">500+ Cups of Coffee</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <Award className="mx-auto text-primary mb-2" />
                <p className="font-medium">15+ Projects</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <Book className="mx-auto text-primary mb-2" />
                <p className="font-medium">Always Learning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
