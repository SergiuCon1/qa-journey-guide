
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ChecklistCard from '../components/ChecklistCard';
import { Search } from 'lucide-react';
import { useState } from 'react';

// Sample data for checklists
const allChecklists = [
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
  },
  {
    id: 4,
    title: 'UI/UX Testing',
    description: 'Detailed checklist for user interface and user experience testing, covering visual elements, workflows, and accessibility.',
    category: 'UI Testing',
    items: 15,
    slug: 'ui-ux-testing'
  },
  {
    id: 5,
    title: 'Performance Testing',
    description: 'Checklist for conducting performance testing, including load testing, stress testing, and endurance testing scenarios.',
    category: 'Performance',
    items: 11,
    slug: 'performance-testing'
  },
  {
    id: 6,
    title: 'Security Testing',
    description: 'Security checklist for applications, covering authentication, authorization, data protection, and common vulnerabilities.',
    category: 'Security',
    items: 14,
    slug: 'security-testing'
  },
  {
    id: 7,
    title: 'Database Testing',
    description: 'Comprehensive checklist for testing database integrity, CRUD operations, transactions, and data migrations.',
    category: 'Database',
    items: 10,
    slug: 'database-testing'
  },
  {
    id: 8,
    title: 'Usability Testing',
    description: 'Guidelines and checklist for conducting effective usability testing sessions with real users.',
    category: 'Usability',
    items: 13,
    slug: 'usability-testing'
  },
  {
    id: 9,
    title: 'Browser Compatibility',
    description: 'Checklist for testing web applications across different browsers, versions, and configurations.',
    category: 'Web Testing',
    items: 8,
    slug: 'browser-compatibility'
  }
];

// Available categories for filtering
const categories = [
  'All',
  'API Testing',
  'Mobile Testing',
  'Testing Strategies',
  'UI Testing',
  'Performance',
  'Security',
  'Database',
  'Usability',
  'Web Testing'
];

const Checklists = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter checklists based on search query and selected category
  const filteredChecklists = allChecklists.filter(checklist => {
    const matchesSearch = checklist.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         checklist.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || checklist.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Layout>
      <motion.section
        className="py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              QA Testing Checklists
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Browse through our comprehensive collection of quality assurance testing checklists 
              designed to improve your testing processes and ensure thorough coverage.
            </motion.p>
          </div>
          
          {/* Search and Filter Section */}
          <motion.div
            className="mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Search checklists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="md:w-64">
                <select
                  className="block w-full py-2 px-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
          
          {/* Results Section */}
          <div className="mt-12">
            {filteredChecklists.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredChecklists.map((checklist, index) => (
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
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  No checklists found. Please try another search or category.
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Checklists;
