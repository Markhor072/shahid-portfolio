import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';
import { useSupabaseData } from '@/hooks/useSupabaseData';
import { Certificate } from '@/types/database';

const CertificatesSection = () => {
  const { data: certificates, loading } = useSupabaseData('certificates');

  if (loading) {
    return (
      <section id="certificates" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded w-64 mx-auto mb-12"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
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
    <section id="certificates" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Certificates</h2>
            <p className="text-muted-foreground">Professional certifications and achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full card-glow hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Award className="h-8 w-8" />
                    </motion.div>
                    
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{cert.title}</h3>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                    
                    <Badge variant="outline" className="text-xs border-primary text-primary">
                      {cert.year}
                    </Badge>
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

export default CertificatesSection;