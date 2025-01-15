import { useEffect, useState } from "react";
import axios from "axios";

interface FavoriteButtonProps {
  userId: string;
  article: any;
  isLike: boolean;
}

const FavoriteButton = ({ userId, article, isLike }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(isLike);

  useEffect(() => {
    setIsFavorite(isLike);
  }, [isLike]);

  const handleFavoriteToggle = async () => {
    try {
    const response = await axios.post("http://localhost/backend-sportnews/favorites.php", {
        user_id: userId,
        article_id: article.article_id,
        title: article.title,
        description: article.description,
        image_url: article.image_url,
        pubDate: article.pubDate,
        category: article.category[0],
        link: article.link,
        creator: article.creator ? article.creator[0] : null,
    });

      if (response.data.status === "added") {
        setIsFavorite(true);
      } else if (response.data.status === "removed") {
        setIsFavorite(false);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <button
      onClick={handleFavoriteToggle}
      style={{ cursor: "pointer", border: "none", background: "none" }}
    >
      {isFavorite ? (
        <span role="img" aria-label="favorite" style={{ color: "red" }}>
          ❤️
        </span>
      ) : (
        <span role="img" aria-label="not-favorite" style={{ color: "gray" }}>
          🤍
        </span>
      )}
    </button>
  );
};

export default FavoriteButton;
