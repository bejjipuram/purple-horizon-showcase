
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const Experience = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-20 section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Experience & Education
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <Briefcase className="text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Experience</h2>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary pb-6">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px]" />
                  <h3 className="font-semibold">Board Infinity – Online Learning Platform</h3>
                  <p className="text-sm text-gray-600">DSA Trainee | July 2024</p>
                  <ul className="mt-2 text-gray-600 space-y-2">
                    <li>Completed summer training in Data Structures and Algorithms</li>
                    <li>Engineered a Library Management System project using C++</li>
                    <li>Implemented efficient data structures for book management and user records</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary pb-6">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px]" />
                  <h3 className="font-semibold">Lovely Professional University</h3>
                  <p className="text-sm text-gray-600">Bachelor of Technology, Computer Science</p>
                  <p className="text-sm text-gray-600">CGPA: 6.94</p>
                  <p className="text-sm text-gray-600">Phagwara, Punjab</p>
                </div>

                <div className="relative pl-6 border-l-2 border-primary pb-6">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px]" />
                  <h3 className="font-semibold">Andhra Loyola College</h3>
                  <p className="text-sm text-gray-600">Intermediate | Percentage: 68.4%</p>
                  <p className="text-sm text-gray-600">Vijayawada, Andhra Pradesh</p>
                </div>

                <div className="relative pl-6 border-l-2 border-primary">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px]" />
                  <h3 className="font-semibold">ZPHS Ramavarappadu</h3>
                  <p className="text-sm text-gray-600">Matriculation | Percentage: 98%</p>
                  <p className="text-sm text-gray-600">Vijayawada, Andhra Pradesh</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Experience;
