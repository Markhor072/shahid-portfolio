import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Award, Medal } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      title: "Certificate of Appreciation",
      event: "ICST 2023",
      description: "International Conference of Science & Technology",
      icon: Trophy,
      year: "2023"
    },
    {
      title: "Certificate of Appreciation", 
      event: "GSTMC 2024",
      description: "Global Science Technology & Management Conference",
      icon: Award,
      year: "2024"
    },
    {
      title: "Certificate of Achievement",
      event: "Sports Gala 2022",
      description: "Recognition for outstanding participation and achievement",
      icon: Medal,
      year: "2022"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Awards & Recognition</h2>
            <p className="text-muted-foreground">Achievements and accolades</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full card-glow hover:border-primary/50 transition-all duration-300 text-center">
                    <CardHeader>
                      <motion.div 
                        className="mx-auto w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <IconComponent className="h-8 w-8" />
                      </motion.div>
                      <CardTitle className="text-lg">{award.title}</CardTitle>
                      <div className="text-sm text-primary font-semibold">
                        {award.event} • {award.year}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {award.description}
                      </p>
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

export default AwardsSection;