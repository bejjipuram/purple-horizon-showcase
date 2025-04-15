
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Jest", "CI/CD"]
  }
];

const Skills = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & Services
        </h2>
        
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
  );
};

export default Skills;
