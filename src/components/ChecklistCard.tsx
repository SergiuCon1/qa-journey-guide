
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChecklistCardProps {
  title: string;
  description: string;
  category: string;
  items: number;
  slug: string;
  index: number;
}

const ChecklistCard: React.FC<ChecklistCardProps> = ({
  title,
  description,
  category,
  items,
  slug,
  index,
}) => {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden bg-white border border-border shadow-sm hover:shadow-md transition-shadow group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-primary"></div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {category}
            </span>
            <h3 className="mt-3 text-xl font-medium">{title}</h3>
            <p className="mt-2 text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Check className="mr-1 h-4 w-4" />
            <span>{items} Items</span>
          </div>
          
          <Link 
            to={`/checklists/${slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View Checklist
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ChecklistCard;
