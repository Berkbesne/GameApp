import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addGame } from "../services/games";
import { toast } from "react-toastify";
const AddGame = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    release_year: "",
    genre: "",
    platform: "",
    rating: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const add = async () => {
    const { data, error } = await addGame(form);
    if (!error) {
      toast.success("Oyun başarıyla eklendi!");
      navigate("/");
    } else {
      toast.error("Oyun eklenirken bir hata oluştu!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit işlemleri burada yapılacak
    console.log(form);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Yeni Oyun Ekle</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Başlık</label>
          <input
            type="text"
            name="title"
            value={form.title}
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
            value={form.release_year}
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
            value={form.genre}
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
            value={form.platform}
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
            value={form.rating}
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
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          onClick={add}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default AddGame;
