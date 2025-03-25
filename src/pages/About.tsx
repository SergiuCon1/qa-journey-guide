import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { CheckCircle, FileCheck, Code, Shield, Book, Award } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

const About = () => {
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
              About Me
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Experienced QA Engineer specializing in mobile app testing, Web testing, API integration, and server interactions.
            </motion.p>
          </div>
          
          {/* Profile Section */}
          <motion.div
            className="mt-12 bg-white rounded-xl overflow-hidden shadow-sm border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <div className="h-full flex items-center justify-center p-4 md:p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full md:rounded-none">
                  <div className="rounded-full bg-gradient-to-r from-primary/10 to-primary/20 p-2">
                    <img 
                      src="/lovable-uploads/f446dfc0-0383-4317-bb5f-d695befb07e3.png" 
                      alt="Sergiu Contevici" 
                      className="h-64 w-64 object-cover rounded-full border-4 border-white shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold">Sergiu Contevici</h2>
                <p className="mt-2 text-primary">QA Engineer</p>
                <p className="mt-4 text-muted-foreground">
                  Proficient in API auto testing with Postman, Java, and tools like Charles Proxy, Selenium, and Allure. 
                  Skilled in creating test plans, implementing automation, and performing regression testing. 
                  Collaborative team player, ensuring quality releases by resolving issues with developers and enhancing testing strategies.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Test Automation
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    API Testing
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Manual Testing
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Performance Testing
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Selenium
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Cypress
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Espresso
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Experience Section */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            <div className="mt-8 space-y-12">
              <div className="relative">
                <div className="absolute top-0 left-0 w-px h-full bg-border"></div>
                <div className="space-y-12 relative">
                  <div className="relative pl-8">
                    <div className="absolute -left-2 top-0 bg-white p-1">
                      <div className="w-4 h-4 rounded-full bg-primary"></div>
                    </div>
                    <h3 className="text-xl font-medium">QA Engineer</h3>
                    <p className="text-primary mt-1">XOR • 2021 - Present</p>
                    <p className="mt-4 text-muted-foreground">
                      Experience of developing and implementing effective testing strategies to ensure the quality 
                      and reliability of software applications. Strong collaborator, ensuring timely issue resolution 
                      with developers and project managers while delivering high-quality, defect-free releases.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Implemented test automation frameworks for web and mobile applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Established QA processes and testing standards across the organization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Conducted performance testing for high-traffic applications</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute -left-2 top-0 bg-white p-1">
                      <div className="w-4 h-4 rounded-full bg-primary"></div>
                    </div>
                    <h3 className="text-xl font-medium">QA Engineer</h3>
                    <p className="text-primary mt-1">MyTresor • 2018 - 2021</p>
                    <p className="mt-4 text-muted-foreground">
                      Optimized test plans and automation scripts, focusing on API integration testing and mobile app quality assurance.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Developed and executed test plans for multiple client projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Created and maintained automated tests using Selenium and Espresso</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Conducted API testing using Postman and Charles Proxy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Skills Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Test Planning & Strategy</h3>
                <p className="mt-2 text-muted-foreground">
                  Expertise in creating comprehensive test plans, test strategies, and defining testing methodologies.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Test Automation</h3>
                <p className="mt-2 text-muted-foreground">
                  Proficient in creating and maintaining test automation frameworks using Selenium, Cypress, and Espresso.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Mobile App Testing</h3>
                <p className="mt-2 text-muted-foreground">
                  Experience in testing mobile applications on different platforms using tools like Espresso and Appium.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Performance Testing</h3>
                <p className="mt-2 text-muted-foreground">
                  Skilled in performance testing using JMeter and other performance testing tools.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">API Testing</h3>
                <p className="mt-2 text-muted-foreground">
                  Extensive experience in testing RESTful APIs using Postman, Java, and Charles Proxy.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Certifications Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-xl font-medium">ISTQB Certified Tester - Foundation Level</h3>
                <p className="mt-2 text-muted-foreground">
                  International Software Testing Qualifications Board
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-xl font-medium">Mobile Application Testing Certification</h3>
                <p className="mt-2 text-muted-foreground">
                  Mobile App Testing Professional Certification
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default About;
