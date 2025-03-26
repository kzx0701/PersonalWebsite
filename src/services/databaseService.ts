import { supabase } from "../lib/supabaseClient";

export const fetchData = async (tableName: string) => {
  const { data, error } = await supabase.from(tableName).select();
  return { data, error };
};

export const insertData = async (tableName: string, data: any) => {
  const { data: result, error } = await supabase.from(tableName).insert([data]);
  return { result, error };
};

export const updateData = async (tableName: string, id: string, data: any) => {
  const { data: result, error } = await supabase.from(tableName).update(data).eq("id", id);
  return { result, error };
};

export const deleteData = async (tableName: string, id: string) => {
  const { data, error } = await supabase.from(tableName).delete().eq("id", id);
  return { data, error };
};
