
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-purple-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Resume
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <Briefcase className="text-primary mr-2" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary pb-6">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px]" />
                  <h4 className="font-semibold">Senior Developer</h4>
                  <p className="text-sm text-gray-600">2020 - Present</p>
                  <p className="mt-2 text-gray-600">Led development of multiple full-stack applications</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px]" />
                  <h4 className="font-semibold">Full Stack Developer</h4>
                  <p className="text-sm text-gray-600">2018 - 2020</p>
                  <p className="mt-2 text-gray-600">Developed and maintained client projects</p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="text-primary mr-2" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary pb-6">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px]" />
                  <h4 className="font-semibold">M.S. Computer Science</h4>
                  <p className="text-sm text-gray-600">2016 - 2018</p>
                  <p className="mt-2 text-gray-600">Stanford University</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px]" />
                  <h4 className="font-semibold">B.S. Computer Science</h4>
                  <p className="text-sm text-gray-600">2012 - 2016</p>
                  <p className="mt-2 text-gray-600">MIT</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center purple-gradient text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Download className="mr-2" size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
