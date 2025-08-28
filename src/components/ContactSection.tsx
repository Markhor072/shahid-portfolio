import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle, Github, Linkedin, MapPin } from 'lucide-react';
import { useSupabaseData } from '@/hooks/useSupabaseData';

const ContactSection = () => {
  const { data: contacts, loading } = useSupabaseData('contact');
  const contact = contacts[0]; // Assuming single contact record

  if (loading) {
    return (
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded w-64 mx-auto mb-12"></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-32 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!contact) return null;

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      link: `mailto:${contact.email}`
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: contact.whatsapp,
      link: `https://wa.me/${contact.whatsapp?.replace(/\D/g, '')}`
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: contact.telegram,
      link: `https://t.me/${contact.telegram?.replace('@', '')}`
    },
    {
      icon: Github,
      label: "GitHub",
      value: contact.github,
      link: contact.github
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      link: contact.linkedin
    }
  ].filter(item => item.value); // Filter out empty values

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
            <p className="text-muted-foreground">
              Ready to collaborate or discuss opportunities? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full card-glow hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted/50 mb-4 text-primary`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <IconComponent className="h-6 w-6" />
                      </motion.div>
                      
                      <h3 className="font-semibold mb-2">{method.label}</h3>
                      <p className="text-muted-foreground text-sm mb-4 break-all">
                        {method.value}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        asChild
                      >
                        <a 
                          href={method.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Connect
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Card className="card-glow bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold">Based in Moscow, Russia</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Currently pursuing Master's degree at NUST MISIS and open to new opportunities
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 neon-glow"
                    asChild
                  >
                    <a href={contact.email ? `mailto:${contact.email}` : 'mailto:shahidhassankhokhar@gmail.com'}>
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href="/ShahidHassanCV.pdf" download>
                      Download CV
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;