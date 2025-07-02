import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_API_URL,
  import.meta.env.VITE_API_KEY
);
export const getGames = async () => {
  const { data, error } = await supabase.from("popular_games").select("");
  return { data, error };
};

export const deleteGame = async (id) => {
  const { data, error } = await supabase
    .from("popular_games")
    .delete()
    .eq("id", id);
  return { data, error };
};
export const addGame = async (game) => {
  const { data, error } = await supabase
    .from("popular_games")
    .insert([game])
    .select();
  return { data, error };
};

export const getGameById = async (id) => {
  const { data, error } = await supabase
    .from("popular_games")
    .select("title,release_year,genre,platform,rating,description")
    .eq("id", id)
    .single();
  return { data, error };
};
export const updateGame = async (id, game) => {
  const { data, error } = await supabase
    .from("popular_games")
    .update(game)
    .eq("id", id)
    .select();
  return { data, error };
};
