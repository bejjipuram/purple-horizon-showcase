
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Avatar className="mx-auto w-32 h-32 mb-6 border-4 border-purple-200">
            <AvatarImage 
              src="/placeholder.svg" 
              alt="Professional headshot" 
              className="object-cover"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent purple-gradient">
            John Doe
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Building beautiful, responsive, and user-friendly web applications
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="purple-gradient text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </button>
        </motion.div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
