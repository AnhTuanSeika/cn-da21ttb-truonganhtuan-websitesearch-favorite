import axios from "axios";
import { useEffect, useState } from "react";
import { getToken } from "../lib/utils";
import { useNavigate } from "react-router-dom";

function FavoritePage() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [userId] = useState(getToken().id);

  useEffect(() => {
    // Gọi API để lấy bài viết yêu thích
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(
          `http://localhost/backend-sportnews/get_favorites.php?user_id=${userId}`
        );
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    if(userId) {
      fetchFavorites();
    } else {
      navigate("/");
    }
  }, [userId]);

  return (
    <div>
      <div className="title">
        <h1>Yêu Thích</h1>
      </div>
      <div className="search-page">
        {favorites.length > 0 ? (
          favorites.map((item: any, index) => (
            <div key={index}>
              <div>
                <div className="baiviettimkiem">
                  <div style={{ height: "200px" }}>
                    <img src={item.image_url} alt="Logo" />
                  </div>
                  <div style={{ width: "100%" }}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <p>{item.creator}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Chưa có bài viết yêu thích nào.</p>
        )}
      </div>
    </div>
  );
}

export default FavoritePage;
