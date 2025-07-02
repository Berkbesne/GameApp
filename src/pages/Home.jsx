import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getGames } from "../services/games";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [popularGames, setPopularGames] = useState([]);
  const navigate = useNavigate();

  const getPopularGames = async () => {
    const { data, error } = await getGames();
    if (error) {
      setPopularGames([]);
      console.error("Error fetching popular games:", error);
    } else {
      setPopularGames(data);
    }
  };

  useEffect(() => {
    getPopularGames();
  }, []);

  // Silinen oyunu ekrandan kaldır
  const handleDelete = (id) => {
    setPopularGames((prev) => prev.filter((game) => game.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center h-20 px-6">
        <h1 className="text-3xl font-bold">Popular Games</h1>
        <button
          onClick={() => navigate("/add-game")}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Yeni Ekle
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {popularGames.map((game) => (
          <Card
            key={game.id}
            id={game.id}
            title={game.title}
            release_year={game.release_year}
            genre={game.genre}
            platform={game.platform}
            rating={game.rating}
            description={game.description}
            onDelete={handleDelete} // burası önemli!
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
