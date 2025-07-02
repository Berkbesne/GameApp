import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGameById, updateGame } from "../services/games";

export const EditGame = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      const { data } = await getGameById(id);
      setGame(data);
      setLoading(false);
    };
    fetchGame();
  }, [id]);

  const handleChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await updateGame(id, game);
    if (!response.error) {
      navigate("/");
    } else {
      alert(response.error.message);
    }
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (!game) return <div>Oyun bulunamadı.</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Oyunu Düzenle</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Başlık</label>
          <input
            type="text"
            name="title"
            value={game.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Çıkış Yılı</label>
          <input
            type="number"
            name="release_year"
            value={game.release_year}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Tür</label>
          <input
            type="text"
            name="genre"
            value={game.genre}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Platform</label>
          <input
            type="text"
            name="platform"
            value={game.platform}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Puan</label>
          <input
            type="number"
            name="rating"
            value={game.rating}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            min="0"
            max="10"
            step="0.1"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Açıklama</label>
          <textarea
            name="description"
            value={game.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
};
export default EditGame;
