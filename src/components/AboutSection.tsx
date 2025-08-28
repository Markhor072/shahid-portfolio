import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useSupabaseData } from '@/hooks/useSupabaseData';
import { About } from '@/types/database';

const AboutSection = () => {
  const { data: aboutData, loading } = useSupabaseData('about');
  const bio = aboutData[0]?.bio || "Experienced professional with a versatile skill set encompassing Data Science, Web Development, Virtual Assistance, and Event Organization. Passionate about leveraging technology to drive efficiency and innovation.";

  if (loading) {
    return (
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded w-64 mx-auto mb-8"></div>
              <div className="h-40 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
          
          <Card className="card-glow">
            <CardContent className="p-8">
              <motion.p 
                className="text-lg leading-relaxed text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {bio}
              </motion.p>
            </CardContent>
          </Card>

          {/* Skills showcase */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              'Data Science',
              'Web Development', 
              'Event Organization',
              'Virtual Assistance'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-primary">{skill}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;