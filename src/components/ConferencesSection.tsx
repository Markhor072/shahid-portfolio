import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import { useSupabaseData } from '@/hooks/useSupabaseData';

const ConferencesSection = () => {
  const { data: conferences, loading } = useSupabaseData('conferences');

  if (loading) {
    return (
      <section id="conferences" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded w-64 mx-auto mb-12"></div>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-40 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
            {conferences.map((conf, index) => (
              <motion.div
                key={conf.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full card-glow hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{conf.title}</CardTitle>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{conf.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{conf.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{conf.details}</p>
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