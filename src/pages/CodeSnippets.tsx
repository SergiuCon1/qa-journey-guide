
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import CodeSnippet from '../components/CodeSnippet';
import { Search } from 'lucide-react';
import { useState } from 'react';

// Sample data for code snippets
const allSnippets = [
  {
    id: 1,
    title: 'API Request with Axios',
    description: 'Basic API request template using Axios with error handling',
    language: 'javascript',
    category: 'API Testing',
    code: `import axios from 'axios';\n\nasync function fetchData() {\n  try {\n    const response = await axios.get('https://api.example.com/data');\n    console.log(response.data);\n    return response.data;\n  } catch (error) {\n    console.error('Error fetching data:', error);\n    throw error;\n  }\n}`
  },
  {
    id: 2,
    title: 'Jest API Test',
    description: 'API testing template with Jest and Supertest',
    language: 'javascript',
    category: 'API Testing',
    code: `import request from 'supertest';\nimport app from '../app';\n\ndescribe('GET /api/items', () => {\n  it('should return all items', async () => {\n    const res = await request(app).get('/api/items');\n    expect(res.statusCode).toEqual(200);\n    expect(Array.isArray(res.body)).toBeTruthy();\n  });\n});`
  },
  {
    id: 3,
    title: 'Cypress E2E Test',
    description: 'Cypress end-to-end test template for a login flow',
    language: 'javascript',
    category: 'E2E Testing',
    code: `describe('Login Flow', () => {\n  beforeEach(() => {\n    cy.visit('/login');\n  });\n\n  it('should login successfully with valid credentials', () => {\n    cy.get('[data-cy=username]').type('testuser');\n    cy.get('[data-cy=password]').type('password123');\n    cy.get('[data-cy=submit]').click();\n    cy.url().should('include', '/dashboard');\n    cy.get('[data-cy=welcome-message]').should('contain', 'Welcome, Test User');\n  });\n});`
  },
  {
    id: 4,
    title: 'Selenium WebDriver Test',
    description: 'Java Selenium WebDriver test template',
    language: 'java',
    category: 'UI Testing',
    code: `import org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.chrome.ChromeDriver;\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport static org.junit.Assert.assertEquals;\n\npublic class LoginTest {\n  private WebDriver driver;\n\n  @Before\n  public void setUp() {\n    System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");\n    driver = new ChromeDriver();\n    driver.manage().window().maximize();\n  }\n\n  @Test\n  public void testLogin() {\n    driver.get("https://example.com/login");\n    WebElement username = driver.findElement(By.id("username"));\n    WebElement password = driver.findElement(By.id("password"));\n    WebElement loginButton = driver.findElement(By.id("login-button"));\n\n    username.sendKeys("testuser");\n    password.sendKeys("password123");\n    loginButton.click();\n\n    WebElement welcomeMessage = driver.findElement(By.id("welcome-msg"));\n    assertEquals("Welcome, Test User", welcomeMessage.getText());\n  }\n\n  @After\n  public void tearDown() {\n    driver.quit();\n  }\n}`
  },
  {
    id: 5,
    title: 'JMeter Test Plan',
    description: 'JMeter test plan for performance testing',
    language: 'xml',
    category: 'Performance Testing',
    code: `<?xml version="1.0" encoding="UTF-8"?>\n<jmeterTestPlan version="1.2" properties="5.0">\n  <hashTree>\n    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Test Plan" enabled="true">\n      <stringProp name="TestPlan.comments"></stringProp>\n      <boolProp name="TestPlan.functional_mode">false</boolProp>\n      <boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>\n      <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>\n      <elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n        <collectionProp name="Arguments.arguments"/>\n      </elementProp>\n    </TestPlan>\n    <hashTree>\n      <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">\n        <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>\n        <elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">\n          <boolProp name="LoopController.continue_forever">false</boolProp>\n          <stringProp name="LoopController.loops">1</stringProp>\n        </elementProp>\n        <stringProp name="ThreadGroup.num_threads">100</stringProp>\n        <stringProp name="ThreadGroup.ramp_time">10</stringProp>\n        <boolProp name="ThreadGroup.scheduler">false</boolProp>\n        <stringProp name="ThreadGroup.duration"></stringProp>\n        <stringProp name="ThreadGroup.delay"></stringProp>\n      </ThreadGroup>\n    </hashTree>\n  </hashTree>\n</jmeterTestPlan>`
  }
];

// Available categories for filtering
const categories = [
  'All',
  'API Testing',
  'E2E Testing',
  'UI Testing',
  'Performance Testing'
];

// Available languages for filtering
const languages = [
  'All',
  'javascript',
  'java',
  'python',
  'xml'
];

const CodeSnippets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  
  // Filter snippets based on search query, category, and language
  const filteredSnippets = allSnippets.filter(snippet => {
    const matchesSearch = snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         snippet.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || snippet.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'All' || snippet.language === selectedLanguage;
    
    return matchesSearch && matchesCategory && matchesLanguage;
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
              QA Code Snippets
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A collection of ready-to-use code snippets for test automation,
              API testing, performance testing, and more.
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
                  placeholder="Search code snippets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
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
                <select
                  className="block w-full py-2 px-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  {languages.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
          
          {/* Results Section */}
          <div className="mt-12">
            {filteredSnippets.length > 0 ? (
              <div className="grid grid-cols-1 gap-8">
                {filteredSnippets.map((snippet, index) => (
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
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  No code snippets found. Please try another search or filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default CodeSnippets;
