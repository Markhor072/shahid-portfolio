import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Brain, Code, Database, Users, Smartphone } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      name: "Intro to AI",
      provider: "IBM",
      icon: Brain,
      category: "AI/ML"
    },
    {
      name: "Supervised ML",
      provider: "Stanford & DeepLearning.AI",
      icon: Database,
      category: "AI/ML"
    },
    {
      name: "Data Science Foundations",
      provider: "University of London",
      icon: Database,
      category: "Data Science"
    },
    {
      name: "Technical Support Fundamentals",
      provider: "Google",
      icon: Code,
      category: "Technical"
    },
    {
      name: "AI For Everyone",
      provider: "DeepLearning.AI",
      icon: Brain,
      category: "AI/ML"
    },
    {
      name: "Social Media Marketing",
      provider: "Pakistan Youth Force",
      icon: Smartphone,
      category: "Marketing"
    }
  ];

  const categoryColors = {
    "AI/ML": "border-primary text-primary",
    "Data Science": "border-accent text-accent", 
    "Technical": "border-blue-500 text-blue-500",
    "Marketing": "border-green-500 text-green-500"
  };

  return (
    <section id="certificates" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Certificates</h2>
            <p className="text-muted-foreground">Professional certifications and achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full card-glow hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="h-8 w-8" />
                      </motion.div>
                      
                      <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{cert.provider}</p>
                      
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${categoryColors[cert.category as keyof typeof categoryColors]}`}
                      >
                        {cert.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;