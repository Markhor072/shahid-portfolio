import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { useSupabaseData } from '@/hooks/useSupabaseData';
import { Experience } from '@/types/database';

const ExperienceSection = () => {
  const { data: experiences, loading } = useSupabaseData('experience');

  if (loading) {
    return (
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-6">
              <div className="h-12 bg-muted rounded w-64 mx-auto mb-12"></div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Work Experience</h2>
            <p className="text-muted-foreground">Professional journey and key roles</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="card-glow hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-2 rounded-lg bg-accent/10 text-accent"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Briefcase className="h-6 w-6" />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{exp.role}</CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <span className="hidden sm:block">•</span>
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;