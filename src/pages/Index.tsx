
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ChecklistCard from '../components/ChecklistCard';
import CodeSnippet from '../components/CodeSnippet';
import { ArrowRight, FileCheck, Code, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data for featured checklists
const featuredChecklists = [
  {
    id: 1,
    title: 'API Testing Checklist',
    description: 'Comprehensive checklist for RESTful API testing including status codes, response validation, and security checks.',
    category: 'API Testing',
    items: 12,
    slug: 'api-testing'
  },
  {
    id: 2,
    title: 'Mobile App Testing',
    description: 'Essential checks for mobile applications including installation, performance, usability, and offline mode testing.',
    category: 'Mobile Testing',
    items: 18,
    slug: 'mobile-app-testing'
  },
  {
    id: 3,
    title: 'Regression Testing',
    description: 'Complete strategy for regression testing to ensure new code changes don\'t break existing functionality.',
    category: 'Testing Strategies',
    items: 9,
    slug: 'regression-testing'
  }
];

// Sample data for featured code snippets
const featuredSnippets = [
  {
    id: 1,
    title: 'API Request with Axios',
    description: 'Basic API request template using Axios with error handling',
    language: 'javascript',
    code: `import axios from 'axios';\n\nasync function fetchData() {\n  try {\n    const response = await axios.get('https://api.example.com/data');\n    console.log(response.data);\n    return response.data;\n  } catch (error) {\n    console.error('Error fetching data:', error);\n    throw error;\n  }\n}`
  }
];

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Features Section */}
      <section className="py-12 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
              QA Knowledge Base
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Everything you need to excel in quality assurance, from theoretical concepts to practical implementations.
            </p>
          </motion.div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Testing Checklists</h3>
              <p className="mt-2 text-muted-foreground">
                Comprehensive checklists for various testing scenarios to ensure nothing is missed.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Code Snippets</h3>
              <p className="mt-2 text-muted-foreground">
                Reusable code snippets for test automation, API testing, and other QA tasks.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium">QA Theory</h3>
              <p className="mt-2 text-muted-foreground">
                Theoretical knowledge and methodologies in software testing and quality assurance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Checklists */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Checklists
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Most popular and useful testing checklists to improve your QA processes.
              </p>
            </div>
            <Link
              to="/checklists"
              className="hidden md:flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              View All Checklists
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredChecklists.map((checklist, index) => (
              <ChecklistCard
                key={checklist.id}
                title={checklist.title}
                description={checklist.description}
                category={checklist.category}
                items={checklist.items}
                slug={checklist.slug}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center md:hidden">
            <Link
              to="/checklists"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              View All Checklists
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Code Snippets */}
      <section className="py-12 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Useful Code Snippets
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ready-to-use code snippets for common testing scenarios and automation tasks.
              </p>
            </div>
            <Link
              to="/code-snippets"
              className="hidden md:flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              View All Snippets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {featuredSnippets.map((snippet, index) => (
              <CodeSnippet
                key={snippet.id}
                title={snippet.title}
                description={snippet.description}
                language={snippet.language}
                code={snippet.code}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center md:hidden">
            <Link
              to="/code-snippets"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              View All Snippets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl overflow-hidden shadow-lg">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
                Ready to elevate your QA processes?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Explore all the QA resources available on this site and take your testing to the next level.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-white/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
