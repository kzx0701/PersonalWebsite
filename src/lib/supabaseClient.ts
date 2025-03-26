import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://idcuxqdgtprnvudhweoa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkY3V4cWRndHBybnZ1ZGh3ZW9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NjQ0MjcsImV4cCI6MjA1ODU0MDQyN30.MHsACBjjqcWTmonmYPBVLj0b7pVIut066mYjhJLDLlw"
);
