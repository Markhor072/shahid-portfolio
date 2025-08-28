import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, ExternalLink } from 'lucide-react';
import { useSupabaseData } from '@/hooks/useSupabaseData';
import { Project } from '@/types/database';

const ProjectsSection = () => {
  const { data: projects, loading } = useSupabaseData('projects');

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded w-64 mx-auto mb-12"></div>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="h-48 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const researchInterests = [
    "Artificial Intelligence",
    "Machine Learning", 
    "Deep Learning",
    "Data Science",
    "Computer Vision",
    "Natural Language Processing"
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Projects & Research</h2>
            <p className="text-muted-foreground">Key projects and research interests</p>
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-glow hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-2 rounded-lg bg-primary/10 text-primary"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Code className="h-6 w-6" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Research Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-glow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="p-2 rounded-lg bg-accent/10 text-accent"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Database className="h-6 w-6" />
                  </motion.div>
                  <CardTitle className="text-xl">Research Interests</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {researchInterests.map((interest, index) => (
                    <motion.div
                      key={index}
                      className="p-3 rounded-lg bg-muted/50 text-center hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm font-medium">{interest}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;