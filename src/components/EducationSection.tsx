import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Master in Data Science & Computer Engineering",
      institution: "NUST MISIS, Moscow",
      period: "2024 – Present",
      description: "Advanced studies in Data Science and Computer Engineering with focus on AI and ML applications."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Sargodha",
      period: "2020 – 2024",
      gpa: "3.43/4",
      description: "Comprehensive study of computer science fundamentals with specialization in software development."
    }
  ];

  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Education</h2>
            <p className="text-muted-foreground">Academic journey and achievements</p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="card-glow hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-2 rounded-lg bg-primary/10 text-primary"
                        whileHover={{ scale: 1.1 }}
                      >
                        <GraduationCap className="h-6 w-6" />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <span className="font-medium">{edu.institution}</span>
                          <span className="hidden sm:block">•</span>
                          <span>{edu.period}</span>
                          {edu.gpa && (
                            <>
                              <span className="hidden sm:block">•</span>
                              <span className="font-semibold text-primary">GPA: {edu.gpa}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
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

export default EducationSection;