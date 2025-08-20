import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Chief Organizer",
      company: "Evolution Pakistan",
      period: "2023 – Present",
      description: "Leading strategic initiatives and organizing large-scale technology events, managing teams and stakeholders to deliver impactful programs."
    },
    {
      title: "Amazon Virtual Assistant",
      company: "Smart Seller 22 Store",
      period: "2022 – 2023",
      description: "Provided comprehensive virtual assistance for Amazon marketplace operations, including product research, listing optimization, and customer service."
    },
    {
      title: "Digital Marketing Expert",
      company: "A2ZSMM Panel",
      period: "2019 – 2021",
      description: "Developed and executed digital marketing strategies, managed social media campaigns, and analyzed performance metrics to drive growth."
    },
    {
      title: "Classroom Tutor",
      company: "Scholars Academy",
      period: "2021 – 2022",
      description: "Delivered engaging computer science education to students, developed curriculum materials, and mentored students in programming concepts."
    }
  ];

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
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <span className="hidden sm:block">•</span>
                          <span>{exp.period}</span>
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