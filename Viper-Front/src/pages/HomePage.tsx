import { useEffect, useState } from "react";
import { Manga } from "../types/Manga";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import { getAllMangas } from "../services/MangaApi";

function HomePage() {
  const [data, setData] = useState<Manga[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMangas = async () => {
      try {
        const mangas = await getAllMangas();
        setData(mangas);
      } catch (error) {
        setError("Failed to load errors");
      }
    };
    loadMangas();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {data ? (
          <div className="row">
            {data.map((manga, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Link to={`/Manga/${manga.id}`}>
                  <div className="card h-100">
                    <img
                      src={
                        manga.mangaPictureURL ||
                        "https://via.placeholder.com/150"
                      }
                      className="card-img-top"
                      alt={manga.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{manga.name}</h5>
                      <p className="card-text">
                        {manga.description || "No description available."}
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Average Rating: {manga.averageRating || "N/A"}
                      </small>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">Loading...</div>
        )}
      </div>
    </>
  );
}

export default HomePage;
