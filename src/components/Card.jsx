import React from "react";
import { deleteGame } from "../services/games";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Card = ({
  id,
  title,
  release_year,
  genre,
  platform,
  rating,
  description,
  onDelete, // yeni prop
}) => {
  const navigate = useNavigate();
  const deleteG = (id) => async () => {
    const response = await deleteGame(id);
    if (response.error) {
      toast.error("Error deleting game:", response.error);
    } else {
      toast.success("Oyun başarıyla silindi!");
      if (onDelete) onDelete(id); // silindikten sonra parent'a bildir
    }
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 text-sm mb-1">Year: {release_year}</p>
        <p className="text-gray-700 text-base mb-1">
          {genre} | {platform}
        </p>
        <p className="text-yellow-600 font-semibold mb-2">Rating: {rating}</p>
        <p className="text-gray-700 text-base">{description}</p>
        <button
          onClick={() => navigate(`/edit-game/${id}`)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
        >
          Düzenle
        </button>
        <button
          onClick={deleteG(id)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default Card;
