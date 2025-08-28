import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
import { useSupabaseData } from '@/hooks/useSupabaseData';
import { Award } from '@/types/database';

const AwardsSection = () => {
  const { data: awards, loading } = useSupabaseData('awards');

  if (loading) {
    return (
      <section id="awards" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded w-64 mx-auto mb-12"></div>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-48 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
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
                      <Trophy className="h-8 w-8" />
                    </motion.div>
                    <CardTitle className="text-lg">{award.title}</CardTitle>
                    <div className="text-sm text-primary font-semibold">
                      {award.issuer} • {award.year}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;