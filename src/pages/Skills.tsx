
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "C++", "Bash"]
  },
  {
    category: "Cloud & DevOps Tools",
    items: ["AWS CloudFormation", "Git", "CI/CD pipelines", "Docker"]
  },
  {
    category: "Platforms & Technologies",
    items: ["Salesforce CRM", "AWS", "Azure", "Virtualization"]
  },
  {
    category: "Soft Skills",
    items: ["Adaptability", "Communication", "Team Collaboration", "Analytical Thinking"]
  },
  {
    category: "Communication Skills",
    items: ["English", "Telugu", "German", "Hindi"]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-20 section-padding">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Skills & Expertise
          </motion.h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="bg-purple-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4 purple-gradient bg-clip-text text-transparent">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-700">
                      <CheckCircle className="text-primary mr-2" size={16} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Skills;
