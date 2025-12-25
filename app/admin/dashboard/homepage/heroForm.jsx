"use client";
import { useState, useEffect } from "react";

export default function HeroForm() {
  const [hero, setHero] = useState({
    heroH2: "",
    heroP: "",
    heroButtonLink: "",
    heroSliderVideos: [],
  });

  const [sliderInput, setSliderInput] = useState(""); // temp input for array
  const [showModal, setShowModal] = useState(false);

  // Fetch hero section from API
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/HomePage`)
      .then((res) => res.json())
      .then((data) => {
        if (data.hero) setHero(data.hero);
      });
  }, []);

  // Handle change for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHero((prev) => ({ ...prev, [name]: value }));
  };

  // Add slider video
  const addSliderVideo = () => {
    if (sliderInput.trim() !== "") {
      setHero((prev) => ({
        ...prev,
        heroSliderVideos: [...prev.heroSliderVideos, sliderInput.trim()],
      }));
      setSliderInput("");
    }
  };

  // Remove slider video
  const removeSliderVideo = (index) => {
    setHero((prev) => ({
      ...prev,
      heroSliderVideos: prev.heroSliderVideos.filter((_, i) => i !== index),
    }));
  };

  // Submit updated hero section
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      <HeroForm />
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/HomePage`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hero }),
      });
      const data = await res.json();
      alert("Hero section updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating hero section");
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Hero Section</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-semibold mb-1">Hero H2:</label>
          <input
            type="text"
            name="heroH2"
            value={hero.heroH2}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Hero Paragraph:</label>
          <textarea
            name="heroP"
            value={hero.heroP}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Hero Button Link:</label>
          <input
            type="text"
            name="heroButtonLink"
            value={hero.heroButtonLink}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Slider Videos */}
        <div>
          <label className="block font-semibold mb-1">Slider Videos:</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Enter video URL"
              value={sliderInput}
              onChange={(e) => setSliderInput(e.target.value)}
              className="border p-2 flex-1 rounded"
            />
            <button
              type="button"
              onClick={addSliderVideo}
              className="bg-green-500 text-white px-3 py-2 rounded"
            >
              Add
            </button>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            {hero.heroSliderVideos.map((video, index) => (
              <li key={index} className="flex justify-between items-center">
                {video}
                <button
                  type="button"
                  onClick={() => removeSliderVideo(index)}
                  className="text-red-500 ml-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Save Hero Section
        </button>
      </form>
    </div>
  );
}
