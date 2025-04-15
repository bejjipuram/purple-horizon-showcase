
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "A full-stack e-commerce solution with payment integration",
    link: "#"
  },
  {
    title: "Task Management App",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "A collaborative task management application",
    link: "#"
  },
  {
    title: "Social Media Dashboard",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Analytics dashboard for social media management",
    link: "#"
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-purple-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Work
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="portfolio-item group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="portfolio-overlay">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-white hover:text-purple-200 transition-colors"
                  >
                    View Project <ExternalLink className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
