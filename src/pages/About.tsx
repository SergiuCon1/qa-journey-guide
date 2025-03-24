
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { CheckCircle, FileCheck, Code, Shield, Book, Award } from 'lucide-react';

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
              Professional Quality Assurance Engineer with a passion for ensuring software excellence.
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
                <div className="h-64 bg-gradient-to-r from-primary/80 to-primary flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">QA</div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="mt-2 text-primary">Senior QA Engineer</p>
                <p className="mt-4 text-muted-foreground">
                  I am a detail-oriented Quality Assurance Engineer with over 7 years of experience 
                  in software testing and quality processes. My expertise spans manual testing, 
                  test automation, performance testing, and implementing effective QA methodologies.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Test Automation
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    API Testing
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
                    JMeter
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
                    <h3 className="text-xl font-medium">Senior QA Engineer</h3>
                    <p className="text-primary mt-1">Tech Solutions Inc. • 2020 - Present</p>
                    <p className="mt-4 text-muted-foreground">
                      Lead the QA team in implementing test automation frameworks and CI/CD integration.
                      Responsible for quality assurance across multiple projects including web and mobile applications.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Implemented Cypress test automation framework reducing regression testing time by 70%</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Established QA processes and testing standards across the organization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Conducted performance testing for high-traffic web applications</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute -left-2 top-0 bg-white p-1">
                      <div className="w-4 h-4 rounded-full bg-primary"></div>
                    </div>
                    <h3 className="text-xl font-medium">QA Engineer</h3>
                    <p className="text-primary mt-1">Digital Innovators • 2017 - 2020</p>
                    <p className="mt-4 text-muted-foreground">
                      Responsible for manual and automated testing of web and mobile applications.
                      Worked closely with development teams to implement testing into the development lifecycle.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Developed and executed test plans for multiple client projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Created and maintained automated tests using Selenium WebDriver</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>Conducted API testing using Postman and REST Assured</span>
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
                  Proficient in creating and maintaining test automation frameworks using Selenium, Cypress, and Playwright.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Security Testing</h3>
                <p className="mt-2 text-muted-foreground">
                  Experience in identifying security vulnerabilities and implementing security testing practices.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Performance Testing</h3>
                <p className="mt-2 text-muted-foreground">
                  Skilled in performance testing using JMeter, Gatling, and other performance testing tools.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">API Testing</h3>
                <p className="mt-2 text-muted-foreground">
                  Extensive experience in testing RESTful APIs, SOAP services, and GraphQL endpoints.
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
                <h3 className="text-xl font-medium">Certified Selenium Professional</h3>
                <p className="mt-2 text-muted-foreground">
                  Selenium Automation Testing Certification
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
