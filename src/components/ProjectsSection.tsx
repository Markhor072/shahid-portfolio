import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Banknote Authentication Dataset",
      description: "Machine learning project implementing K-Means Clustering for banknote authentication, demonstrating unsupervised learning techniques for fraud detection.",
      technologies: ["Python", "Machine Learning", "K-Means", "Data Analysis"],
      icon: Brain,
      type: "Research"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive web-based LMS developed as final year project, featuring student enrollment, course management, and assessment tools.",
      technologies: ["Web Development", "Database Design", "Full Stack"],
      icon: Code,
      type: "Final Year Project"
    }
  ];

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
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={index}
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
                          <IconComponent className="h-6 w-6" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                            <Badge variant="secondary" className="text-xs">
                              {project.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="border-primary/50 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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