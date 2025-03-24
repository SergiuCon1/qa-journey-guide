
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileCheck, Download, Share2 } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Mock data structure for the API Testing checklist
const apiTestingChecklist = {
  id: 1,
  title: 'API Testing Checklist',
  description: 'Comprehensive checklist for RESTful API testing including status codes, response validation, and security checks.',
  category: 'API Testing',
  lastUpdated: 'June 15, 2023',
  sections: [
    {
      id: 'basic',
      title: 'Basic API Testing',
      items: [
        { id: 'b1', text: 'Verify correct HTTP status codes', description: 'Check that the API returns appropriate status codes for different scenarios (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error, etc.)' },
        { id: 'b2', text: 'Validate response payload', description: 'Ensure the response body contains the expected data structure and values' },
        { id: 'b3', text: 'Check response headers', description: 'Verify that headers like Content-Type, Authorization, etc. are correct' },
        { id: 'b4', text: 'Validate error messages', description: 'Ensure error responses include helpful and appropriate error messages' },
      ]
    },
    {
      id: 'functional',
      title: 'Functional Testing',
      items: [
        { id: 'f1', text: 'Test all CRUD operations', description: 'Verify Create, Read, Update, and Delete operations work correctly' },
        { id: 'f2', text: 'Verify query parameters', description: 'Test that query parameters like pagination, filtering, and sorting work as expected' },
        { id: 'f3', text: 'Check field validations', description: 'Test field validations for required fields, data types, and value constraints' },
        { id: 'f4', text: 'Test response time', description: 'Measure and validate the API response time meets requirements' },
      ]
    },
    {
      id: 'security',
      title: 'Security Testing',
      items: [
        { id: 's1', text: 'Test authentication', description: 'Verify that protected endpoints require authentication' },
        { id: 's2', text: 'Test authorization', description: 'Verify that users can only access resources they are authorized for' },
        { id: 's3', text: 'Check input validation', description: 'Test protection against SQL injection, XSS, and other injection attacks' },
        { id: 's4', text: 'Test rate limiting', description: 'Verify that rate limiting is implemented to prevent abuse' },
      ]
    },
    {
      id: 'edge',
      title: 'Edge Cases',
      items: [
        { id: 'e1', text: 'Test boundary values', description: 'Test with minimum and maximum values for parameters' },
        { id: 'e2', text: 'Test with empty inputs', description: 'Validate behavior with empty or null values where applicable' },
        { id: 'e3', text: 'Test with special characters', description: 'Verify handling of special characters and unicode in input data' },
        { id: 'e4', text: 'Test with very large payloads', description: 'Check the API\'s behavior with unusually large request payloads' },
      ]
    }
  ],
  resources: [
    { id: 'r1', title: 'RESTful API Design Best Practices', url: 'https://example.com/api-design' },
    { id: 'r2', title: 'HTTP Status Codes Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status' },
    { id: 'r3', title: 'API Security Checklist', url: 'https://github.com/shieldfy/API-Security-Checklist' },
  ]
};

const ChecklistDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    basic: true,
    functional: true,
    security: true,
    edge: true
  });

  // In a real app, we would fetch the checklist data based on the slug
  // For this example, we're just using the mock data
  const checklist = apiTestingChecklist;
  
  const toggleSection = (sectionId: string) => {
    setOpenSections({
      ...openSections,
      [sectionId]: !openSections[sectionId]
    });
  };

  const toggleItem = (itemId: string) => {
    setCheckedItems({
      ...checkedItems,
      [itemId]: !checkedItems[itemId]
    });
  };

  const getCompletionPercentage = () => {
    const totalItems = checklist.sections.reduce((total, section) => total + section.items.length, 0);
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((checkedCount / totalItems) * 100);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => navigate('/checklists')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Checklists
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{checklist.title}</h1>
              <p className="text-muted-foreground mt-1">
                Last updated: {checklist.lastUpdated}
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileCheck className="mr-2 h-5 w-5 text-primary" />
                Overview
              </CardTitle>
              <CardDescription>
                {checklist.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-medium">Completion</div>
                  <div className="text-2xl font-bold">{getCompletionPercentage()}%</div>
                </div>
                <div className="w-1/2 h-3 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${getCompletionPercentage()}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="space-y-6"
        >
          {checklist.sections.map((section, index) => (
            <Collapsible
              key={section.id}
              open={openSections[section.id]}
              onOpenChange={() => toggleSection(section.id)}
              className="border rounded-lg overflow-hidden"
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-secondary/50 transition-colors">
                <div className="flex items-center">
                  <h3 className="text-xl font-medium">{section.title}</h3>
                  <span className="ml-3 text-sm text-muted-foreground">
                    {section.items.filter(item => checkedItems[item.id]).length} / {section.items.length}
                  </span>
                </div>
                <div className="text-muted-foreground">
                  {openSections[section.id] ? '−' : '+'}
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="p-4 pt-0 space-y-2">
                  {section.items.map((item) => (
                    <div key={item.id} className="flex gap-2 py-2 border-t border-border first:border-t-0">
                      <Checkbox
                        id={item.id}
                        checked={!!checkedItems[item.id]}
                        onCheckedChange={() => toggleItem(item.id)}
                        className="mt-0.5"
                      />
                      <div>
                        <label
                          htmlFor={item.id}
                          className={`font-medium cursor-pointer ${checkedItems[item.id] ? 'line-through text-muted-foreground' : ''}`}
                        >
                          {item.text}
                        </label>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
          
          {checklist.resources && checklist.resources.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Additional Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {checklist.resources.map(resource => (
                      <li key={resource.id}>
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center"
                        >
                          {resource.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default ChecklistDetails;
