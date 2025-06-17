import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list")
      .then((response) => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">📷 Image Gallery</span>
        </div>
      </nav>

      <div className="container">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-dark" role="status" />
            <p className="mt-2">Loading images...</p>
          </div>
        ) : (
          <div className="row">
            {photos.map((image) => (
              <div className="col-md-4 col-sm-6 mb-4" key={image.id}>
                <div className="card shadow-sm h-100">
                  <img
                    src={image.download_url}
                    alt={`image_${image.id}`}
                    className="card-img-top"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Photo by {image.author}</h5>
                    <a
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      View Original
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
