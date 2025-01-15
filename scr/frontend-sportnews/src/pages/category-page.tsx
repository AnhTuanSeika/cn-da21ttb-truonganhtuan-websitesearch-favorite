import { useLoaderData } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import { getToken } from "../lib/utils";
import { useEffect, useState } from "react";
import axios from "axios";


function CategoryPage() {
  const { data, title } = useLoaderData () as any;
  
  const list = data.data.results as any[];
  const [favorites, setFavorites] = useState<any[]>([]);
  const [userId] = useState(getToken()?.id || null);

  useEffect(() => {
    if (userId ) {
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
      fetchFavorites();
    }
  }, [userId]);

  const handleIsFavorite = (article_id: any) => {
    return favorites.some((item) => item.id === article_id);
  };
  return (
    <div className="body-caregrypage">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div>
        <div className="grid-catogypage">
          <div className="cols-span-2 grid grid-col-2">
            {list.slice(0,5).map((item,index)=> (
              <div
                key={index}
                className={`article-box ${
                  index === 0 ? "cols-span-2" : "cols-span-1"
                }`}
                style={{
                  borderLeftWidth:
                    index === list.length - 1 ? "0" : "1px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div className="" style={{ height: "500px" }}>
                    <img src={item.image_url} alt="Logo" />
                  </div>
                  <div className="baiviet">
                    <div className="button">
                      <button className="retrospective artnews">{item.category}</button>
                      <div className="day">{item.date}</div>
                    </div>
                    {userId && (
                          <FavoriteButton
                            key={index}
                            userId={getToken().id}
                            article={item}
                            isLike={handleIsFavorite(item.article_id)}
                          />
                        )}
                    <h4 onClick={() => window.open(item.link, "_blank")}>{item.title}</h4>
                    <p>{item.description}</p>
                    <p>{item.creator}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="cols-span-1"
            style={{
              padding: "20px",
              border: "1px solid #333",
              borderLeftWidth: "0",
              borderBottomWidth: "0",
            }}
          >
            <h3 style={{ fontSize: "25px", marginBottom: "20px" }}>
              TIN TỨC ĐÁNG CHÚ Ý
            </h3>
            {list.slice(3,9).map((item,index) => (
              <div key={index}>
                <div onClick={() => window.open(item.link, "_blank")}>
                  <div className="baiviet">
                    <div className="button">
                      <button className="artnews">{item.category}</button>
                    </div>
                    {userId && (
                          <FavoriteButton
                            key={index}
                            userId={getToken().id}
                            article={item}
                            isLike={handleIsFavorite(item.article_id)}
                          />
                        )}
                    <h4 onClick={() => window.open(item.link, "_blank")}>{item.title}</h4>
                    <p>{item.description}</p>
                    <p>{item.creator}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
        <div className="title3">
          <h3>XEM THÊM</h3>
        </div>
      </div>

      <div className="body-2">
        <div className="title6" style={{ borderWidth: " 2px 2px 1px 2px " }}>
          <h2>
           LỰA CHỌN CỦA BIÊN TẬP VIÊN / LỰA CHỌN CỦA BIÊN TẬP VIÊN / LỰA CHỌN CỦA BIÊN TẬP VIÊN 
          </h2>
        </div>
        <div className="row1-1 " style={{ borderWidth: " 0px 1px 0" }}>
          {list.slice(0,3).map((item,index) => (
            <div key={index} className={`editorpick border`}>
              <div onClick={() => window.open(item.link, "_blank")}>
                <div style={{ height: "400px", width: "100%" }}>
                  <img src={item.image_url} alt="Logo" />
                </div>
                <div className="baiviet">
                  <div className="button">
                    <button className="retrospective artnews">{item.category}</button>
                    <div className="day">{item.date}</div>
                  </div>
                  {userId && (
                          <FavoriteButton
                            key={index}
                            userId={getToken().id}
                            article={item}
                            isLike={handleIsFavorite(item.article_id)}
                          />
                        )}
                    <h4 onClick={() => window.open(item.link, "_blank")}>{item.title}</h4>
                  <p>{item.description}</p>
                  <p>{item.creator}</p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <div className="title6" style={{ borderWidth: " 1px 2px" }}>
          <h2>TIN TỨC / TIN TỨC / TIN TỨC / TIN TỨC / TIN TỨC</h2>
        </div>
        <div className="row1-1 " style={{ borderWidth: "0 1px 1px" }}>
          {/* HOI */}
          {list.slice(2,8).map((item,index) => (
            <div key={index} className={`editorpick border`}>
              <div>
                <div style={{ height: "400px", width: "100%" }}>
                  <img src={item.image_url} alt="Logo" />
                </div>
                <div className="baiviet">
                  <div className="button">
                    <button className="retrospective">{item.category}</button>
                    <div className="day">{item.date}</div>
                  </div>
                  {userId && (
                          <FavoriteButton
                            key={index}
                            userId={getToken().id}
                            article={item}
                            isLike={handleIsFavorite(item.article_id)}
                          />
                        )}
                    <h4 onClick={() => window.open(item.link, "_blank")}>{item.title}</h4>
                  <p>{item.description}</p>
                  <p>{item.creator}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
