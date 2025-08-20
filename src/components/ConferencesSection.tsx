import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const ConferencesSection = () => {
  const conferences = [
    {
      name: "ICST 2023",
      fullName: "International Conference of Science & Technology",
      year: "2023",
      location: "Pakistan",
      type: "International Conference"
    },
    {
      name: "GSTMC 2024",
      fullName: "Global Science Technology & Management Conference",
      year: "2024",
      location: "Pakistan",
      type: "Global Conference"
    },
    {
      name: "ICFAC 2024",
      fullName: "International Conference on Food & Applied Sciences",
      year: "2024",
      location: "Pakistan",
      type: "International Conference"
    },
    {
      name: "Moscow International Festival",
      fullName: "Moscow International Festival of Student Entrepreneurship",
      year: "2025",
      location: "Moscow, Russia",
      type: "International Festival"
    }
  ];

  return (
    <section id="conferences" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Conferences & Seminars</h2>
            <p className="text-muted-foreground">Participation in international conferences and events</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {conferences.map((conference, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-glow hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{conference.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-3">
                          {conference.fullName}
                        </p>
                      </div>
                      <Badge variant="outline" className="border-accent text-accent">
                        {conference.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{conference.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{conference.type}</span>
                      </div>
                    </div>
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

export default ConferencesSection;