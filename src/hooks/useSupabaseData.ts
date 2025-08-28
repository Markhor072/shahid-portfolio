import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useSupabaseData = (tableName: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data: result, error } = await supabase
        .from(tableName)
        .select('*')
        .order('id');

      if (error) throw error;
      setData(result || []);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      toast({
        title: 'Error',
        description: `Failed to fetch ${tableName}: ${errorMessage}`,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (item: any) => {
    try {
      const { data: result, error } = await supabase
        .from(tableName)
        .insert([item])
        .select()
        .single();

      if (error) throw error;
      
      setData(prev => [...prev, result]);
      toast({
        title: 'Success',
        description: `${tableName} item created successfully`,
      });
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      toast({
        title: 'Error',
        description: `Failed to create ${tableName}: ${errorMessage}`,
        variant: 'destructive',
      });
      throw err;
    }
  };

  const updateItem = async (id: string, updates: any) => {
    try {
      const { data: result, error } = await supabase
        .from(tableName)
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      
      setData(prev => prev.map(item => 
        item.id === id ? result : item
      ));
      toast({
        title: 'Success',
        description: `${tableName} item updated successfully`,
      });
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      toast({
        title: 'Error',
        description: `Failed to update ${tableName}: ${errorMessage}`,
        variant: 'destructive',
      });
      throw err;
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setData(prev => prev.filter(item => item.id !== id));
      toast({
        title: 'Success',
        description: `${tableName} item deleted successfully`,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      toast({
        title: 'Error',
        description: `Failed to delete ${tableName}: ${errorMessage}`,
        variant: 'destructive',
      });
      throw err;
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableName]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    createItem,
    updateItem,
    deleteItem
  };
};