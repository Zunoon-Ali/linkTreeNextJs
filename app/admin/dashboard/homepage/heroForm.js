"use client";
import { useState, useEffect } from "react";
import { Trash2, Edit, Plus } from "lucide-react";

export default function HeroForm() {
  const [hero, setHero] = useState(null); // Null means no hero data yet
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    heroH2: "",
    heroP: "",
    heroButtonLink: "",
    heroSliderVideos: [],
  });

  const [sliderInput, setSliderInput] = useState("");

  const fetchHero = () => {
    fetch("/api/HomePage")
      .then((res) => res.json())
      .then((data) => {
        setHero(data?.hero || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHero();
  }, []);

  const handleOpenModal = (data = null) => {
    if (data) {
      setFormData(data);
    } else {
      setFormData({
        heroH2: "",
        heroP: "",
        heroButtonLink: "",
        heroSliderVideos: [],
      });
    }
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addSliderVideo = () => {
    if (sliderInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        heroSliderVideos: [...prev.heroSliderVideos, sliderInput.trim()],
      }));
      setSliderInput("");
    }
  };

  const removeSliderVideo = (index) => {
    setFormData((prev) => ({
      ...prev,
      heroSliderVideos: prev.heroSliderVideos.filter((_, i) => i !== index),
    }));
  };

  const handleSave = async () => {
    try {
      const res = await fetch("/api/HomePage", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hero: formData }),
      });
      if (res.ok) {
        fetchHero();
        setShowModal(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete the Hero section?")) return;
    try {
      const res = await fetch("/api/HomePage", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hero: null }), // Clear it
      });
      if (res.ok) {
        setHero(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Hero Section</h2>
        {/* Only show Add if no hero exists (Singleton pattern logic) */}
        {!hero && (
          <button
            onClick={() => handleOpenModal(null)}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            <Plus size={16} /> Add Hero
          </button>
        )}
      </div>

      {!hero ? (
        <p className="text-gray-500 text-center py-4">No Hero section data found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-50 text-sm uppercase text-gray-500">
                <th className="py-3 px-4">Heading</th>
                <th className="py-3 px-4">Paragraph</th>
                <th className="py-3 px-4">Link</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{hero.heroH2}</td>
                <td className="py-3 px-4 text-gray-600 truncate max-w-xs">{hero.heroP}</td>
                <td className="py-3 px-4 text-blue-600">{hero.heroButtonLink}</td>
                <td className="py-3 px-4 flex justify-end gap-3">
                  <button
                    onClick={() => handleOpenModal(hero)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={handleDelete}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">
              {hero ? "Edit Hero Section" : "Add Hero Section"}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Heading (H2)</label>
                <input
                  name="heroH2"
                  value={formData.heroH2}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Enter main heading"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Paragraph</label>
                <textarea
                  name="heroP"
                  value={formData.heroP}
                  onChange={handleChange}
                  className="w-full border p-2 rounded h-24"
                  placeholder="Enter description text"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Button Link</label>
                <input
                  name="heroButtonLink"
                  value={formData.heroButtonLink}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="/example"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Slider Videos (URLs)</label>
                <div className="flex gap-2 mb-2">
                  <input
                    value={sliderInput}
                    onChange={(e) => setSliderInput(e.target.value)}
                    className="flex-1 border p-2 rounded"
                    placeholder="Video URL"
                  />
                  <button
                    onClick={addSliderVideo}
                    className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  >
                    Add
                  </button>
                </div>
                <ul className="text-sm space-y-1">
                  {formData.heroSliderVideos.map((vid, idx) => (
                    <li key={idx} className="flex justify-between bg-gray-50 p-2 rounded">
                      <span className="truncate flex-1 mr-2">{vid}</span>
                      <button
                        onClick={() => removeSliderVideo(idx)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
