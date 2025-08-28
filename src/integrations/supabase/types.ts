export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      about: {
        Row: {
          bio: string | null
          id: string
        }
        Insert: {
          bio?: string | null
          id?: string
        }
        Update: {
          bio?: string | null
          id?: string
        }
        Relationships: []
      }
      awards: {
        Row: {
          id: string
          issuer: string | null
          title: string | null
          year: string | null
        }
        Insert: {
          id?: string
          issuer?: string | null
          title?: string | null
          year?: string | null
        }
        Update: {
          id?: string
          issuer?: string | null
          title?: string | null
          year?: string | null
        }
        Relationships: []
      }
      certificates: {
        Row: {
          id: string
          issuer: string | null
          title: string | null
          url: string | null
          year: string | null
        }
        Insert: {
          id?: string
          issuer?: string | null
          title?: string | null
          url?: string | null
          year?: string | null
        }
        Update: {
          id?: string
          issuer?: string | null
          title?: string | null
          url?: string | null
          year?: string | null
        }
        Relationships: []
      }
      conferences: {
        Row: {
          details: string | null
          id: string
          location: string | null
          title: string | null
          year: string | null
        }
        Insert: {
          details?: string | null
          id?: string
          location?: string | null
          title?: string | null
          year?: string | null
        }
        Update: {
          details?: string | null
          id?: string
          location?: string | null
          title?: string | null
          year?: string | null
        }
        Relationships: []
      }
      contact: {
        Row: {
          email: string | null
          github: string | null
          id: string
          linkedin: string | null
          phone: string | null
          telegram: string | null
          whatsapp: string | null
        }
        Insert: {
          email?: string | null
          github?: string | null
          id?: string
          linkedin?: string | null
          phone?: string | null
          telegram?: string | null
          whatsapp?: string | null
        }
        Update: {
          email?: string | null
          github?: string | null
          id?: string
          linkedin?: string | null
          phone?: string | null
          telegram?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      education: {
        Row: {
          degree: string | null
          details: string | null
          id: string
          university: string | null
          year: string | null
        }
        Insert: {
          degree?: string | null
          details?: string | null
          id?: string
          university?: string | null
          year?: string | null
        }
        Update: {
          degree?: string | null
          details?: string | null
          id?: string
          university?: string | null
          year?: string | null
        }
        Relationships: []
      }
      experience: {
        Row: {
          company: string | null
          description: string | null
          duration: string | null
          id: string
          role: string | null
        }
        Insert: {
          company?: string | null
          description?: string | null
          duration?: string | null
          id?: string
          role?: string | null
        }
        Update: {
          company?: string | null
          description?: string | null
          duration?: string | null
          id?: string
          role?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          description: string | null
          id: string
          link: string | null
          title: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          link?: string | null
          title?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          link?: string | null
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
