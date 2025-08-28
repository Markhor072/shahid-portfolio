import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useSupabaseData } from '@/hooks/useSupabaseData';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { 
  About, Award, Certificate, Conference, Contact, 
  Education, Experience, Project 
} from '@/types/database';

interface FormData {
  [key: string]: any;
}

const Dashboard = () => {
  const { toast } = useToast();
  const [editingItem, setEditingItem] = useState<{table: string, id: string} | null>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [activeTab, setActiveTab] = useState('about');

  // Data hooks
  const aboutData = useSupabaseData('about');
  const awardsData = useSupabaseData('awards');
  const certificatesData = useSupabaseData('certificates');
  const conferencesData = useSupabaseData('conferences');
  const contactData = useSupabaseData('contact');
  const educationData = useSupabaseData('education');
  const experienceData = useSupabaseData('experience');
  const projectsData = useSupabaseData('projects');

  const dataHooks = {
    about: aboutData,
    awards: awardsData,
    certificates: certificatesData,
    conferences: conferencesData,
    contact: contactData,
    education: educationData,
    experience: experienceData,
    projects: projectsData,
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEdit = (table: string, item: any) => {
    setEditingItem({ table, id: item.id });
    setFormData(item);
  };

  const handleSave = async () => {
    if (!editingItem) return;
    
    try {
      const { id, ...updateData } = formData;
      await dataHooks[editingItem.table as keyof typeof dataHooks].updateItem(editingItem.id, updateData);
      setEditingItem(null);
      setFormData({});
    } catch (error) {
      console.error('Save error:', error);
    }
  };

  const handleCancel = () => {
    setEditingItem(null);
    setFormData({});
  };

  const handleDelete = async (table: string, id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    try {
      await dataHooks[table as keyof typeof dataHooks].deleteItem(id);
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleCreate = async (table: string, data: any) => {
    try {
      await dataHooks[table as keyof typeof dataHooks].createItem(data);
      setFormData({});
    } catch (error) {
      console.error('Create error:', error);
    }
  };

  const renderTable = (table: string, data: any[], fields: string[]) => {
    const isEditing = (id: string) => editingItem?.table === table && editingItem?.id === id;

    return (
      <div className="space-y-4">
        {/* Create Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New {table}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.map(field => (
                <div key={field}>
                  <Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                  {field.includes('description') || field.includes('details') || field.includes('bio') ? (
                    <Textarea
                      placeholder={field}
                      value={formData[field] || ''}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                    />
                  ) : (
                    <Input
                      placeholder={field}
                      value={formData[field] || ''}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
            <Button 
              className="mt-4" 
              onClick={() => handleCreate(table, formData)}
            >
              Create
            </Button>
          </CardContent>
        </Card>

        {/* Data Table */}
        <div className="space-y-4">
          {data.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                {isEditing(item.id) ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {fields.map(field => (
                        <div key={field}>
                          <Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                          {field.includes('description') || field.includes('details') || field.includes('bio') ? (
                            <Textarea
                              value={formData[field] || ''}
                              onChange={(e) => handleInputChange(field, e.target.value)}
                            />
                          ) : (
                            <Input
                              value={formData[field] || ''}
                              onChange={(e) => handleInputChange(field, e.target.value)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSave} size="sm">
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button onClick={handleCancel} variant="outline" size="sm">
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {fields.map(field => (
                        <div key={field}>
                          <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>
                          <p className="text-muted-foreground">{item[field] || 'N/A'}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={() => handleEdit(table, item)} size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button 
                        onClick={() => handleDelete(table, item.id)} 
                        size="sm" 
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gradient mb-4">Portfolio Dashboard</h1>
            <p className="text-muted-foreground">Manage your portfolio content</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="conferences">Conferences</TabsTrigger>
              <TabsTrigger value="awards">Awards</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              {renderTable('about', aboutData.data, ['bio'])}
            </TabsContent>

            <TabsContent value="experience" className="mt-6">
              {renderTable('experience', experienceData.data, ['role', 'company', 'duration', 'description'])}
            </TabsContent>

            <TabsContent value="education" className="mt-6">
              {renderTable('education', educationData.data, ['degree', 'university', 'year', 'details'])}
            </TabsContent>

            <TabsContent value="projects" className="mt-6">
              {renderTable('projects', projectsData.data, ['title', 'description', 'link'])}
            </TabsContent>

            <TabsContent value="certificates" className="mt-6">
              {renderTable('certificates', certificatesData.data, ['title', 'issuer', 'year', 'url'])}
            </TabsContent>

            <TabsContent value="conferences" className="mt-6">
              {renderTable('conferences', conferencesData.data, ['title', 'year', 'location', 'details'])}
            </TabsContent>

            <TabsContent value="awards" className="mt-6">
              {renderTable('awards', awardsData.data, ['title', 'issuer', 'year'])}
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              {renderTable('contact', contactData.data, ['email', 'phone', 'whatsapp', 'telegram', 'linkedin', 'github'])}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;