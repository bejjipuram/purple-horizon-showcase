
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const photographs = [
  {
    title: "Wildlife",
    image: "/photo-1472396961693-142e6e269027",
    description: "Capturing the beauty of nature and wildlife in their natural habitat"
  },
  {
    title: "Landscapes",
    image: "/photo-1498936178812-4b2e558d2937",
    description: "Breathtaking views of natural landscapes and scenery"
  },
  {
    title: "Macro",
    image: "/photo-1498936178812-4b2e558d2937",
    description: "Close-up photography revealing intricate details"
  }
];

const Photography = () => {
  return (
    <section id="photography" className="section-padding bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Photography</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Photography is my creative outlet where I capture moments and perspectives 
              through my lens. Here are some of my favorite shots.
            </p>
          </motion.div>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {photographs.map((photo, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold text-xl mb-2">{photo.title}</h3>
                    <p className="text-white/90 text-sm">{photo.description}</p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Photography;
