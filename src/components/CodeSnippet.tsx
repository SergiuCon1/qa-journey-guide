
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface CodeSnippetProps {
  title: string;
  description: string;
  language: string;
  code: string;
  index: number;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  title,
  description,
  language,
  code,
  index,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast('Code copied to clipboard', {
      description: 'You can now paste it in your project',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="rounded-xl overflow-hidden border border-border bg-white shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      
      <div className="relative bg-secondary/50 border-t border-border">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={copyToClipboard}
            className="rounded-md bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
        
        <div className="overflow-x-auto p-4">
          <pre className="text-sm">
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </div>
        
        <div className="px-4 py-2 border-t border-border text-xs text-muted-foreground">
          {language.toUpperCase()}
        </div>
      </div>
    </motion.div>
  );
};

export default CodeSnippet;
