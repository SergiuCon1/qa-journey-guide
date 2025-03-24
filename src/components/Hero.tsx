
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">QA Engineer</span>
              <span className="block text-primary mt-2">Knowledge Base</span>
            </h1>
          </motion.div>
          
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A comprehensive resource for quality assurance engineering, featuring checklists, 
            theory, code snippets, and best practices.
          </motion.p>
          
          <motion.div
            className="mt-10 flex justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/checklists"
              className="rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-x-2 group"
            >
              Explore Checklists
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="rounded-md border border-primary/20 bg-transparent px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-primary/5 transition-colors"
            >
              About Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
